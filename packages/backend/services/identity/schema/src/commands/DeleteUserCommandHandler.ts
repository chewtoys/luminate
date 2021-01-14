import {ICommandHandler, DeleteUserCommand} from '.'
import {Producer} from 'kafka-node'
import {UserDocument} from '../models'
import {UserDeletedEvent} from '../events'
import {IUsersRepo} from '../repos'

export class DeleteUserCommandHandler implements ICommandHandler<DeleteUserCommand, UserDocument> {
  constructor(private producer: Producer, private usersRepo: IUsersRepo) {}

  public async handle(command: DeleteUserCommand) {
    const {id} = command

    /*
     * Validation
     *
     * This currently couples Command and Query paths
     * One possible solution would be add Consumers on the Command path
     * which would create materialized views solely for validation purposes
     * (e.g. existing account/user names). This would either require data persistence
     * on the Command path (doesn't feel right) or upon startup make a request to the
     * Query path and store necessary validation data in memory.
     */

    const existingUser = await this.usersRepo.getById(id)

    if (!existingUser) {
      throw new Error('User not found')
    }

    const userDeletedEvent = new UserDeletedEvent(id)

    return new Promise<UserDocument>((resolve, reject) => {
      this.producer.send([{messages: JSON.stringify(userDeletedEvent), topic: 'users'}], (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(existingUser)
        }
      })
    })
  }
}
