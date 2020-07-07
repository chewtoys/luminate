import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
export type MutationSuccessResponse<T extends (...args: any[]) => any[]> = ThenArg<
  ReturnType<ThenArg<ReturnType<T>>[0]>
>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Valid cupping score input */
  ScoreFloat: any
  _FieldSet: any
}

export type Account = {
  __typename: 'Account'
  id: Scalars['ID']
  name: Scalars['String']
  users?: Maybe<Array<User>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type AccountConnection = {
  __typename: 'AccountConnection'
  pageInfo: PageInfo
  edges: Array<AccountEdge>
}

export type AccountEdge = {
  __typename: 'AccountEdge'
  cursor: Scalars['String']
  node: Account
}

export type Coffee = {
  __typename: 'Coffee'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  region?: Maybe<Region>
  varieties: Array<Variety>
  elevation?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<CoffeeComponent>>>
  notes?: Maybe<Array<Maybe<Note>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type CoffeeNotesArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type CoffeeComponent = {
  __typename: 'CoffeeComponent'
  coffee: CoffeeSummary
  percentage: Scalars['Float']
}

export type CoffeeConnection = {
  __typename: 'CoffeeConnection'
  pageInfo: PageInfo
  edges: Array<CoffeeEdge>
}

export type CoffeeEdge = {
  __typename: 'CoffeeEdge'
  cursor: Scalars['String']
  node: Coffee
}

export type CoffeeSummary = {
  __typename: 'CoffeeSummary'
  id: Scalars['ID']
  name: Scalars['String']
}

export type ComponentInput = {
  coffee: Scalars['ID']
  percentage: Scalars['Float']
}

export type Country = {
  __typename: 'Country'
  id: Scalars['ID']
  name: Scalars['String']
  regions?: Maybe<Array<Maybe<Region>>>
}

export type CountryConnection = {
  __typename: 'CountryConnection'
  pageInfo: PageInfo
  edges: Array<CountryEdge>
}

export type CountryEdge = {
  __typename: 'CountryEdge'
  cursor: Scalars['String']
  node: Country
}

export type CreateAccountInput = {
  name: Scalars['String']
  username: Scalars['String']
  password: Scalars['String']
}

export type CreateCoffeeInput = {
  name: Scalars['String']
  country?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  farm?: Maybe<Scalars['ID']>
  farmZone?: Maybe<Scalars['ID']>
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>
  elevation?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<ComponentInput>>>
}

export type CreateCuppingSessionInput = {
  internalId?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
}

export type CreateDeviceInput = {
  name: Scalars['String']
}

export type CreateFarmInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
}

export type CreateFarmZoneInput = {
  name: Scalars['String']
}

export type CreateNoteInput = {
  entityId: Scalars['ID']
  content: Scalars['String']
  field: Scalars['String']
}

export type CreateRoleInput = {
  name: Scalars['String']
  scopes?: Maybe<Array<Scalars['String']>>
}

export type CreateScoreSheetInput = {
  userId?: Maybe<Scalars['ID']>
  fragranceAroma?: Maybe<Scalars['ScoreFloat']>
  flavor?: Maybe<Scalars['ScoreFloat']>
  aftertaste?: Maybe<Scalars['ScoreFloat']>
  acidity?: Maybe<Scalars['ScoreFloat']>
  body?: Maybe<Scalars['ScoreFloat']>
  uniformity?: Maybe<Scalars['ScoreFloat']>
  cleanCup?: Maybe<Scalars['ScoreFloat']>
  balance?: Maybe<Scalars['ScoreFloat']>
  sweetness?: Maybe<Scalars['ScoreFloat']>
  overall?: Maybe<Scalars['ScoreFloat']>
  taints?: Maybe<DefectScoreInput>
  defects?: Maybe<DefectScoreInput>
}

export type CreateUserInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  username: Scalars['String']
  password: Scalars['String']
  roles?: Maybe<Array<Scalars['ID']>>
}

export type CreateVarietyInput = {
  name: Scalars['String']
}

