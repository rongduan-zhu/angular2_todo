export interface IDictionary<TItem> {
  addOrUpdateItem(item: TItem) : void;

  enumerate() : TItem[];

  existsItem(item: TItem) : boolean;

  existsKey(key: string) : void;

  getItem(key: string) : TItem;

  getKeyForItem(item: TItem) : string;

  removeItem(key: string) : void;
}

export class KeyedCollection<TItem> implements IDictionary<TItem> {
  private data : { [key: string] : TItem } = {};

  constructor(public getKeyForItem: (item: TItem) => string) {}

  addOrUpdateItem(item: TItem) : void {
    this.data[this.getKeyForItem(item)] = item;
  }

  enumerate() : TItem[] {
    return Object.values(this.data);
  }

  existsItem(item: TItem) : boolean {
    return this.getKeyForItem(item) in this.data;
  }

  existsKey(key: string) : boolean {
    return key in this.data;
  }

  getItem(key: string) : TItem {
    return this.data[key];
  }

  removeItem(key: string) : void {
    delete this.data[key];
  }
}
