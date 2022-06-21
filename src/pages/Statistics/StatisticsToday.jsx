import React, { useEffect, useState } from "react";

import { BreadCrumb } from "components";
import { StatisticTable } from "./StatisticTable/StatisticTable";
import { request } from "services/api/api";

export const StatisticsToday = () => {
  const [statistics, setStatistic] = useState(null);



  const fetchStatistic = async () => {
    const res = await request.get(`/statistic/latest-act`);
    setStatistic(res.data);
  };

  console.log(statistics);

  useEffect(() => {
    fetchStatistic()
  }, []);

  return (
    <>
      <BreadCrumb redirectUrl="statistics" text="Bugungi ko’rsatkichlar" />

      <main className="main-stat">
        <section>
          <div className="today-stat">
            <div className="container mb-15">
              <div className="flex jc-sb">
                <div className="flex jc-sb">
                  <img
                    src={require("assets/icons/give.svg").default}
                    alt="give"
                  />
                  <div className="today-stat__balance outgo">
                    {statistics?.total_receive} so’m
                  </div>
                </div>

                <div className="flex jc-sb">
                  <img
                    src={require("assets/icons/take.svg").default}
                    alt="take"
                  />
                  <div className="today-stat__balance income">
                    {statistics?.total_sum} so’m
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg__gray">
            <div className="container">
              <div className="today__table">
                <div>
                  <span className="tody__N">№</span>
                  <span className="today__dateTitle">Do'kon / vaqt</span>
                </div>
                <div className="today__calc">Oldi berdilar</div>
              </div>
            </div>
          </div>
        </section>
        <div className="scroll__body">
          {
            statistics?.data?.map((el) => <StatisticTable key={el.id} el={el}/>)
          }
         
        </div>
      </main>
    </>
  );
};
