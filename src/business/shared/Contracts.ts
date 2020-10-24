export interface GenericFetchable<ID, Entity> {
  fetch(id: ID): Promise<Entity>;
}

export interface GenericFetchableByEmail<Email, Entity> {
  fetchByEmail(email: Email): Promise<Entity>;
}

export interface GenericCreatable<Entity> {
  create(entity: Entity): Promise<void>;
}

export interface GenericUpdatable<Entity> {
  update(entity: Entity): Promise<Entity>;
}

export interface GenericUseCase<Param, Result> {
  execute(param: Param): Promise<Result>;
}
