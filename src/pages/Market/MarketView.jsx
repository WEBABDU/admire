import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { EntityList } from "containers/EntityList";
import { BreadCrumb, Footer, MarketProductCard } from "components";
import { MarketInfo } from "./components/MarketInfo";
import giveTake from "assets/icons/giveTake.svg";

import { ReactComponent as AddIcon } from "assets/icons/addNew.svg";
import { ReactComponent as RightIcon } from "assets/icons/rightIcon.svg";
import { request } from "services/api/api";

export const MarketView = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchActs = async () => {
    const res = await request.get(`/market/${id}/acts?include=current_balance`);
    setData(res.data.data);
  };


  useEffect(() => {
    fetchActs();
  }, [id]);

  return (
    <>
      <EntityList entity="market/view" url={`market/${id}`} returnNull>
        {({ items }) => (
          <>
            <BreadCrumb
              redirectUrl="market"
              text={items[0].name}
              icons={[
                {
                  icon: <AddIcon />,
                  click: () => navigate(`/market/${id}/create/product`),
                },
              ]}
            />

            <main className="main">
              <div className={!active ? "market__info active" : "market__info"}>
                <MarketInfo
                  marketName={items[0].name}
                  marketPhone={items[0].market_info[0].phone}
                />
              </div>
              <div className="container">
                <section className="price flex jc-sb mb-25">
                  <h3 className="price__title">Qarzdorlik:</h3>
                  <div className="price__balance">652 000 so’m</div>
                </section>
              </div>

              <div className="container">
                <div className="flex jc-sb">
                  <div className="flex ai-c">
                    <img src={giveTake} alt="Give Take" />
                    <h3 className="debt__text">Oldi berdilar</h3>
                  </div>

                  <div className="flex ai-c" onClick={() => setActive(!active)}>
                    <div className="debt__count flex jc-c">{data?.length}</div>
                    <RightIcon
                      className={!active ? "dropIcon" : "dropIcon active"}
                    />
                  </div>
                </div>

                <div className={!active ? "dropdown" : "dropdown active"}>
                  <main className="give__cards">
                    <div className="container p-0">
                      {data?.map((d) => (
                        <MarketProductCard key={d.id} data={d} marketId={id}/>
                      ))}
                    </div>
                  </main>
                </div>
              </div>
            </main>
            {/* <div className={!active ? "dropdown" : "dropdown active"}>
              <main className="give__cards">
                <div className="container">
                  <MarketProductCard />
                </div>
              </main>
            </div> */}

            <Footer />
          </>
        )}
      </EntityList>
    </>
  );
};
