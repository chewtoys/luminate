import {ScopeOperations, ScopeResources} from '@luminate/mongo-utils'
import {CommandHandler, ICommandHandler} from '@nestjs/cqrs'
import {RoleAggregate} from '../../../domain/role/Role'
import {RolesRepo} from '../../../infra/repos'
import {CreateOwnerRoleCommand} from './CreateOwnerRoleComand'

@CommandHandler(CreateOwnerRoleCommand)
export class CreateOwnerRoleCommandHandler implements ICommandHandler<CreateOwnerRoleCommand> {
  constructor(private readonly rolesRepo: RolesRepo) {}

  async execute(_command: CreateOwnerRoleCommand) {
    const scopes = Object.values(ScopeOperations)
      .map(operation => {
        return Object.values(ScopeResources).map(resource => `${operation}:${resource}`)
      })
      .reduce((acc, arr) => acc.concat(arr), [])

    let ownerRole: RoleAggregate

    ownerRole = await this.rolesRepo.getByName('Owner')

    if (ownerRole) {
      ownerRole.update({scopes})
    } else {
      ownerRole = RoleAggregate.create({
        name: 'Owner',
        scopes,
      })
    }

    await this.rolesRepo.save(ownerRole)
    console.log('Updated Owner role to have all scopes')
    return
  }
}
