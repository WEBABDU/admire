import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "./actions.js";

export const EntityList = ({
  entity,
  url,
  appendData = false,
  method = "get",
  children,
  returnNull = false,
  fallBack,
}) => {
  const stateEntity = useSelector((state) => state.Api[entity]);
  const isRender = useSelector((state) => state.render.isRender);

  const dispatch = useDispatch();

  const items = stateEntity
    ? stateEntity.hasOwnProperty("items")
      ? stateEntity.items
      : []
    : [];

  useEffect(() => {
    dispatch(Actions.LoadList.trigger({ entity, url, appendData, method }));
  }, [url, entity, appendData, method, isRender]);

  if (returnNull) {
    if (items.length > 0 || Object.keys(items).length > 0)
      return children({ items });
    else return fallBack ? fallBack : null;
  } else return children({ items });
};
