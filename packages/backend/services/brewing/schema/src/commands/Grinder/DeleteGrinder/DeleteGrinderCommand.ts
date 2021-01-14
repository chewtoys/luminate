import {EntityId} from '@luminate/services-shared'

export class DeleteGrinderCommand {
  id: EntityId

  constructor(id: string) {
    this.id = EntityId.create(id)
  }
}
