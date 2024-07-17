import React from "react";
import { Header, Box, Text,Icon} from "zmp-ui";
import { useNavigate } from "react-router";
const Headergift = () => {
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
              navigate("./");
            }}
          />
          <Text.Title size="small">Đổi quà</Text.Title>
        </Box>
      }
    />
    </div>
  );
};

export default Headergift;
