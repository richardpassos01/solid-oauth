export interface GenericFetchable<ID, Entity> {
  fetch(id: ID): Promise<Entity>;
}
export interface GenericCreatable<Entity> {
  create(entity: Entity): Promise<void>;
}

export interface GenericUpdatable<Entity> {
  update(entity: Entity): Promise<Entity>;
}

export interface GenericFetchableByIdentifiers<Email, Username, Document, Entity> {
  fetchByIdentifiers(email: Email, username: Username, document: Document): Promise<Entity>
}

export interface GenericFetchableByIds<FirstID, SecondID, Entity> {
  fetchByIds(firsId: FirstID, secondId: SecondID): Promise<Entity>
}

export interface GenericUseCase<Param, Result> {
  execute(param: Param): Promise<Result>;
}
