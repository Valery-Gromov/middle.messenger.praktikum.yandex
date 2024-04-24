import set from "../utils/set";
import EventBus from "./EventBus";

type Indexed<T = any> = {
  [key in string]: T;
};

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export const store = new Store();
