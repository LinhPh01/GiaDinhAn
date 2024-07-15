import React from "react";
import { Page, Box } from "zmp-ui";
import Headergift from "./headergift";

import Listproduct from "./listproduct";
// trang đổi quà từ điểm Ann
const PageGift = () => {
  return (
    <div className="bg-page-color">
      <Page className="relative flex-1 flex flex-col bg-page-color zalo-mini">
      <Headergift />
      <Box className="flex-1 overflow-auto">
        <Listproduct />
      </Box>
    </Page>
    </div>
  );
};

export default PageGift;
