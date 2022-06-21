import { createRoutine } from "redux-saga-routines";

const LoadItem = createRoutine("LOAD_ITEM");
const LoadList = createRoutine("LOAD_LIST");

const Actions = {
  LoadItem,
  LoadList,
};

export default Actions;
