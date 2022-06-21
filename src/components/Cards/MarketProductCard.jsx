import React from "react";
import { Link } from "react-router-dom";


export const MarketProductCard = (props) => {
  const {
    sum_order,
    received_money,
    date,
    total,
    payment_type,
    type,
    user,
    id,
  } = props.data;
  return (
    <div className="debt__check">
      <div className="debt__date">
        <div className="debt__data">
          <img src={require("assets/icons/time.svg").default} alt="time" />
          <span>{date}</span>
        </div>
        <div className="debt__text">
          <Link to={`/market/${props.marketId}/update/product/${id}`} replace={true}>
          <img src={require("assets/icons/edition.svg").default} alt="edit" />
          </Link>
        </div>
      </div>
      <div className="debt__infoSum">
        <div className="debt__el">
          <img src={require("assets/icons/up.svg").default} alt="up" />
          <span>berdi:</span>
        </div>
        <div className="debt__give">{received_money} so’m</div>
      </div>
      <div className="debt__infoSum">
        <div className="debt__el">
          <img src={require("assets/icons/down.svg").default} alt="down" />
          <span>oldi:</span>
        </div>
        <div className="debt__give blue">{sum_order} so’m</div>
      </div>
      <div className="debt__product">
        <span>Maxsulot turi:</span>
        <h5>{type}</h5>
      </div>
      <div className="debt__product">
        <span>Diller ismi:</span>
        <h5>{user}</h5>
      </div>
      <div className="debt__product">
        <span>To'lov:</span>
        <h5>{payment_type}</h5>
      </div>
      <div className="sum__debt">
        <span>{total} so’m</span>
      </div>
    </div>
  );
};
