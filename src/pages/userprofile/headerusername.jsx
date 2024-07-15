import React from "react";
import { Header, Box, Text, useNavigate, Icon } from "zmp-ui";

const HeaderUser = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed z-10 top-0">
    <Header
      className="app-header no-border pl-4 flex-none pb-4"
      showBackIcon={false}
      title={
        <Box flex>
          <Icon
            icon="zi-chevron-left"
            onClick={() => {
              navigate("/");
            }}
          />
          <Text.Title size="small">Cá Nhân</Text.Title>
        </Box>
      }
    />
    </div>
  );
};

export default HeaderUser;
