import {EntityId} from '@luminate/services-shared'
import {Grinder} from '../../domain/Grinder'
import {GrinderName} from '../../domain/Grinder/GrinderName'
import {IRepository} from './IRepository'

export interface IGrinderRepository extends IRepository {
  getById(id: EntityId | string): Promise<Grinder>
  getByName(name: GrinderName | string): Promise<Grinder>
  save(grinder: Grinder, id?: EntityId | string): Promise<void>
  delete(id: EntityId | string): Promise<void>
}
