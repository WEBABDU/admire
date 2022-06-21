import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "Layout/PageLayout/Layout";

import {
  Market,
  Login,
  ModifyMarket,
  Employee,
  ModifyEmployee,
  Statistics,
  StatisticsToday,
  MarketView,
  Profile,
  MarketProduct,
} from "pages";

export const AppRoutes = () => {
  const routes = [
    {
      path: "market",
      element: <Market />,
      isLayout: true,
    },
    {
      path: "market/:id",
      element: <MarketView />,
    },
    {
      path: "market/create",
      element: <ModifyMarket />,
    },
    {
      path: "market/update/:id",
      element: <ModifyMarket />,
    },
    {
      path: "market/:id/employee",
      element: <Employee />,
      isLayout: true,
    },
    {
      path: "market/:id/employee/create",
      element: <ModifyEmployee />,
    },
    
    {
      path: "market/:id/create/product",
      element: <MarketProduct />,
    },
    {
      path: "market/:id/update/product/:productId",
      element: <MarketProduct />,
    },

    {
      path: "statistics",
      element: <Statistics />,
    },
    {
      path: "statistics/today",
      element: <StatisticsToday />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "profile",
      element: <Profile />,
    },

  ];



  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.isLayout)
          return (
            <Route key={index} path={`/${route.path}`} element={<Layout />}>
              <Route index element={route.element}></Route>
            </Route>
          );
        else
          return (
            <Route
              key={index}
              path={`/${route.path}`}
              element={route.element}></Route>
          );
      })}

      <Route path="*" element={<Navigate to="/login" />}></Route>
    </Routes>
  );
};
