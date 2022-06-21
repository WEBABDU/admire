import React from "react";

export const StatisticTable = ({el:{name,received_money, sum_order, time}}) => {
  const fTime = new Date(time).toLocaleTimeString()
  return (
    <div className="odd__bg">
      <div className="container">
        <div className="today__table table__today">
          <div className="today__tableInner">
            <span className="today__tableN"></span>
            <div>
              <div className="today__clients">{name}</div>
              <div className="today__time">{fTime}</div>
            </div>
          </div>
          <div className="today__calc">
            <div className="today__last">
              <span>{received_money} so'm</span>
            </div>
            <div className="today__first">
              <span>{sum_order} so'm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
