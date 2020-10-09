import {EventType} from '.'
import {Brewer} from '../Brewer'
import {IBrewerUpdatedEvent} from './IBrewerUpdatedEvent'

export class BrewerUpdatedEvent implements IBrewerUpdatedEvent {
  timestamp = new Date()
  event = EventType.BREWER_UPDATED_EVENT
  data: any

  constructor(brewer: Brewer) {
    const updatedFields = Object.fromEntries([...brewer.markedFields])
    this.data = {
      id: brewer.id.toString(),
      ...updatedFields,
    }
  }
}
