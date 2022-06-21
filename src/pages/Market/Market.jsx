import React from "react";
import { useSelector } from "react-redux";

import { isEmpty } from "services/helpers/isEmpty";
import { queryBuilder } from "services/queryBuilder/queryBuilder";

import { EntityList } from "containers/EntityList";
import { MarketCard } from "components";

export const Market = () => {
  const { searchProp, serachValue } = useSelector(
    (state) => state.searchParams
  );

  return (
    <div className="container">
      <div className="row gy-5">
        <EntityList
          entity="markets/list"
          url={queryBuilder("market", {
            filter: { [searchProp]: serachValue },
          })}
        >
          {({ items }) => (
            <>
              {!isEmpty(items) &&
                items.map((market) => (
                  <MarketCard
                    key={market.id}
                    name={market.name}
                    market_balance={market.market_balance}
                    id={market.id}
                  />
                ))}
            </>
          )}
        </EntityList>
      </div>
    </div>
  );
};
