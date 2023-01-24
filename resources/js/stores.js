//Static
import { DefaultStore } from "./stores/defaults";

//import global components here
export default function () {
    window.store = {
        default: DefaultStore(),
    }
}