export type CuppingSession = {
  __typename: 'CuppingSession'
  id: Scalars['ID']
  internalId?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  locked?: Maybe<Scalars['Boolean']>
  sessionCoffees?: Maybe<Array<Maybe<SessionCoffee>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type CuppingSessionConnection = {
  __typename: 'CuppingSessionConnection'
  pageInfo: PageInfo
  edges: Array<CuppingSessionEdge>
}

export type CuppingSessionEdge = {
  __typename: 'CuppingSessionEdge'
  cursor: Scalars['String']
  node: CuppingSession
}

export type DefectScore = {
  __typename: 'DefectScore'
  numberOfCups?: Maybe<Scalars['Int']>
  intensity?: Maybe<Scalars['Float']>
}

export type DefectScoreInput = {
  numberOfCups?: Maybe<Scalars['Int']>
  intensity?: Maybe<Scalars['Float']>
}

export type Device = {
  __typename: 'Device'
  id: Scalars['ID']
  name: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type DeviceConnection = {
  __typename: 'DeviceConnection'
  pageInfo: PageInfo
  edges: Array<DeviceEdge>
}

export type DeviceEdge = {
  __typename: 'DeviceEdge'
  cursor: Scalars['String']
  node: Device
}

export type Farm = {
  __typename: 'Farm'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  region?: Maybe<Region>
  farmZones: Array<FarmZone>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type FarmConnection = {
  __typename: 'FarmConnection'
  pageInfo: PageInfo
  edges: Array<FarmEdge>
}

export type FarmEdge = {
  __typename: 'FarmEdge'
  cursor: Scalars['String']
  node: Farm
}

export type FarmZone = {
  __typename: 'FarmZone'
  id: Scalars['ID']
  name: Scalars['String']
}

export type Me = UserInterface & {
  __typename: 'Me'
  id: Scalars['ID']
  username: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  account?: Maybe<Account>
  accounts: Array<Account>
  roles: Array<Role>
  scopes: Array<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Mutation = {
  __typename: 'Mutation'
  createAccount?: Maybe<Account>
  updateAccount?: Maybe<Account>
  deleteAccount?: Maybe<Account>
  addUserToAccount?: Maybe<Scalars['Boolean']>
  createRole?: Maybe<Role>
  updateRole?: Maybe<Role>
  deleteRole?: Maybe<Role>
  createUser?: Maybe<User>
  updateUser?: Maybe<User>
  deleteUser?: Maybe<User>
  updatePassword: Scalars['Boolean']
  login?: Maybe<Scalars['Boolean']>
  logout: Scalars['Boolean']
  switchAccount?: Maybe<Scalars['Boolean']>
  refreshToken?: Maybe<Scalars['Boolean']>
  createNote?: Maybe<Note>
  updateNote?: Maybe<Note>
  deleteNote?: Maybe<Note>
  createCoffee?: Maybe<Coffee>
  updateCoffee?: Maybe<Coffee>
  deleteCoffee?: Maybe<Coffee>
  updateCoffeePermissionsForAccount?: Maybe<Scalars['Boolean']>
  createFarm?: Maybe<Farm>
  updateFarm?: Maybe<Farm>
  deleteFarm?: Maybe<Farm>
  createFarmZone?: Maybe<Farm>
  updateFarmZone?: Maybe<Farm>
  deleteFarmZone?: Maybe<Farm>
  createVariety?: Maybe<Variety>
  updateVariety?: Maybe<Variety>
  deleteVariety?: Maybe<Variety>
  makeVarietyPublic?: Maybe<Scalars['Boolean']>
  createCuppingSession?: Maybe<CuppingSession>
  updateCuppingSession?: Maybe<CuppingSession>
  deleteCuppingSession?: Maybe<CuppingSession>
  updateCuppingSessionCoffees?: Maybe<CuppingSession>
  lockCuppingSession?: Maybe<CuppingSession>
  createDevice?: Maybe<Device>
  updateDevice?: Maybe<Device>
  deleteDevice?: Maybe<Device>
  createScoreSheet?: Maybe<ScoreSheet>
  updateScoreSheet?: Maybe<ScoreSheet>
  deleteScoreSheet?: Maybe<CuppingSession>
}

export type MutationCreateAccountArgs = {
  input: CreateAccountInput
}

export type MutationUpdateAccountArgs = {
  id: Scalars['ID']
  input: UpdateAccountInput
}

export type MutationDeleteAccountArgs = {
  id: Scalars['ID']
}

export type MutationAddUserToAccountArgs = {
  accountId: Scalars['ID']
  userId: Scalars['ID']
}

export type MutationCreateRoleArgs = {
  input: CreateRoleInput
}

export type MutationUpdateRoleArgs = {
  id: Scalars['ID']
  input: UpdateRoleInput
}

export type MutationDeleteRoleArgs = {
  id: Scalars['ID']
}

export type MutationCreateUserArgs = {
  input: CreateUserInput
}

export type MutationUpdateUserArgs = {
  id: Scalars['ID']
  input: UpdateUserInput
}

export type MutationDeleteUserArgs = {
  id: Scalars['ID']
}

export type MutationUpdatePasswordArgs = {
  id: Scalars['ID']
  input: UpdatePasswordInput
}

export type MutationLoginArgs = {
  username: Scalars['String']
  password: Scalars['String']
}

export type MutationSwitchAccountArgs = {
  accountId: Scalars['ID']
}

export type MutationCreateNoteArgs = {
  input?: Maybe<CreateNoteInput>
}

export type MutationUpdateNoteArgs = {
  id: Scalars['ID']
  input?: Maybe<UpdateNoteInput>
}

export type MutationDeleteNoteArgs = {
  id: Scalars['ID']
}

export type MutationCreateCoffeeArgs = {
  input: CreateCoffeeInput
}

export type MutationUpdateCoffeeArgs = {
  id: Scalars['ID']
  input: UpdateCoffeeInput
}

export type MutationDeleteCoffeeArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCoffeePermissionsForAccountArgs = {
  coffeeId: Scalars['ID']
  accountId: Scalars['ID']
  permissionTypes: Array<PermissionTypeEnum>
}

export type MutationCreateFarmArgs = {
  input: CreateFarmInput
}

export type MutationUpdateFarmArgs = {
  id: Scalars['ID']
  input: UpdateFarmInput
}

export type MutationDeleteFarmArgs = {
  id: Scalars['ID']
}

export type MutationCreateFarmZoneArgs = {
  farmId: Scalars['ID']
  input?: Maybe<CreateFarmZoneInput>
}

export type MutationUpdateFarmZoneArgs = {
  id: Scalars['ID']
  input?: Maybe<UpdateFarmZoneInput>
}

export type MutationDeleteFarmZoneArgs = {
  id: Scalars['ID']
}

export type MutationCreateVarietyArgs = {
  input: CreateVarietyInput
}

export type MutationUpdateVarietyArgs = {
  id: Scalars['ID']
  input: UpdateVarietyInput
}

export type MutationDeleteVarietyArgs = {
  id: Scalars['ID']
}

export type MutationMakeVarietyPublicArgs = {
  id: Scalars['ID']
}

export type MutationCreateCuppingSessionArgs = {
  input: CreateCuppingSessionInput
}

export type MutationUpdateCuppingSessionArgs = {
  id: Scalars['ID']
  input: UpdateCuppingSessionInput
}

export type MutationDeleteCuppingSessionArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCuppingSessionCoffeesArgs = {
  id: Scalars['ID']
  sessionCoffees: Array<SessionCoffeeInput>
}

export type MutationLockCuppingSessionArgs = {
  id: Scalars['ID']
}

export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput
}

export type MutationUpdateDeviceArgs = {
  id: Scalars['ID']
  input: UpdateDeviceInput
}

export type MutationDeleteDeviceArgs = {
  id: Scalars['ID']
}

export type MutationCreateScoreSheetArgs = {
  sessionCoffeeId: Scalars['ID']
  input: CreateScoreSheetInput
}

export type MutationUpdateScoreSheetArgs = {
  scoreSheetId: Scalars['ID']
  sessionCoffeeId: Scalars['ID']
  input: UpdateScoreSheetInput
}

export type MutationDeleteScoreSheetArgs = {
  id: Scalars['ID']
}

export type Note = {
  __typename: 'Note'
  id: Scalars['ID']
  content: Scalars['String']
  field: Scalars['String']
  createdAt?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
}

export enum OperatorEnum {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Gte = 'gte',
  Lt = 'lt',
  Lte = 'lte',
  Contains = 'contains',
  ContainsSensitive = 'containsSensitive',
}

export type PageInfo = {
  __typename: 'PageInfo'
  hasNextPage?: Maybe<Scalars['Boolean']>
  prevCursor?: Maybe<Scalars['String']>
  nextCursor?: Maybe<Scalars['String']>
}

export enum PermissionTypeEnum {
  Read = 'read',
  Write = 'write',
  Admin = 'admin',
}

export type Query = {
  __typename: 'Query'
  listAccounts: AccountConnection
  getAccount?: Maybe<Account>
  listRoles: RoleConnection
  getRole?: Maybe<Role>
  listUsers: UserConnection
  getUser?: Maybe<User>
  me?: Maybe<Me>
  listCoffees: CoffeeConnection
  getCoffee?: Maybe<Coffee>
  listCountries: CountryConnection
  getCountry?: Maybe<Country>
  listFarms: FarmConnection
  getFarm?: Maybe<Farm>
  listRegions: RegionConnection
  getRegion?: Maybe<Region>
  listVarieties: VarietyConnection
  getVariety?: Maybe<Variety>
  listCuppingSessions: CuppingSessionConnection
  getCuppingSession?: Maybe<CuppingSession>
  getCuppingSessionCoffee?: Maybe<SessionCoffee>
  listDevices: DeviceConnection
  getDevice?: Maybe<Device>
  listScoreSheets?: Maybe<Array<Maybe<ScoreSheet>>>
  getScoreSheet?: Maybe<ScoreSheet>
}

export type QueryListAccountsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetAccountArgs = {
  id: Scalars['ID']
}

export type QueryListRolesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetRoleArgs = {
  id: Scalars['ID']
}

export type QueryListUsersArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetUserArgs = {
  id: Scalars['ID']
}

export type QueryListCoffeesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetCoffeeArgs = {
  id: Scalars['ID']
}

export type QueryListCountriesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetCountryArgs = {
  id: Scalars['ID']
}

export type QueryListFarmsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetFarmArgs = {
  id: Scalars['ID']
}

export type QueryListRegionsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetRegionArgs = {
  id: Scalars['ID']
}

export type QueryListVarietiesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetVarietyArgs = {
  id: Scalars['ID']
}

export type QueryListCuppingSessionsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetCuppingSessionArgs = {
  id: Scalars['ID']
}

export type QueryGetCuppingSessionCoffeeArgs = {
  id: Scalars['ID']
}

export type QueryListDevicesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type QueryGetDeviceArgs = {
  id: Scalars['ID']
}

export type QueryListScoreSheetsArgs = {
  sessionCoffeeId: Scalars['ID']
}

export type QueryGetScoreSheetArgs = {
  sessionCoffeeId: Scalars['ID']
  scoreSheetId: Scalars['ID']
}

export type QueryInput = {
  field: Scalars['String']
  value?: Maybe<Scalars['String']>
  operator?: Maybe<OperatorEnum>
}

export type Region = {
  __typename: 'Region'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  farms?: Maybe<Array<Maybe<Farm>>>
}

export type RegionConnection = {
  __typename: 'RegionConnection'
  pageInfo: PageInfo
  edges: Array<RegionEdge>
}

export type RegionEdge = {
  __typename: 'RegionEdge'
  cursor: Scalars['String']
  node: Region
}

export type Role = {
  __typename: 'Role'
  id: Scalars['ID']
  name: Scalars['String']
  scopes: Array<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type RoleConnection = {
  __typename: 'RoleConnection'
  pageInfo: PageInfo
  edges: Array<RoleEdge>
}

export type RoleEdge = {
  __typename: 'RoleEdge'
  cursor: Scalars['String']
  node: Role
}

export type ScoreSheet = {
  __typename: 'ScoreSheet'
  id: Scalars['ID']
  totalScore?: Maybe<Scalars['Float']>
  fragranceAroma?: Maybe<Scalars['ScoreFloat']>
  flavor?: Maybe<Scalars['ScoreFloat']>
  aftertaste?: Maybe<Scalars['ScoreFloat']>
  acidity?: Maybe<Scalars['ScoreFloat']>
  body?: Maybe<Scalars['ScoreFloat']>
  uniformity?: Maybe<Scalars['ScoreFloat']>
  cleanCup?: Maybe<Scalars['ScoreFloat']>
  balance?: Maybe<Scalars['ScoreFloat']>
  sweetness?: Maybe<Scalars['ScoreFloat']>
  overall?: Maybe<Scalars['ScoreFloat']>
  taints?: Maybe<DefectScore>
  defects?: Maybe<DefectScore>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
  user?: Maybe<User>
}

export type SessionCoffee = {
  __typename: 'SessionCoffee'
  id: Scalars['ID']
  sampleNumber: Scalars['ID']
  coffee: Coffee
  averageScore?: Maybe<Scalars['Float']>
  scoreSheets?: Maybe<Array<Maybe<ScoreSheet>>>
}

export type SessionCoffeeInput = {
  sampleNumber: Scalars['ID']
  coffee: Scalars['ID']
}

export type UpdateAccountInput = {
  name?: Maybe<Scalars['String']>
}

export type UpdateCoffeeInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
  farm?: Maybe<Scalars['ID']>
  farmZone?: Maybe<Scalars['ID']>
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>
  elevation?: Maybe<Scalars['String']>
  components?: Maybe<Array<Maybe<ComponentInput>>>
}

export type UpdateCuppingSessionInput = {
  internalId?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
}

export type UpdateDeviceInput = {
  name?: Maybe<Scalars['String']>
}

export type UpdateFarmInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  region?: Maybe<Scalars['String']>
}

export type UpdateFarmZoneInput = {
  name: Scalars['String']
}

export type UpdateNoteInput = {
  entityId?: Maybe<Scalars['ID']>
  content?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
}

export type UpdatePasswordInput = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type UpdateRoleInput = {
  name?: Maybe<Scalars['String']>
  scopes?: Maybe<Array<Scalars['String']>>
}

export type UpdateScoreSheetInput = {
  userId?: Maybe<Scalars['ID']>
  fragranceAroma?: Maybe<Scalars['ScoreFloat']>
  flavor?: Maybe<Scalars['ScoreFloat']>
  aftertaste?: Maybe<Scalars['ScoreFloat']>
  acidity?: Maybe<Scalars['ScoreFloat']>
  body?: Maybe<Scalars['ScoreFloat']>
  uniformity?: Maybe<Scalars['ScoreFloat']>
  cleanCup?: Maybe<Scalars['ScoreFloat']>
  balance?: Maybe<Scalars['ScoreFloat']>
  sweetness?: Maybe<Scalars['ScoreFloat']>
  overall?: Maybe<Scalars['ScoreFloat']>
  taints?: Maybe<DefectScoreInput>
  defects?: Maybe<DefectScoreInput>
}

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  roles?: Maybe<Array<Scalars['ID']>>
}

export type UpdateVarietyInput = {
  name?: Maybe<Scalars['String']>
}

export type User = UserInterface & {
  __typename: 'User'
  id: Scalars['ID']
  username: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  accounts: Array<Account>
  roles: Array<Role>
  scopes: Array<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type UserConnection = {
  __typename: 'UserConnection'
  pageInfo: PageInfo
  edges: Array<UserEdge>
}

export type UserEdge = {
  __typename: 'UserEdge'
  cursor: Scalars['String']
  node: User
}

export type UserInterface = {
  id: Scalars['ID']
  username: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  accounts: Array<Account>
  roles: Array<Role>
  scopes: Array<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type Variety = {
  __typename: 'Variety'
  id: Scalars['ID']
  name: Scalars['String']
  background?: Maybe<Scalars['String']>
  coffees?: Maybe<Array<Maybe<Coffee>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type VarietyConnection = {
  __typename: 'VarietyConnection'
  pageInfo: PageInfo
  edges: Array<VarietyEdge>
}

export type VarietyEdge = {
  __typename: 'VarietyEdge'
  cursor: Scalars['String']
  node: Variety
}

export type CreateAccountMutationVariables = {
  input: CreateAccountInput
}

export type CreateAccountMutation = {__typename: 'Mutation'} & {
  createAccount: Maybe<{__typename: 'Account'} & Pick<Account, 'id' | 'name'>>
}

export type AddUserToAccountMutationVariables = {
  accountId: Scalars['ID']
  userId: Scalars['ID']
}

export type AddUserToAccountMutation = {__typename: 'Mutation'} & Pick<Mutation, 'addUserToAccount'>

export type ListCoffeesQueryVariables = {}

export type ListCoffeesQuery = {__typename: 'Query'} & {
  listCoffees: {__typename: 'CoffeeConnection'} & {
    edges: Array<{__typename: 'CoffeeEdge'} & {node: {__typename: 'Coffee'} & Pick<Coffee, 'id' | 'name'>}>
  }
}

export type ListCoffeesTableQueryVariables = {}

export type ListCoffeesTableQuery = {__typename: 'Query'} & {
  listCoffees: {__typename: 'CoffeeConnection'} & {
    edges: Array<
      {__typename: 'CoffeeEdge'} & {
        node: {__typename: 'Coffee'} & Pick<Coffee, 'id' | 'name' | 'createdAt' | 'updatedAt'> & {
            country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
          }
      }
    >
  }
}

export type GetCoffeeQueryVariables = {
  id: Scalars['ID']
}

export type GetCoffeeQuery = {__typename: 'Query'} & {getCoffee: Maybe<{__typename: 'Coffee'} & CoffeeFragmentFragment>}

export type CreateCoffeeMutationVariables = {
  input: CreateCoffeeInput
}

export type CreateCoffeeMutation = {__typename: 'Mutation'} & {
  createCoffee: Maybe<{__typename: 'Coffee'} & CoffeeFragmentFragment>
}

export type UpdateCoffeeMutationVariables = {
  id: Scalars['ID']
  input: UpdateCoffeeInput
}

export type UpdateCoffeeMutation = {__typename: 'Mutation'} & {
  updateCoffee: Maybe<{__typename: 'Coffee'} & CoffeeFragmentFragment>
}

export type DeleteCoffeeMutationVariables = {
  id: Scalars['ID']
}

export type DeleteCoffeeMutation = {__typename: 'Mutation'} & {
  deleteCoffee: Maybe<{__typename: 'Coffee'} & Pick<Coffee, 'id'>>
}

export type UpdateCoffeePermissionsMutationVariables = {
  coffeeId: Scalars['ID']
  accountId: Scalars['ID']
  permissionTypes: Array<PermissionTypeEnum>
}

export type UpdateCoffeePermissionsMutation = {__typename: 'Mutation'} & Pick<
  Mutation,
  'updateCoffeePermissionsForAccount'
>

export type CoffeeFragmentFragment = {__typename: 'Coffee'} & Pick<
  Coffee,
  'id' | 'name' | 'elevation' | 'createdAt' | 'updatedAt'
> & {
    country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
    region: Maybe<{__typename: 'Region'} & Pick<Region, 'id' | 'name'>>
    varieties: Array<{__typename: 'Variety'} & Pick<Variety, 'id' | 'name'>>
  }

export type ListCountriesQueryVariables = {}

export type ListCountriesQuery = {__typename: 'Query'} & {
  listCountries: {__typename: 'CountryConnection'} & {
    edges: Array<{__typename: 'CountryEdge'} & {node: {__typename: 'Country'} & Pick<Country, 'id' | 'name'>}>
  }
}

export type ListCountriesTableQueryVariables = {}

export type ListCountriesTableQuery = {__typename: 'Query'} & {
  listCountries: {__typename: 'CountryConnection'} & {
    edges: Array<{__typename: 'CountryEdge'} & {node: {__typename: 'Country'} & Pick<Country, 'id' | 'name'>}>
  }
}

export type ListAllCountriesQueryVariables = {}

export type ListAllCountriesQuery = {__typename: 'Query'} & {
  listCountries: {__typename: 'CountryConnection'} & {
    edges: Array<{__typename: 'CountryEdge'} & {node: {__typename: 'Country'} & Pick<Country, 'id' | 'name'>}>
  }
}

export type GetCountryQueryVariables = {
  id: Scalars['ID']
}

export type GetCountryQuery = {__typename: 'Query'} & {
  getCountry: Maybe<{__typename: 'Country'} & CountryFragmentFragment>
}

export type CountryFragmentFragment = {__typename: 'Country'} & Pick<Country, 'id' | 'name'> & {
    regions: Maybe<Array<Maybe<{__typename: 'Region'} & Pick<Region, 'id' | 'name'>>>>
  }

export type ListCuppingSessionsQueryVariables = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type ListCuppingSessionsQuery = {__typename: 'Query'} & {
  listCuppingSessions: {__typename: 'CuppingSessionConnection'} & {
    edges: Array<
      {__typename: 'CuppingSessionEdge'} & {
        node: {__typename: 'CuppingSession'} & Pick<
          CuppingSession,
          'id' | 'description' | 'internalId' | 'locked' | 'createdAt' | 'updatedAt'
        >
      }
    >
  }
}

export type GetCuppingSessionQueryVariables = {
  id: Scalars['ID']
}

export type GetCuppingSessionQuery = {__typename: 'Query'} & {
  getCuppingSession: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type GetCuppingSessionWithScoreSheetsQueryVariables = {
  id: Scalars['ID']
}

export type GetCuppingSessionWithScoreSheetsQuery = {__typename: 'Query'} & {
  getCuppingSession: Maybe<{__typename: 'CuppingSession'} & CuppingSessionWithScoreSheetsFragmentFragment>
}

export type GetCuppingSessionCoffeeQueryVariables = {
  id: Scalars['ID']
}

export type GetCuppingSessionCoffeeQuery = {__typename: 'Query'} & {
  getCuppingSessionCoffee: Maybe<{__typename: 'SessionCoffee'} & SessionCoffeeWithScoreSheetsFragmentFragment>
}

export type GetScoreSheetQueryVariables = {
  sessionCoffeeId: Scalars['ID']
  scoreSheetId: Scalars['ID']
}

export type GetScoreSheetQuery = {__typename: 'Query'} & {
  getScoreSheet: Maybe<{__typename: 'ScoreSheet'} & ScoreSheetFragmentFragment>
}

export type CreateCuppingSessionMutationVariables = {
  input: CreateCuppingSessionInput
}

export type CreateCuppingSessionMutation = {__typename: 'Mutation'} & {
  createCuppingSession: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type UpdateCuppingSessionMutationVariables = {
  id: Scalars['ID']
  input: UpdateCuppingSessionInput
}

export type UpdateCuppingSessionMutation = {__typename: 'Mutation'} & {
  updateCuppingSession: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type UpdateCuppingSessionCoffeesMutationVariables = {
  id: Scalars['ID']
  sessionCoffees: Array<SessionCoffeeInput>
}

export type UpdateCuppingSessionCoffeesMutation = {__typename: 'Mutation'} & {
  updateCuppingSessionCoffees: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type LockCuppingSessionMutationVariables = {
  id: Scalars['ID']
}

export type LockCuppingSessionMutation = {__typename: 'Mutation'} & {
  lockCuppingSession: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type DeleteCuppingSessionMutationVariables = {
  id: Scalars['ID']
}

export type DeleteCuppingSessionMutation = {__typename: 'Mutation'} & {
  deleteCuppingSession: Maybe<{__typename: 'CuppingSession'} & CupppingSessionFragmentFragment>
}

export type CreateScoreSheetMutationVariables = {
  sessionCoffeeId: Scalars['ID']
  input: CreateScoreSheetInput
}

export type CreateScoreSheetMutation = {__typename: 'Mutation'} & {
  createScoreSheet: Maybe<{__typename: 'ScoreSheet'} & ScoreSheetFragmentFragment>
}

export type UpdateScoreSheetMutationVariables = {
  scoreSheetId: Scalars['ID']
  sessionCoffeeId: Scalars['ID']
  input: UpdateScoreSheetInput
}

export type UpdateScoreSheetMutation = {__typename: 'Mutation'} & {
  updateScoreSheet: Maybe<{__typename: 'ScoreSheet'} & ScoreSheetFragmentFragment>
}

export type CupppingSessionFragmentFragment = {__typename: 'CuppingSession'} & Pick<
  CuppingSession,
  'id' | 'description' | 'internalId' | 'locked' | 'createdAt' | 'updatedAt'
> & {sessionCoffees: Maybe<Array<Maybe<{__typename: 'SessionCoffee'} & SessionCoffeeFragmentFragment>>>}

export type CuppingSessionWithScoreSheetsFragmentFragment = {__typename: 'CuppingSession'} & Pick<
  CuppingSession,
  'id' | 'description' | 'internalId' | 'locked' | 'createdAt' | 'updatedAt'
> & {sessionCoffees: Maybe<Array<Maybe<{__typename: 'SessionCoffee'} & SessionCoffeeWithScoreSheetsFragmentFragment>>>}

export type SessionCoffeeWithScoreSheetsFragmentFragment = {__typename: 'SessionCoffee'} & Pick<
  SessionCoffee,
  'id' | 'sampleNumber' | 'averageScore'
> & {
    coffee: {__typename: 'Coffee'} & Pick<Coffee, 'id' | 'name'>
    scoreSheets: Maybe<Array<Maybe<{__typename: 'ScoreSheet'} & ScoreSheetFragmentFragment>>>
  }

export type SessionCoffeeFragmentFragment = {__typename: 'SessionCoffee'} & Pick<
  SessionCoffee,
  'id' | 'sampleNumber'
> & {coffee: {__typename: 'Coffee'} & Pick<Coffee, 'id' | 'name'>}

export type ScoreSheetFragmentFragment = {__typename: 'ScoreSheet'} & Pick<
  ScoreSheet,
  | 'id'
  | 'totalScore'
  | 'fragranceAroma'
  | 'flavor'
  | 'aftertaste'
  | 'acidity'
  | 'body'
  | 'uniformity'
  | 'cleanCup'
  | 'balance'
  | 'sweetness'
  | 'overall'
> & {
    user: Maybe<{__typename: 'User'} & Pick<User, 'id' | 'username'>>
    taints: Maybe<{__typename: 'DefectScore'} & Pick<DefectScore, 'numberOfCups' | 'intensity'>>
    defects: Maybe<{__typename: 'DefectScore'} & Pick<DefectScore, 'numberOfCups' | 'intensity'>>
  }

export type ListFarmsQueryVariables = {}

export type ListFarmsQuery = {__typename: 'Query'} & {
  listFarms: {__typename: 'FarmConnection'} & {
    edges: Array<{__typename: 'FarmEdge'} & {node: {__typename: 'Farm'} & Pick<Farm, 'id' | 'name'>}>
  }
}

export type ListFarmsTableQueryVariables = {}

export type ListFarmsTableQuery = {__typename: 'Query'} & {
  listFarms: {__typename: 'FarmConnection'} & {
    edges: Array<
      {__typename: 'FarmEdge'} & {
        node: {__typename: 'Farm'} & Pick<Farm, 'id' | 'name' | 'createdAt' | 'updatedAt'> & {
            country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
          }
      }
    >
  }
}

export type GetFarmQueryVariables = {
  id: Scalars['ID']
}

export type GetFarmQuery = {__typename: 'Query'} & {getFarm: Maybe<{__typename: 'Farm'} & FarmFragmentFragment>}

export type CreateFarmMutationVariables = {
  input: CreateFarmInput
}

export type CreateFarmMutation = {__typename: 'Mutation'} & {
  createFarm: Maybe<{__typename: 'Farm'} & FarmFragmentFragment>
}

export type UpdateFarmMutationVariables = {
  id: Scalars['ID']
  input: UpdateFarmInput
}

export type UpdateFarmMutation = {__typename: 'Mutation'} & {
  updateFarm: Maybe<{__typename: 'Farm'} & FarmFragmentFragment>
}

export type DeleteFarmMutationVariables = {
  id: Scalars['ID']
}

export type DeleteFarmMutation = {__typename: 'Mutation'} & {deleteFarm: Maybe<{__typename: 'Farm'} & Pick<Farm, 'id'>>}

export type FarmFragmentFragment = {__typename: 'Farm'} & Pick<Farm, 'id' | 'name' | 'createdAt' | 'updatedAt'> & {
    country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
    region: Maybe<{__typename: 'Region'} & Pick<Region, 'id' | 'name'>>
    farmZones: Array<{__typename: 'FarmZone'} & Pick<FarmZone, 'id' | 'name'>>
  }

export type ListRegionsQueryVariables = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<QueryInput>>
}

export type ListRegionsQuery = {__typename: 'Query'} & {
  listRegions: {__typename: 'RegionConnection'} & {
    edges: Array<{__typename: 'RegionEdge'} & {node: {__typename: 'Region'} & Pick<Region, 'id' | 'name'>}>
  }
}

export type ListRegionsTableQueryVariables = {}

export type ListRegionsTableQuery = {__typename: 'Query'} & {
  listRegions: {__typename: 'RegionConnection'} & {
    edges: Array<
      {__typename: 'RegionEdge'} & {
        node: {__typename: 'Region'} & Pick<Region, 'id' | 'name'> & {
            country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
          }
      }
    >
  }
}

export type GetRegionQueryVariables = {
  id: Scalars['ID']
}

export type GetRegionQuery = {__typename: 'Query'} & {getRegion: Maybe<{__typename: 'Region'} & RegionFragmentFragment>}

export type RegionFragmentFragment = {__typename: 'Region'} & Pick<Region, 'id' | 'name'> & {
    country: Maybe<{__typename: 'Country'} & Pick<Country, 'id' | 'name'>>
    farms: Maybe<Array<Maybe<{__typename: 'Farm'} & Pick<Farm, 'id' | 'name'>>>>
  }

export type UserSearchQueryVariables = {
  searchText?: Maybe<Scalars['String']>
}

export type UserSearchQuery = {__typename: 'Query'} & {
  listUsers: {__typename: 'UserConnection'} & {
    edges: Array<{__typename: 'UserEdge'} & {node: {__typename: 'User'} & Pick<User, 'id' | 'username'>}>
  }
}

export type ListVarietiesQueryVariables = {}

export type ListVarietiesQuery = {__typename: 'Query'} & {
  listVarieties: {__typename: 'VarietyConnection'} & {
    edges: Array<{__typename: 'VarietyEdge'} & {node: {__typename: 'Variety'} & Pick<Variety, 'id' | 'name'>}>
  }
}

export type ListVarietiesTableQueryVariables = {}

export type ListVarietiesTableQuery = {__typename: 'Query'} & {
  listVarieties: {__typename: 'VarietyConnection'} & {
    edges: Array<
      {__typename: 'VarietyEdge'} & {
        node: {__typename: 'Variety'} & Pick<Variety, 'id' | 'name' | 'createdAt' | 'updatedAt'>
      }
    >
  }
}

export type GetVarietyQueryVariables = {
  id: Scalars['ID']
}

export type GetVarietyQuery = {__typename: 'Query'} & {
  getVariety: Maybe<{__typename: 'Variety'} & VarietyFragmentFragment>
}

export type CreateVarietyMutationVariables = {
  input: CreateVarietyInput
}

export type CreateVarietyMutation = {__typename: 'Mutation'} & {
  createVariety: Maybe<{__typename: 'Variety'} & VarietyFragmentFragment>
}

export type UpdateVarietyMutationVariables = {
  id: Scalars['ID']
  input: UpdateVarietyInput
}

export type UpdateVarietyMutation = {__typename: 'Mutation'} & {
  updateVariety: Maybe<{__typename: 'Variety'} & VarietyFragmentFragment>
}

export type DeleteVarietyMutationVariables = {
  id: Scalars['ID']
}

export type DeleteVarietyMutation = {__typename: 'Mutation'} & {
  deleteVariety: Maybe<{__typename: 'Variety'} & Pick<Variety, 'id'>>
}

export type VarietyFragmentFragment = {__typename: 'Variety'} & Pick<
  Variety,
  'id' | 'name' | 'background' | 'createdAt' | 'updatedAt'
> & {coffees: Maybe<Array<Maybe<{__typename: 'Coffee'} & Pick<Coffee, 'id' | 'name'>>>>}

export const CoffeeFragmentFragmentDoc = gql`
  fragment CoffeeFragment on Coffee {
    id
    name
    country {
      id
      name
    }
    region {
      id
      name
    }
    varieties {
      id
      name
    }
    elevation
    createdAt
    updatedAt
  }
`
export const CountryFragmentFragmentDoc = gql`
  fragment CountryFragment on Country {
    id
    name
    regions {
      id
      name
    }
  }
`
export const SessionCoffeeFragmentFragmentDoc = gql`
  fragment SessionCoffeeFragment on SessionCoffee {
    id
    sampleNumber
    coffee {
      id
      name
    }
  }
`
export const CupppingSessionFragmentFragmentDoc = gql`
  fragment CupppingSessionFragment on CuppingSession {
    id
    description
    internalId
    locked
    sessionCoffees {
      ...SessionCoffeeFragment
    }
    createdAt
    updatedAt
  }
  ${SessionCoffeeFragmentFragmentDoc}
`
export const ScoreSheetFragmentFragmentDoc = gql`
  fragment ScoreSheetFragment on ScoreSheet {
    id
    user {
      id
      username
    }
    totalScore
    fragranceAroma
    flavor
    aftertaste
    acidity
    body
    uniformity
    cleanCup
    balance
    sweetness
    overall
    taints {
      numberOfCups
      intensity
    }
    defects {
      numberOfCups
      intensity
    }
  }
`
export const SessionCoffeeWithScoreSheetsFragmentFragmentDoc = gql`
  fragment SessionCoffeeWithScoreSheetsFragment on SessionCoffee {
    id
    sampleNumber
    coffee {
      id
      name
    }
    averageScore
    scoreSheets {
      ...ScoreSheetFragment
    }
  }
  ${ScoreSheetFragmentFragmentDoc}
`
export const CuppingSessionWithScoreSheetsFragmentFragmentDoc = gql`
  fragment CuppingSessionWithScoreSheetsFragment on CuppingSession {
    id
    description
    internalId
    locked
    sessionCoffees {
      ...SessionCoffeeWithScoreSheetsFragment
    }
    createdAt
    updatedAt
  }
  ${SessionCoffeeWithScoreSheetsFragmentFragmentDoc}
`
export const FarmFragmentFragmentDoc = gql`
  fragment FarmFragment on Farm {
    id
    name
    country {
      id
      name
    }
    region {
      id
      name
    }
    farmZones {
      id
      name
    }
    createdAt
    updatedAt
  }
`
export const RegionFragmentFragmentDoc = gql`
  fragment RegionFragment on Region {
    id
    name
    country {
      id
      name
    }
    farms {
      id
      name
    }
  }
`
export const VarietyFragmentFragmentDoc = gql`
  fragment VarietyFragment on Variety {
    id
    name
    background
    coffees {
      id
      name
    }
    createdAt
    updatedAt
  }
`
export const CreateAccountDocument = gql`
  mutation CreateAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      id
      name
    }
  }
`
export type CreateAccountMutationFn = ApolloReactCommon.MutationFunction<
  CreateAccountMutation,
  CreateAccountMutationVariables
>

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(
    CreateAccountDocument,
    baseOptions,
  )
}
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>
export type CreateAccountMutationResult = ApolloReactCommon.MutationResult<CreateAccountMutation>
export type CreateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateAccountMutation,
  CreateAccountMutationVariables
>
export const AddUserToAccountDocument = gql`
  mutation AddUserToAccount($accountId: ID!, $userId: ID!) {
    addUserToAccount(accountId: $accountId, userId: $userId)
  }
`
export type AddUserToAccountMutationFn = ApolloReactCommon.MutationFunction<
  AddUserToAccountMutation,
  AddUserToAccountMutationVariables
>

/**
 * __useAddUserToAccountMutation__
 *
 * To run a mutation, you first call `useAddUserToAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserToAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserToAccountMutation, { data, loading, error }] = useAddUserToAccountMutation({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddUserToAccountMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddUserToAccountMutation, AddUserToAccountMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddUserToAccountMutation, AddUserToAccountMutationVariables>(
    AddUserToAccountDocument,
    baseOptions,
  )
}
export type AddUserToAccountMutationHookResult = ReturnType<typeof useAddUserToAccountMutation>
export type AddUserToAccountMutationResult = ApolloReactCommon.MutationResult<AddUserToAccountMutation>
export type AddUserToAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddUserToAccountMutation,
  AddUserToAccountMutationVariables
>
export const ListCoffeesDocument = gql`
  query ListCoffees {
    listCoffees {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListCoffeesQuery__
 *
 * To run a query within a React component, call `useListCoffeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCoffeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCoffeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCoffeesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCoffeesQuery, ListCoffeesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCoffeesQuery, ListCoffeesQueryVariables>(ListCoffeesDocument, baseOptions)
}
export function useListCoffeesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCoffeesQuery, ListCoffeesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCoffeesQuery, ListCoffeesQueryVariables>(ListCoffeesDocument, baseOptions)
}
export type ListCoffeesQueryHookResult = ReturnType<typeof useListCoffeesQuery>
export type ListCoffeesLazyQueryHookResult = ReturnType<typeof useListCoffeesLazyQuery>
export type ListCoffeesQueryResult = ApolloReactCommon.QueryResult<ListCoffeesQuery, ListCoffeesQueryVariables>
export const ListCoffeesTableDocument = gql`
  query ListCoffeesTable {
    listCoffees {
      edges {
        node {
          id
          name
          country {
            id
            name
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useListCoffeesTableQuery__
 *
 * To run a query within a React component, call `useListCoffeesTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCoffeesTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCoffeesTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCoffeesTableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCoffeesTableQuery, ListCoffeesTableQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCoffeesTableQuery, ListCoffeesTableQueryVariables>(
    ListCoffeesTableDocument,
    baseOptions,
  )
}
export function useListCoffeesTableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCoffeesTableQuery, ListCoffeesTableQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCoffeesTableQuery, ListCoffeesTableQueryVariables>(
    ListCoffeesTableDocument,
    baseOptions,
  )
}
export type ListCoffeesTableQueryHookResult = ReturnType<typeof useListCoffeesTableQuery>
export type ListCoffeesTableLazyQueryHookResult = ReturnType<typeof useListCoffeesTableLazyQuery>
export type ListCoffeesTableQueryResult = ApolloReactCommon.QueryResult<
  ListCoffeesTableQuery,
  ListCoffeesTableQueryVariables
>
export const GetCoffeeDocument = gql`
  query GetCoffee($id: ID!) {
    getCoffee(id: $id) {
      ...CoffeeFragment
    }
  }
  ${CoffeeFragmentFragmentDoc}
`

/**
 * __useGetCoffeeQuery__
 *
 * To run a query within a React component, call `useGetCoffeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoffeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoffeeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCoffeeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCoffeeQuery, GetCoffeeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCoffeeQuery, GetCoffeeQueryVariables>(GetCoffeeDocument, baseOptions)
}
export function useGetCoffeeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCoffeeQuery, GetCoffeeQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCoffeeQuery, GetCoffeeQueryVariables>(GetCoffeeDocument, baseOptions)
}
export type GetCoffeeQueryHookResult = ReturnType<typeof useGetCoffeeQuery>
export type GetCoffeeLazyQueryHookResult = ReturnType<typeof useGetCoffeeLazyQuery>
export type GetCoffeeQueryResult = ApolloReactCommon.QueryResult<GetCoffeeQuery, GetCoffeeQueryVariables>
export const CreateCoffeeDocument = gql`
  mutation CreateCoffee($input: CreateCoffeeInput!) {
    createCoffee(input: $input) {
      ...CoffeeFragment
    }
  }
  ${CoffeeFragmentFragmentDoc}
`
export type CreateCoffeeMutationFn = ApolloReactCommon.MutationFunction<
  CreateCoffeeMutation,
  CreateCoffeeMutationVariables
>

/**
 * __useCreateCoffeeMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeMutation, { data, loading, error }] = useCreateCoffeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCoffeeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCoffeeMutation, CreateCoffeeMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateCoffeeMutation, CreateCoffeeMutationVariables>(
    CreateCoffeeDocument,
    baseOptions,
  )
}
export type CreateCoffeeMutationHookResult = ReturnType<typeof useCreateCoffeeMutation>
export type CreateCoffeeMutationResult = ApolloReactCommon.MutationResult<CreateCoffeeMutation>
export type CreateCoffeeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCoffeeMutation,
  CreateCoffeeMutationVariables
>
export const UpdateCoffeeDocument = gql`
  mutation UpdateCoffee($id: ID!, $input: UpdateCoffeeInput!) {
    updateCoffee(id: $id, input: $input) {
      ...CoffeeFragment
    }
  }
  ${CoffeeFragmentFragmentDoc}
`
export type UpdateCoffeeMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCoffeeMutation,
  UpdateCoffeeMutationVariables
>

/**
 * __useUpdateCoffeeMutation__
 *
 * To run a mutation, you first call `useUpdateCoffeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoffeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoffeeMutation, { data, loading, error }] = useUpdateCoffeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCoffeeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCoffeeMutation, UpdateCoffeeMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateCoffeeMutation, UpdateCoffeeMutationVariables>(
    UpdateCoffeeDocument,
    baseOptions,
  )
}
export type UpdateCoffeeMutationHookResult = ReturnType<typeof useUpdateCoffeeMutation>
export type UpdateCoffeeMutationResult = ApolloReactCommon.MutationResult<UpdateCoffeeMutation>
export type UpdateCoffeeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCoffeeMutation,
  UpdateCoffeeMutationVariables
>
export const DeleteCoffeeDocument = gql`
  mutation DeleteCoffee($id: ID!) {
    deleteCoffee(id: $id) {
      id
    }
  }
`
export type DeleteCoffeeMutationFn = ApolloReactCommon.MutationFunction<
  DeleteCoffeeMutation,
  DeleteCoffeeMutationVariables
>

/**
 * __useDeleteCoffeeMutation__
 *
 * To run a mutation, you first call `useDeleteCoffeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCoffeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCoffeeMutation, { data, loading, error }] = useDeleteCoffeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCoffeeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCoffeeMutation, DeleteCoffeeMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteCoffeeMutation, DeleteCoffeeMutationVariables>(
    DeleteCoffeeDocument,
    baseOptions,
  )
}
export type DeleteCoffeeMutationHookResult = ReturnType<typeof useDeleteCoffeeMutation>
export type DeleteCoffeeMutationResult = ApolloReactCommon.MutationResult<DeleteCoffeeMutation>
export type DeleteCoffeeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteCoffeeMutation,
  DeleteCoffeeMutationVariables
>
export const UpdateCoffeePermissionsDocument = gql`
  mutation UpdateCoffeePermissions($coffeeId: ID!, $accountId: ID!, $permissionTypes: [PermissionTypeEnum!]!) {
    updateCoffeePermissionsForAccount(coffeeId: $coffeeId, accountId: $accountId, permissionTypes: $permissionTypes)
  }
`
export type UpdateCoffeePermissionsMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCoffeePermissionsMutation,
  UpdateCoffeePermissionsMutationVariables
>

/**
 * __useUpdateCoffeePermissionsMutation__
 *
 * To run a mutation, you first call `useUpdateCoffeePermissionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoffeePermissionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoffeePermissionsMutation, { data, loading, error }] = useUpdateCoffeePermissionsMutation({
 *   variables: {
 *      coffeeId: // value for 'coffeeId'
 *      accountId: // value for 'accountId'
 *      permissionTypes: // value for 'permissionTypes'
 *   },
 * });
 */
export function useUpdateCoffeePermissionsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCoffeePermissionsMutation,
    UpdateCoffeePermissionsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateCoffeePermissionsMutation, UpdateCoffeePermissionsMutationVariables>(
    UpdateCoffeePermissionsDocument,
    baseOptions,
  )
}
export type UpdateCoffeePermissionsMutationHookResult = ReturnType<typeof useUpdateCoffeePermissionsMutation>
export type UpdateCoffeePermissionsMutationResult = ApolloReactCommon.MutationResult<UpdateCoffeePermissionsMutation>
export type UpdateCoffeePermissionsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCoffeePermissionsMutation,
  UpdateCoffeePermissionsMutationVariables
>
export const ListCountriesDocument = gql`
  query ListCountries {
    listCountries {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListCountriesQuery__
 *
 * To run a query within a React component, call `useListCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCountriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCountriesQuery, ListCountriesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCountriesQuery, ListCountriesQueryVariables>(ListCountriesDocument, baseOptions)
}
export function useListCountriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCountriesQuery, ListCountriesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCountriesQuery, ListCountriesQueryVariables>(
    ListCountriesDocument,
    baseOptions,
  )
}
export type ListCountriesQueryHookResult = ReturnType<typeof useListCountriesQuery>
export type ListCountriesLazyQueryHookResult = ReturnType<typeof useListCountriesLazyQuery>
export type ListCountriesQueryResult = ApolloReactCommon.QueryResult<ListCountriesQuery, ListCountriesQueryVariables>
export const ListCountriesTableDocument = gql`
  query ListCountriesTable {
    listCountries {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListCountriesTableQuery__
 *
 * To run a query within a React component, call `useListCountriesTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCountriesTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCountriesTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCountriesTableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCountriesTableQuery, ListCountriesTableQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCountriesTableQuery, ListCountriesTableQueryVariables>(
    ListCountriesTableDocument,
    baseOptions,
  )
}
export function useListCountriesTableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCountriesTableQuery, ListCountriesTableQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCountriesTableQuery, ListCountriesTableQueryVariables>(
    ListCountriesTableDocument,
    baseOptions,
  )
}
export type ListCountriesTableQueryHookResult = ReturnType<typeof useListCountriesTableQuery>
export type ListCountriesTableLazyQueryHookResult = ReturnType<typeof useListCountriesTableLazyQuery>
export type ListCountriesTableQueryResult = ApolloReactCommon.QueryResult<
  ListCountriesTableQuery,
  ListCountriesTableQueryVariables
>
export const ListAllCountriesDocument = gql`
  query ListAllCountries {
    listCountries(limit: 500) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListAllCountriesQuery__
 *
 * To run a query within a React component, call `useListAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAllCountriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListAllCountriesQuery, ListAllCountriesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListAllCountriesQuery, ListAllCountriesQueryVariables>(
    ListAllCountriesDocument,
    baseOptions,
  )
}
export function useListAllCountriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllCountriesQuery, ListAllCountriesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListAllCountriesQuery, ListAllCountriesQueryVariables>(
    ListAllCountriesDocument,
    baseOptions,
  )
}
export type ListAllCountriesQueryHookResult = ReturnType<typeof useListAllCountriesQuery>
export type ListAllCountriesLazyQueryHookResult = ReturnType<typeof useListAllCountriesLazyQuery>
export type ListAllCountriesQueryResult = ApolloReactCommon.QueryResult<
  ListAllCountriesQuery,
  ListAllCountriesQueryVariables
