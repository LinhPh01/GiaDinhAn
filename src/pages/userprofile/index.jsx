import React from "react";
import { Page, Box } from "zmp-ui";
import HeaderUser from "./headerusername";
import Profile from "./profile";
// import FormPage from "./form";
// import UserPage from "./user";
// import Filehealth from "./filehealth";

// trang cá nhân thông tin người dùng

const PageUser1 = () => {
  return (
    <div className="bg-page-color">
      <Page className="relative flex-1 flex flex-col bg-page-color zalo-mini">
      <HeaderUser />
      <Box className="flex-1 overflow-auto">
        <Profile />
        {/* <FormPage />
        <UserPage />
        <Filehealth /> */}
      </Box>
    </Page>
    </div>
  );
};

export default PageUser1;
