import {IBrewGuideCreatedEvent, IBrewGuideCreatedEventData} from './IBrewGuideCreatedEvent'
import {EventType} from '../../EventType'
import {BrewGuide} from '..'

export class BrewGuideCreatedEvent implements IBrewGuideCreatedEvent {
  timestamp = new Date()
  event = EventType.BREW_GUIDE_CREATED_EVENT
  data: IBrewGuideCreatedEventData

  constructor(brewGuide: BrewGuide) {
    const createdFields = Object.fromEntries([...brewGuide.markedFields])
    this.data = {
      id: brewGuide.id.toString(),
      name: brewGuide.name.value,
      recipeId: brewGuide.recipeId.toString(),
      ...createdFields,
    }
  }
}