>
export const GetCountryDocument = gql`
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      ...CountryFragment
    }
  }
  ${CountryFragmentFragmentDoc}
`

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCountryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, baseOptions)
}
export function useGetCountryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, baseOptions)
}
export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>
export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>
export type GetCountryQueryResult = ApolloReactCommon.QueryResult<GetCountryQuery, GetCountryQueryVariables>
export const ListCuppingSessionsDocument = gql`
  query ListCuppingSessions($cursor: String, $limit: Int, $query: [QueryInput!]) {
    listCuppingSessions(cursor: $cursor, limit: $limit, query: $query) {
      edges {
        node {
          id
          description
          internalId
          locked
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useListCuppingSessionsQuery__
 *
 * To run a query within a React component, call `useListCuppingSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCuppingSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCuppingSessionsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListCuppingSessionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCuppingSessionsQuery, ListCuppingSessionsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCuppingSessionsQuery, ListCuppingSessionsQueryVariables>(
    ListCuppingSessionsDocument,
    baseOptions,
  )
}
export function useListCuppingSessionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCuppingSessionsQuery, ListCuppingSessionsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCuppingSessionsQuery, ListCuppingSessionsQueryVariables>(
    ListCuppingSessionsDocument,
    baseOptions,
  )
}
export type ListCuppingSessionsQueryHookResult = ReturnType<typeof useListCuppingSessionsQuery>
export type ListCuppingSessionsLazyQueryHookResult = ReturnType<typeof useListCuppingSessionsLazyQuery>
export type ListCuppingSessionsQueryResult = ApolloReactCommon.QueryResult<
  ListCuppingSessionsQuery,
  ListCuppingSessionsQueryVariables
