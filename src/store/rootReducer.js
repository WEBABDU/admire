import { combineReducers } from "redux";
import { Api } from "containers/reducer";
import { overlay } from "./overlay/overlay";
import { user } from "./user/user";
import { render } from "./render/render";
import { searchParams } from "./searchParams/searchParams";

export default combineReducers({
  Api,
  user,
  overlay,
  render,
  searchParams,
});
