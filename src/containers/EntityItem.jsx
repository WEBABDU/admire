import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "./actions.js";

export const EntityItem = ({ entity, url, appendData, method, children }) => {
  const items = useSelector((state) => state.Api[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.LoadList.trigger({ entity, url, appendData, method }));
  }, [entity, url, appendData]);

  return children({ items });
};