>
export const GetCuppingSessionDocument = gql`
  query GetCuppingSession($id: ID!) {
    getCuppingSession(id: $id) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`

/**
 * __useGetCuppingSessionQuery__
 *
 * To run a query within a React component, call `useGetCuppingSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCuppingSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCuppingSessionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCuppingSessionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCuppingSessionQuery, GetCuppingSessionQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCuppingSessionQuery, GetCuppingSessionQueryVariables>(
    GetCuppingSessionDocument,
    baseOptions,
  )
}
export function useGetCuppingSessionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCuppingSessionQuery, GetCuppingSessionQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCuppingSessionQuery, GetCuppingSessionQueryVariables>(
    GetCuppingSessionDocument,
    baseOptions,
  )
}
export type GetCuppingSessionQueryHookResult = ReturnType<typeof useGetCuppingSessionQuery>
export type GetCuppingSessionLazyQueryHookResult = ReturnType<typeof useGetCuppingSessionLazyQuery>
export type GetCuppingSessionQueryResult = ApolloReactCommon.QueryResult<
  GetCuppingSessionQuery,
  GetCuppingSessionQueryVariables
>
export const GetCuppingSessionWithScoreSheetsDocument = gql`
  query GetCuppingSessionWithScoreSheets($id: ID!) {
    getCuppingSession(id: $id) {
      ...CuppingSessionWithScoreSheetsFragment
    }
  }
  ${CuppingSessionWithScoreSheetsFragmentFragmentDoc}
`

/**
 * __useGetCuppingSessionWithScoreSheetsQuery__
 *
 * To run a query within a React component, call `useGetCuppingSessionWithScoreSheetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCuppingSessionWithScoreSheetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCuppingSessionWithScoreSheetsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCuppingSessionWithScoreSheetsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCuppingSessionWithScoreSheetsQuery,
    GetCuppingSessionWithScoreSheetsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetCuppingSessionWithScoreSheetsQuery,
    GetCuppingSessionWithScoreSheetsQueryVariables
  >(GetCuppingSessionWithScoreSheetsDocument, baseOptions)
}
export function useGetCuppingSessionWithScoreSheetsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCuppingSessionWithScoreSheetsQuery,
    GetCuppingSessionWithScoreSheetsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetCuppingSessionWithScoreSheetsQuery,
    GetCuppingSessionWithScoreSheetsQueryVariables
  >(GetCuppingSessionWithScoreSheetsDocument, baseOptions)
}
export type GetCuppingSessionWithScoreSheetsQueryHookResult = ReturnType<
  typeof useGetCuppingSessionWithScoreSheetsQuery
>
export type GetCuppingSessionWithScoreSheetsLazyQueryHookResult = ReturnType<
  typeof useGetCuppingSessionWithScoreSheetsLazyQuery
>
export type GetCuppingSessionWithScoreSheetsQueryResult = ApolloReactCommon.QueryResult<
  GetCuppingSessionWithScoreSheetsQuery,
  GetCuppingSessionWithScoreSheetsQueryVariables
>
export const GetCuppingSessionCoffeeDocument = gql`
  query GetCuppingSessionCoffee($id: ID!) {
    getCuppingSessionCoffee(id: $id) {
      ...SessionCoffeeWithScoreSheetsFragment
    }
  }
  ${SessionCoffeeWithScoreSheetsFragmentFragmentDoc}
`

/**
 * __useGetCuppingSessionCoffeeQuery__
 *
 * To run a query within a React component, call `useGetCuppingSessionCoffeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCuppingSessionCoffeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCuppingSessionCoffeeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCuppingSessionCoffeeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCuppingSessionCoffeeQuery, GetCuppingSessionCoffeeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCuppingSessionCoffeeQuery, GetCuppingSessionCoffeeQueryVariables>(
    GetCuppingSessionCoffeeDocument,
    baseOptions,
  )
}
export function useGetCuppingSessionCoffeeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCuppingSessionCoffeeQuery,
    GetCuppingSessionCoffeeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetCuppingSessionCoffeeQuery, GetCuppingSessionCoffeeQueryVariables>(
    GetCuppingSessionCoffeeDocument,
    baseOptions,
  )
}
export type GetCuppingSessionCoffeeQueryHookResult = ReturnType<typeof useGetCuppingSessionCoffeeQuery>
export type GetCuppingSessionCoffeeLazyQueryHookResult = ReturnType<typeof useGetCuppingSessionCoffeeLazyQuery>
export type GetCuppingSessionCoffeeQueryResult = ApolloReactCommon.QueryResult<
  GetCuppingSessionCoffeeQuery,
  GetCuppingSessionCoffeeQueryVariables
>
export const GetScoreSheetDocument = gql`
  query GetScoreSheet($sessionCoffeeId: ID!, $scoreSheetId: ID!) {
    getScoreSheet(sessionCoffeeId: $sessionCoffeeId, scoreSheetId: $scoreSheetId) {
      ...ScoreSheetFragment
    }
  }
  ${ScoreSheetFragmentFragmentDoc}
`

/**
 * __useGetScoreSheetQuery__
 *
 * To run a query within a React component, call `useGetScoreSheetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScoreSheetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScoreSheetQuery({
 *   variables: {
 *      sessionCoffeeId: // value for 'sessionCoffeeId'
 *      scoreSheetId: // value for 'scoreSheetId'
 *   },
 * });
 */
