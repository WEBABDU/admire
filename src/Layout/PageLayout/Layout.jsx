import React from "react";
import { Outlet } from "react-router-dom";

import { Overlay } from "../Overlay";
import { Header, Footer } from "components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Overlay />
    </>
  );
};
