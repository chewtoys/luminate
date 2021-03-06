import {UpdateBrewerInput} from '../../../../types'
import {BrewerName} from '../../../../domain/Brewer/BrewerName'
import {EntityId} from '@luminate/services-shared'
import {BrewerDescription} from '../../../../domain/Brewer/BrewerDescription'
import {BrewerType} from '../../../../domain/Brewer/BrewerType'

export class UpdateBrewerCommand {
  id: EntityId
  name: BrewerName
  description: BrewerDescription
  type: BrewerType

  constructor(id: string, input: UpdateBrewerInput) {
    this.id = EntityId.create(id)

    if (input.name) {
      this.name = BrewerName.create({value: input.name})
    }

    if (input.description) {
      this.description = BrewerDescription.create({value: input.description})
    }

    if (input.type) {
      this.type = BrewerType.create({value: input.type})
    }
  }
}
