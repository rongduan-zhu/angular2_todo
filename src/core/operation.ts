export class Operation<T> {
  constructor(public data: T, public operation: Action, public status: Status) {}
}

export enum Action {
  Created,

  Updated,

  Deleted,
}

export enum Status {
  Succeeded,

  Failed
}
