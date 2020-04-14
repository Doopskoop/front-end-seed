import {hookup} from "./core/actor.js";
import {UiActor} from "./actors/ui.actor.js";

hookup('ui', new UiActor());
