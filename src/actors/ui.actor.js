import "../app/app.component.js";
import {Actor} from "../core/actor.js";

export class UiActor extends Actor {
  constructor() {
    super();
    this.app = document.createElement('app-root');
    document.body.appendChild(this.app);
  }

  // TODO: implement onMessage(ev)
}