export function useGetScoreSheetQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetScoreSheetQuery, GetScoreSheetQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetScoreSheetQuery, GetScoreSheetQueryVariables>(GetScoreSheetDocument, baseOptions)
}
export function useGetScoreSheetLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetScoreSheetQuery, GetScoreSheetQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetScoreSheetQuery, GetScoreSheetQueryVariables>(
    GetScoreSheetDocument,
    baseOptions,
  )
}
export type GetScoreSheetQueryHookResult = ReturnType<typeof useGetScoreSheetQuery>
export type GetScoreSheetLazyQueryHookResult = ReturnType<typeof useGetScoreSheetLazyQuery>
export type GetScoreSheetQueryResult = ApolloReactCommon.QueryResult<GetScoreSheetQuery, GetScoreSheetQueryVariables>
export const CreateCuppingSessionDocument = gql`
  mutation CreateCuppingSession($input: CreateCuppingSessionInput!) {
    createCuppingSession(input: $input) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`
export type CreateCuppingSessionMutationFn = ApolloReactCommon.MutationFunction<
  CreateCuppingSessionMutation,
  CreateCuppingSessionMutationVariables
>

/**
 * __useCreateCuppingSessionMutation__
 *
 * To run a mutation, you first call `useCreateCuppingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCuppingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCuppingSessionMutation, { data, loading, error }] = useCreateCuppingSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCuppingSessionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCuppingSessionMutation,
    CreateCuppingSessionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<CreateCuppingSessionMutation, CreateCuppingSessionMutationVariables>(
    CreateCuppingSessionDocument,
    baseOptions,
  )
}
export type CreateCuppingSessionMutationHookResult = ReturnType<typeof useCreateCuppingSessionMutation>
export type CreateCuppingSessionMutationResult = ApolloReactCommon.MutationResult<CreateCuppingSessionMutation>
export type CreateCuppingSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCuppingSessionMutation,
  CreateCuppingSessionMutationVariables
>
export const UpdateCuppingSessionDocument = gql`
  mutation UpdateCuppingSession($id: ID!, $input: UpdateCuppingSessionInput!) {
    updateCuppingSession(id: $id, input: $input) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`
export type UpdateCuppingSessionMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCuppingSessionMutation,
  UpdateCuppingSessionMutationVariables
>

/**
 * __useUpdateCuppingSessionMutation__
 *
 * To run a mutation, you first call `useUpdateCuppingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCuppingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCuppingSessionMutation, { data, loading, error }] = useUpdateCuppingSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCuppingSessionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCuppingSessionMutation,
    UpdateCuppingSessionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateCuppingSessionMutation, UpdateCuppingSessionMutationVariables>(
    UpdateCuppingSessionDocument,
    baseOptions,
  )
}
export type UpdateCuppingSessionMutationHookResult = ReturnType<typeof useUpdateCuppingSessionMutation>
export type UpdateCuppingSessionMutationResult = ApolloReactCommon.MutationResult<UpdateCuppingSessionMutation>
export type UpdateCuppingSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCuppingSessionMutation,
  UpdateCuppingSessionMutationVariables
>
export const UpdateCuppingSessionCoffeesDocument = gql`
  mutation UpdateCuppingSessionCoffees($id: ID!, $sessionCoffees: [SessionCoffeeInput!]!) {
    updateCuppingSessionCoffees(id: $id, sessionCoffees: $sessionCoffees) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`
export type UpdateCuppingSessionCoffeesMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCuppingSessionCoffeesMutation,
  UpdateCuppingSessionCoffeesMutationVariables
>

/**
 * __useUpdateCuppingSessionCoffeesMutation__
 *
 * To run a mutation, you first call `useUpdateCuppingSessionCoffeesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCuppingSessionCoffeesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCuppingSessionCoffeesMutation, { data, loading, error }] = useUpdateCuppingSessionCoffeesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      sessionCoffees: // value for 'sessionCoffees'
 *   },
 * });
 */
export function useUpdateCuppingSessionCoffeesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCuppingSessionCoffeesMutation,
    UpdateCuppingSessionCoffeesMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateCuppingSessionCoffeesMutation,
    UpdateCuppingSessionCoffeesMutationVariables
  >(UpdateCuppingSessionCoffeesDocument, baseOptions)
}
export type UpdateCuppingSessionCoffeesMutationHookResult = ReturnType<typeof useUpdateCuppingSessionCoffeesMutation>
export type UpdateCuppingSessionCoffeesMutationResult = ApolloReactCommon.MutationResult<
  UpdateCuppingSessionCoffeesMutation
>
export type UpdateCuppingSessionCoffeesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCuppingSessionCoffeesMutation,
  UpdateCuppingSessionCoffeesMutationVariables
>
export const LockCuppingSessionDocument = gql`
  mutation LockCuppingSession($id: ID!) {
    lockCuppingSession(id: $id) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`
export type LockCuppingSessionMutationFn = ApolloReactCommon.MutationFunction<
  LockCuppingSessionMutation,
  LockCuppingSessionMutationVariables
>

/**
 * __useLockCuppingSessionMutation__
 *
 * To run a mutation, you first call `useLockCuppingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLockCuppingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lockCuppingSessionMutation, { data, loading, error }] = useLockCuppingSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLockCuppingSessionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LockCuppingSessionMutation, LockCuppingSessionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LockCuppingSessionMutation, LockCuppingSessionMutationVariables>(
    LockCuppingSessionDocument,
    baseOptions,
  )
}
export type LockCuppingSessionMutationHookResult = ReturnType<typeof useLockCuppingSessionMutation>
export type LockCuppingSessionMutationResult = ApolloReactCommon.MutationResult<LockCuppingSessionMutation>
export type LockCuppingSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LockCuppingSessionMutation,
  LockCuppingSessionMutationVariables
>
export const DeleteCuppingSessionDocument = gql`
  mutation DeleteCuppingSession($id: ID!) {
    deleteCuppingSession(id: $id) {
      ...CupppingSessionFragment
    }
  }
  ${CupppingSessionFragmentFragmentDoc}
`
export type DeleteCuppingSessionMutationFn = ApolloReactCommon.MutationFunction<
  DeleteCuppingSessionMutation,
  DeleteCuppingSessionMutationVariables
>

/**
 * __useDeleteCuppingSessionMutation__
 *
 * To run a mutation, you first call `useDeleteCuppingSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCuppingSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCuppingSessionMutation, { data, loading, error }] = useDeleteCuppingSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCuppingSessionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteCuppingSessionMutation,
    DeleteCuppingSessionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<DeleteCuppingSessionMutation, DeleteCuppingSessionMutationVariables>(
    DeleteCuppingSessionDocument,
    baseOptions,
  )
}
export type DeleteCuppingSessionMutationHookResult = ReturnType<typeof useDeleteCuppingSessionMutation>
export type DeleteCuppingSessionMutationResult = ApolloReactCommon.MutationResult<DeleteCuppingSessionMutation>
export type DeleteCuppingSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteCuppingSessionMutation,
  DeleteCuppingSessionMutationVariables
>
export const CreateScoreSheetDocument = gql`
  mutation CreateScoreSheet($sessionCoffeeId: ID!, $input: CreateScoreSheetInput!) {
    createScoreSheet(sessionCoffeeId: $sessionCoffeeId, input: $input) {
      ...ScoreSheetFragment
    }
  }
  ${ScoreSheetFragmentFragmentDoc}
`
export type CreateScoreSheetMutationFn = ApolloReactCommon.MutationFunction<
  CreateScoreSheetMutation,
  CreateScoreSheetMutationVariables
>

/**
 * __useCreateScoreSheetMutation__
 *
 * To run a mutation, you first call `useCreateScoreSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScoreSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScoreSheetMutation, { data, loading, error }] = useCreateScoreSheetMutation({
 *   variables: {
 *      sessionCoffeeId: // value for 'sessionCoffeeId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateScoreSheetMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateScoreSheetMutation, CreateScoreSheetMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateScoreSheetMutation, CreateScoreSheetMutationVariables>(
    CreateScoreSheetDocument,
    baseOptions,
  )
}
export type CreateScoreSheetMutationHookResult = ReturnType<typeof useCreateScoreSheetMutation>
export type CreateScoreSheetMutationResult = ApolloReactCommon.MutationResult<CreateScoreSheetMutation>
export type CreateScoreSheetMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateScoreSheetMutation,
  CreateScoreSheetMutationVariables
>
export const UpdateScoreSheetDocument = gql`
  mutation UpdateScoreSheet($scoreSheetId: ID!, $sessionCoffeeId: ID!, $input: UpdateScoreSheetInput!) {
    updateScoreSheet(scoreSheetId: $scoreSheetId, sessionCoffeeId: $sessionCoffeeId, input: $input) {
      ...ScoreSheetFragment
    }
  }
  ${ScoreSheetFragmentFragmentDoc}
`
export type UpdateScoreSheetMutationFn = ApolloReactCommon.MutationFunction<
  UpdateScoreSheetMutation,
  UpdateScoreSheetMutationVariables
>

/**
 * __useUpdateScoreSheetMutation__
 *
 * To run a mutation, you first call `useUpdateScoreSheetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScoreSheetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScoreSheetMutation, { data, loading, error }] = useUpdateScoreSheetMutation({
 *   variables: {
 *      scoreSheetId: // value for 'scoreSheetId'
 *      sessionCoffeeId: // value for 'sessionCoffeeId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateScoreSheetMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateScoreSheetMutation, UpdateScoreSheetMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateScoreSheetMutation, UpdateScoreSheetMutationVariables>(
    UpdateScoreSheetDocument,
    baseOptions,
  )
}
export type UpdateScoreSheetMutationHookResult = ReturnType<typeof useUpdateScoreSheetMutation>
export type UpdateScoreSheetMutationResult = ApolloReactCommon.MutationResult<UpdateScoreSheetMutation>
export type UpdateScoreSheetMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateScoreSheetMutation,
  UpdateScoreSheetMutationVariables
>
export const ListFarmsDocument = gql`
  query ListFarms {
    listFarms {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListFarmsQuery__
 *
 * To run a query within a React component, call `useListFarmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFarmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFarmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListFarmsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListFarmsQuery, ListFarmsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListFarmsQuery, ListFarmsQueryVariables>(ListFarmsDocument, baseOptions)
}
export function useListFarmsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListFarmsQuery, ListFarmsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListFarmsQuery, ListFarmsQueryVariables>(ListFarmsDocument, baseOptions)
}
export type ListFarmsQueryHookResult = ReturnType<typeof useListFarmsQuery>
export type ListFarmsLazyQueryHookResult = ReturnType<typeof useListFarmsLazyQuery>
export type ListFarmsQueryResult = ApolloReactCommon.QueryResult<ListFarmsQuery, ListFarmsQueryVariables>
export const ListFarmsTableDocument = gql`
  query ListFarmsTable {
    listFarms {
      edges {
        node {
          id
          name
          country {
            id
            name
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useListFarmsTableQuery__
 *
 * To run a query within a React component, call `useListFarmsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFarmsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFarmsTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useListFarmsTableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListFarmsTableQuery, ListFarmsTableQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListFarmsTableQuery, ListFarmsTableQueryVariables>(
    ListFarmsTableDocument,
    baseOptions,
  )
}
export function useListFarmsTableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListFarmsTableQuery, ListFarmsTableQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListFarmsTableQuery, ListFarmsTableQueryVariables>(
    ListFarmsTableDocument,
    baseOptions,
  )
}
export type ListFarmsTableQueryHookResult = ReturnType<typeof useListFarmsTableQuery>
export type ListFarmsTableLazyQueryHookResult = ReturnType<typeof useListFarmsTableLazyQuery>
export type ListFarmsTableQueryResult = ApolloReactCommon.QueryResult<ListFarmsTableQuery, ListFarmsTableQueryVariables>
export const GetFarmDocument = gql`
  query GetFarm($id: ID!) {
    getFarm(id: $id) {
      ...FarmFragment
    }
  }
  ${FarmFragmentFragmentDoc}
`

/**
 * __useGetFarmQuery__
 *
 * To run a query within a React component, call `useGetFarmQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFarmQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFarmQuery, GetFarmQueryVariables>) {
  return ApolloReactHooks.useQuery<GetFarmQuery, GetFarmQueryVariables>(GetFarmDocument, baseOptions)
}
export function useGetFarmLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFarmQuery, GetFarmQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetFarmQuery, GetFarmQueryVariables>(GetFarmDocument, baseOptions)
}
export type GetFarmQueryHookResult = ReturnType<typeof useGetFarmQuery>
export type GetFarmLazyQueryHookResult = ReturnType<typeof useGetFarmLazyQuery>
export type GetFarmQueryResult = ApolloReactCommon.QueryResult<GetFarmQuery, GetFarmQueryVariables>
export const CreateFarmDocument = gql`
  mutation CreateFarm($input: CreateFarmInput!) {
    createFarm(input: $input) {
      ...FarmFragment
    }
  }
  ${FarmFragmentFragmentDoc}
`
export type CreateFarmMutationFn = ApolloReactCommon.MutationFunction<CreateFarmMutation, CreateFarmMutationVariables>

/**
 * __useCreateFarmMutation__
 *
 * To run a mutation, you first call `useCreateFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFarmMutation, { data, loading, error }] = useCreateFarmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFarmMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFarmMutation, CreateFarmMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateFarmMutation, CreateFarmMutationVariables>(CreateFarmDocument, baseOptions)
}
export type CreateFarmMutationHookResult = ReturnType<typeof useCreateFarmMutation>
export type CreateFarmMutationResult = ApolloReactCommon.MutationResult<CreateFarmMutation>
export type CreateFarmMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateFarmMutation,
  CreateFarmMutationVariables
>
export const UpdateFarmDocument = gql`
  mutation UpdateFarm($id: ID!, $input: UpdateFarmInput!) {
    updateFarm(id: $id, input: $input) {
      ...FarmFragment
    }
  }
  ${FarmFragmentFragmentDoc}
`
export type UpdateFarmMutationFn = ApolloReactCommon.MutationFunction<UpdateFarmMutation, UpdateFarmMutationVariables>

/**
 * __useUpdateFarmMutation__
 *
 * To run a mutation, you first call `useUpdateFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFarmMutation, { data, loading, error }] = useUpdateFarmMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFarmMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFarmMutation, UpdateFarmMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateFarmMutation, UpdateFarmMutationVariables>(UpdateFarmDocument, baseOptions)
}
export type UpdateFarmMutationHookResult = ReturnType<typeof useUpdateFarmMutation>
export type UpdateFarmMutationResult = ApolloReactCommon.MutationResult<UpdateFarmMutation>
export type UpdateFarmMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateFarmMutation,
  UpdateFarmMutationVariables
>
export const DeleteFarmDocument = gql`
  mutation DeleteFarm($id: ID!) {
    deleteFarm(id: $id) {
      id
    }
  }
`
export type DeleteFarmMutationFn = ApolloReactCommon.MutationFunction<DeleteFarmMutation, DeleteFarmMutationVariables>

/**
 * __useDeleteFarmMutation__
 *
 * To run a mutation, you first call `useDeleteFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFarmMutation, { data, loading, error }] = useDeleteFarmMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFarmMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFarmMutation, DeleteFarmMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteFarmMutation, DeleteFarmMutationVariables>(DeleteFarmDocument, baseOptions)
}
export type DeleteFarmMutationHookResult = ReturnType<typeof useDeleteFarmMutation>
export type DeleteFarmMutationResult = ApolloReactCommon.MutationResult<DeleteFarmMutation>
export type DeleteFarmMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteFarmMutation,
  DeleteFarmMutationVariables
>
export const ListRegionsDocument = gql`
  query ListRegions($cursor: String, $limit: Int, $query: [QueryInput!]) {
    listRegions(cursor: $cursor, limit: $limit, query: $query) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListRegionsQuery__
 *
 * To run a query within a React component, call `useListRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRegionsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListRegionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListRegionsQuery, ListRegionsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListRegionsQuery, ListRegionsQueryVariables>(ListRegionsDocument, baseOptions)
}
export function useListRegionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListRegionsQuery, ListRegionsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListRegionsQuery, ListRegionsQueryVariables>(ListRegionsDocument, baseOptions)
}
export type ListRegionsQueryHookResult = ReturnType<typeof useListRegionsQuery>
export type ListRegionsLazyQueryHookResult = ReturnType<typeof useListRegionsLazyQuery>
export type ListRegionsQueryResult = ApolloReactCommon.QueryResult<ListRegionsQuery, ListRegionsQueryVariables>
export const ListRegionsTableDocument = gql`
  query ListRegionsTable {
    listRegions {
      edges {
        node {
          id
          name
          country {
            id
            name
          }
        }
      }
    }
  }
`

/**
 * __useListRegionsTableQuery__
 *
 * To run a query within a React component, call `useListRegionsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRegionsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRegionsTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useListRegionsTableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListRegionsTableQuery, ListRegionsTableQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListRegionsTableQuery, ListRegionsTableQueryVariables>(
    ListRegionsTableDocument,
    baseOptions,
  )
}
export function useListRegionsTableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListRegionsTableQuery, ListRegionsTableQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListRegionsTableQuery, ListRegionsTableQueryVariables>(
    ListRegionsTableDocument,
    baseOptions,
  )
}
export type ListRegionsTableQueryHookResult = ReturnType<typeof useListRegionsTableQuery>
export type ListRegionsTableLazyQueryHookResult = ReturnType<typeof useListRegionsTableLazyQuery>
export type ListRegionsTableQueryResult = ApolloReactCommon.QueryResult<
  ListRegionsTableQuery,
  ListRegionsTableQueryVariables
>
export const GetRegionDocument = gql`
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
      ...RegionFragment
    }
  }
  ${RegionFragmentFragmentDoc}
`

/**
 * __useGetRegionQuery__
 *
 * To run a query within a React component, call `useGetRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRegionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetRegionQuery, GetRegionQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetRegionQuery, GetRegionQueryVariables>(GetRegionDocument, baseOptions)
}
export function useGetRegionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRegionQuery, GetRegionQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetRegionQuery, GetRegionQueryVariables>(GetRegionDocument, baseOptions)
}
export type GetRegionQueryHookResult = ReturnType<typeof useGetRegionQuery>
export type GetRegionLazyQueryHookResult = ReturnType<typeof useGetRegionLazyQuery>
export type GetRegionQueryResult = ApolloReactCommon.QueryResult<GetRegionQuery, GetRegionQueryVariables>
export const UserSearchDocument = gql`
  query UserSearch($searchText: String) {
    listUsers(query: [{field: "username", operator: contains, value: $searchText}]) {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`

/**
 * __useUserSearchQuery__
 *
 * To run a query within a React component, call `useUserSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSearchQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *   },
 * });
 */
