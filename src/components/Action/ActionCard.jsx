import React from "react";

export const ActionCard = (props) => {
  const { sum_order, received_money, date, total, payment_type, type, user } =
    props.data;
  return (
    <div className="debt__item">
      <div className="flex jc-sb mb-20">
        <div className="calendar flex ai-c">
          <img src="images/clock.svg" alt="calendar" />
          09.06.2021
        </div>

        <span className="time">9:49:56</span>
      </div>

      <div className="flex jc-sb mb-25">
        <div className="flex ai-c">
          <img src="images/give.svg" alt="outgo" />
          <h4 className="debt__label">berdi:</h4>
        </div>

        <div className="debt__value income">780 000 so’m</div>
      </div>

      <div className="flex jc-sb-ai-fs mb-25">
        <div className="flex ai-c">
          <img src="images/take.svg" alt="income" />
          <h4 className="debt__label">oldi:</h4>
        </div>

        <div className="debt__value outgo">780 000 so’m</div>
      </div>

      <div className="flex jc-sb-ai-fs mb-25">
        <h4 className="debt__label">Maxsulot turi:</h4>
        <div className="debt__value">Chuchvara</div>
      </div>

      <div className="flex jc-sb-ai-fs mb-25">
        <h4 className="debt__label">Diller ismi:</h4>
        <div className="debt__value">Falonchi</div>
      </div>

      <div className="flex jc-sb-ai-fs mb-25">
        <h4 className="debt__label">Izoh:</h4>
        <div className="debt__descr">
          Bu yerga shu oldi berdiga ta’luqli muhim izohlar yoziladi maximum 3
          qator
        </div>
      </div>

      <div className="debt__balance flex jc-c">0 so’m</div>
    </div>
  );
};
