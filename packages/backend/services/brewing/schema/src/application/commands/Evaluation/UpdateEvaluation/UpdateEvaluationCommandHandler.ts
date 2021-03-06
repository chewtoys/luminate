import {UpdateEvaluationCommand, IUpdateEvaluationCommandHandler} from '.'
import {IEventRegistry} from '../../../../infra'
import {IEvaluationRepository} from '../../../../infra/repositories'
import {EvaluationAttributes} from '../../../../domain/Evaluation'
import {DateEntity} from '../../../../domain/Date'

export class UpdateEvaluationCommandHandler implements IUpdateEvaluationCommandHandler {
  constructor(private eventRegistry: IEventRegistry, private evaluationRepo: IEvaluationRepository) {}
  handle(command: UpdateEvaluationCommand) {
    return new Promise<any>(async (resolve, reject) => {
      const evaluation = await this.evaluationRepo.getById(command.id)

      if (!evaluation) {
        reject('Evaluation does not exist')
        return
      }

      const evaluationArgs: EvaluationAttributes = {}

      if (command.date) {
        evaluationArgs.date = DateEntity.create({value: command.date})
      }

      evaluation.update(evaluationArgs)

      this.evaluationRepo
        .save(evaluation)
        .then(() => {
          this.eventRegistry.markAggregateForPublish(evaluation)
          this.eventRegistry.publishEvents()
          resolve(evaluation)
        })
        .catch(reject)
    })
  }
}