export function useUserSearchQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserSearchQuery, UserSearchQueryVariables>,
) {
  return ApolloReactHooks.useQuery<UserSearchQuery, UserSearchQueryVariables>(UserSearchDocument, baseOptions)
}
export function useUserSearchLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserSearchQuery, UserSearchQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<UserSearchQuery, UserSearchQueryVariables>(UserSearchDocument, baseOptions)
}
export type UserSearchQueryHookResult = ReturnType<typeof useUserSearchQuery>
export type UserSearchLazyQueryHookResult = ReturnType<typeof useUserSearchLazyQuery>
export type UserSearchQueryResult = ApolloReactCommon.QueryResult<UserSearchQuery, UserSearchQueryVariables>
export const ListVarietiesDocument = gql`
  query ListVarieties {
    listVarieties {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

/**
 * __useListVarietiesQuery__
 *
 * To run a query within a React component, call `useListVarietiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVarietiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVarietiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListVarietiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListVarietiesQuery, ListVarietiesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListVarietiesQuery, ListVarietiesQueryVariables>(ListVarietiesDocument, baseOptions)
}
export function useListVarietiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListVarietiesQuery, ListVarietiesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListVarietiesQuery, ListVarietiesQueryVariables>(
    ListVarietiesDocument,
    baseOptions,
  )
}
export type ListVarietiesQueryHookResult = ReturnType<typeof useListVarietiesQuery>
export type ListVarietiesLazyQueryHookResult = ReturnType<typeof useListVarietiesLazyQuery>
export type ListVarietiesQueryResult = ApolloReactCommon.QueryResult<ListVarietiesQuery, ListVarietiesQueryVariables>
export const ListVarietiesTableDocument = gql`
  query ListVarietiesTable {
    listVarieties {
      edges {
        node {
          id
          name
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useListVarietiesTableQuery__
 *
 * To run a query within a React component, call `useListVarietiesTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVarietiesTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVarietiesTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useListVarietiesTableQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListVarietiesTableQuery, ListVarietiesTableQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListVarietiesTableQuery, ListVarietiesTableQueryVariables>(
    ListVarietiesTableDocument,
    baseOptions,
  )
}
export function useListVarietiesTableLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListVarietiesTableQuery, ListVarietiesTableQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListVarietiesTableQuery, ListVarietiesTableQueryVariables>(
    ListVarietiesTableDocument,
    baseOptions,
  )
}
export type ListVarietiesTableQueryHookResult = ReturnType<typeof useListVarietiesTableQuery>
export type ListVarietiesTableLazyQueryHookResult = ReturnType<typeof useListVarietiesTableLazyQuery>
export type ListVarietiesTableQueryResult = ApolloReactCommon.QueryResult<
  ListVarietiesTableQuery,
  ListVarietiesTableQueryVariables
