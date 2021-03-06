import {IQueryHandler, QueryHandler} from '@nestjs/cqrs'
import {AccountMapper} from '../../../infra/mappers/AccountMapper'
import {AccountsRepo} from '../../../infra/repos'
import {ListAccountsQuery} from './ListAccountsQuery'

@QueryHandler(ListAccountsQuery)
export class ListAccountsQueryHandler implements IQueryHandler<ListAccountsQuery> {
  constructor(private readonly accountsRepo: AccountsRepo) {}

  async execute(_query: ListAccountsQuery) {
    const accounts = await this.accountsRepo.list()
    return {
      pageInfo: {
        hasNextPage: true,
      },
      edges: accounts.map(account => {
        return {
          cursor: 'fakecursor',
          node: AccountMapper.toDTO(account),
        }
      }),
    }
  }
}
