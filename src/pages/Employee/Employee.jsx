import React from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "services/helpers/isEmpty";
import { queryBuilder } from "services/queryBuilder/queryBuilder";

import { EntityList } from "containers/EntityList";
import { EmployeeCard } from "components/Cards/EmployeeCard";

export const Employee = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row gy-5">
        <EntityList
          entity="markets/employee/list"
          url={queryBuilder(`market/${id}`, { include: ["market_employee"] })}>
          {({ items }) => (
            <>
              {!isEmpty(items) &&
                !isEmpty(items[0]?.market_employee) &&
                items[0].market_employee.map(
                  ({ first_name, last_name, phone, id }) => (
                    <EmployeeCard
                      key={id}
                      name={`${first_name} ${last_name}`}
                      phone={phone}
                      id={id}
                    />
                  )
                )}
            </>
          )}
        </EntityList>
      </div>
    </div>
  );
};
