import React from "react";
import { Header, Box, Text } from "zmp-ui";
import headerlogo from "../../assets-src/header.svg";

const Headerr = () => {
  return (
    <div className="fixed z-10 top-0">
      <Header
      className="app-header no-border pl-4 flex-none pb-4"
      showBackIcon={false}
      title={
        <Box flex alignItems="center" className="space-x-2">
          <Box flex alignItems="center" className="space-x-2">
            <img
              className="w-8 h-8 rounded-lg border-inset"
              src={headerlogo}
              alt=""
            />
            <Box>
              <Text.Title size="small">Ann xin chào </Text.Title>
            </Box>
          </Box>
        </Box>
      }
    />
    </div>
  );
};
export default Headerr;
