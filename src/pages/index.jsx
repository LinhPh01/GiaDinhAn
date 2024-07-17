import React from "react";
import { Page, Box } from "zmp-ui";
import Category from "./category";
import Headerr from "./headeruser";
import Swiperbanner from "./swiperbanner";
import Swipermedicin from "./swipermedicin";
import Banneruser from "./banneruser";

//Trang chủ

const HomePage = () => {
  return (
    <div className="bg-page-color">
      <Page className="relative flex-1 flex flex-col bg-page-color zalo-mini">
        <Headerr />
        <div className="flex-1 overflow-auto">
          <Banneruser />
          <Category />
          <Swiperbanner />
          <Suspense>
            <Swipermedicin />
          </Suspense>
        </div>
      </Page>
    </div>
  );
};

export default HomePage;
