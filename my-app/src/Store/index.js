import rootreducer from "../Reducer";
import { legacy_createStore as createStore } from "redux";
const mainStore=createStore(rootreducer);
export default mainStore;