>
export const GetVarietyDocument = gql`
  query GetVariety($id: ID!) {
    getVariety(id: $id) {
      ...VarietyFragment
    }
  }
  ${VarietyFragmentFragmentDoc}
`

/**
 * __useGetVarietyQuery__
 *
 * To run a query within a React component, call `useGetVarietyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVarietyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVarietyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVarietyQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetVarietyQuery, GetVarietyQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetVarietyQuery, GetVarietyQueryVariables>(GetVarietyDocument, baseOptions)
}
export function useGetVarietyLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVarietyQuery, GetVarietyQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetVarietyQuery, GetVarietyQueryVariables>(GetVarietyDocument, baseOptions)
}
export type GetVarietyQueryHookResult = ReturnType<typeof useGetVarietyQuery>
export type GetVarietyLazyQueryHookResult = ReturnType<typeof useGetVarietyLazyQuery>
export type GetVarietyQueryResult = ApolloReactCommon.QueryResult<GetVarietyQuery, GetVarietyQueryVariables>
export const CreateVarietyDocument = gql`
  mutation CreateVariety($input: CreateVarietyInput!) {
    createVariety(input: $input) {
      ...VarietyFragment
    }
  }
  ${VarietyFragmentFragmentDoc}
`
export type CreateVarietyMutationFn = ApolloReactCommon.MutationFunction<
  CreateVarietyMutation,
  CreateVarietyMutationVariables
>

/**
 * __useCreateVarietyMutation__
 *
 * To run a mutation, you first call `useCreateVarietyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVarietyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVarietyMutation, { data, loading, error }] = useCreateVarietyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVarietyMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateVarietyMutation, CreateVarietyMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateVarietyMutation, CreateVarietyMutationVariables>(
    CreateVarietyDocument,
    baseOptions,
  )
}
export type CreateVarietyMutationHookResult = ReturnType<typeof useCreateVarietyMutation>
export type CreateVarietyMutationResult = ApolloReactCommon.MutationResult<CreateVarietyMutation>
export type CreateVarietyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateVarietyMutation,
  CreateVarietyMutationVariables
>
export const UpdateVarietyDocument = gql`
  mutation UpdateVariety($id: ID!, $input: UpdateVarietyInput!) {
    updateVariety(id: $id, input: $input) {
      ...VarietyFragment
    }
  }
  ${VarietyFragmentFragmentDoc}
`
export type UpdateVarietyMutationFn = ApolloReactCommon.MutationFunction<
  UpdateVarietyMutation,
  UpdateVarietyMutationVariables
>

/**
 * __useUpdateVarietyMutation__
 *
 * To run a mutation, you first call `useUpdateVarietyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVarietyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVarietyMutation, { data, loading, error }] = useUpdateVarietyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVarietyMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVarietyMutation, UpdateVarietyMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateVarietyMutation, UpdateVarietyMutationVariables>(
    UpdateVarietyDocument,
    baseOptions,
  )
}
export type UpdateVarietyMutationHookResult = ReturnType<typeof useUpdateVarietyMutation>
export type UpdateVarietyMutationResult = ApolloReactCommon.MutationResult<UpdateVarietyMutation>
export type UpdateVarietyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateVarietyMutation,
  UpdateVarietyMutationVariables
>
export const DeleteVarietyDocument = gql`
  mutation DeleteVariety($id: ID!) {
    deleteVariety(id: $id) {
      id
    }
  }
`
export type DeleteVarietyMutationFn = ApolloReactCommon.MutationFunction<
  DeleteVarietyMutation,
  DeleteVarietyMutationVariables
>

/**
 * __useDeleteVarietyMutation__
 *
 * To run a mutation, you first call `useDeleteVarietyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVarietyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVarietyMutation, { data, loading, error }] = useDeleteVarietyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVarietyMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteVarietyMutation, DeleteVarietyMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteVarietyMutation, DeleteVarietyMutationVariables>(
    DeleteVarietyDocument,
    baseOptions,
  )
}
export type DeleteVarietyMutationHookResult = ReturnType<typeof useDeleteVarietyMutation>
export type DeleteVarietyMutationResult = ApolloReactCommon.MutationResult<DeleteVarietyMutation>
export type DeleteVarietyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteVarietyMutation,
  DeleteVarietyMutationVariables
>
