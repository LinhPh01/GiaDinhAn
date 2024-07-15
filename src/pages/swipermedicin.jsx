import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Box, Text, Sheet } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import Ann from "../../assets-src/Ann.svg";
import Exchange from "./exchange";

// slide các sản phẩm tối đa 10 sản phẩm hiển thị
const Swipermedicin = () => {
  const [listInvest, setListInvest] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sheetVisible, setSheetVisible] = useState(false);

  useEffect(() => {
    const fetchListInvert = async () => {
      const response = await fetch(
        "https://naman.tmsoftware.vn/api/getListInvest?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleSf",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("data về :", data.data);

      if (data.data) {
        const slicedData = data.data.slice(0, 10); // ràng buộc 10 sản phẩm
        setListInvest(slicedData);
      } else {
        console.log("Không nhận được ID người dùng từ API.");
      }
    };

    fetchListInvert();
  }, []);

  const handleOpenSheet = (item) => {
    setSelectedItem(item);
    setSheetVisible(true);
  };

  const handleCloseSheet = () => {
    setSheetVisible(false);
    console.log("Sheet đã đóng");
  };

  return (
    <Box className="bg-page-color" pb={10}>
      <Exchange/>
      <div className="px-4 pb-4 ">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: null,
          }}
          slidesPerView={1.25}
          spaceBetween={16}
          className="px-4"
          direction="horizontal"
        >
          {listInvest.map((item, index) => (
            <SwiperSlide>
              <Box
                key={index}
                flex
                alignItems="center"
                justifyContent="center"
                onClick={() => {
                  handleOpenSheet(item);
                }}
                className="bg-white"
              >
                <div className="px-2">
                  <Box
                    className="aspect-square relative"
                    onClick={() => {
                      handleOpenSheet(item);
                    }}
                  >
                    <img
                      loading="lazy"
                      src={`https://naman.tmsoftware.vn/${item.avatar}`}
                      alt=""
                      className="w-60 h-60 object-cover object-center rounded-lg bg-skeleton"
                    />
                  </Box>
                  <Text size="xSmall">{item.name}</Text>
                  <div className="px-14 py-2">
                    <Box
                      style={{ backgroundColor: "#0cb2ac" }}
                      className="rounded-3xl space-x-1"
                      flex
                      alignItems="center"
                      justifyContent="center"
                      variant="secondary"
                      fullWidth
                      onClick={() => {
                        handleOpenSheet(item);
                      }}
                    >
                      <Text bold size="xxSmall" className="text-white h-8 py-2">
                        {item.point}
                      </Text>
                      <img className="h-8 py-2" src={Ann} alt="" />
                    </Box>
                  </div>
                </div>
              </Box>

              {/* Phần sheet */}
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedItem && (
          <Sheet
            visible={sheetVisible}
            onClose={handleCloseSheet}
            height={700}
            mask
            maskClosable
            handler
            swipeToClose
            style={{ overflowY: "auto" }}
          >
            <Box pb={4} className="zalo-mini">
              <Box
                p={8}
                className="custom-bottom-sheet"
                flex
                flexDirection="column"
                style={{ overflowY: "auto" }}
              >
                <Box className="bottom-sheet-cover ">
                  <img
                    alt=""
                    src={`https://naman.tmsoftware.vn/${selectedItem.avatar}`}
                    className="w-full h-full"
                  />
                </Box>
                <div className="zui-bg-sheet rounded-2xl p-4">
                  <div className="flex flex-cols-2 items-center justify-between">
                    <Box>
                      <Text size="xxSmall text-white">Quy đổi với</Text>
                    </Box>
                    <Box>
                      <Text size="xxSmall text-white">Số lượng còn lại</Text>
                    </Box>
                  </div>
                  <div className="flex flex-cols-2 items-center justify-between">
                    <Box>
                      <Text size="large text-white">
                        {selectedItem.point} Ann
                      </Text>
                    </Box>
                    <Box className="bottom-sheet-cover">
                      <Text.Title size="large text-white">
                        {selectedItem.quantity}
                      </Text.Title>
                    </Box>
                  </div>
                </div>
                <Box my={2}>
                  <Text.Title>Chi tiết quà tặng</Text.Title>
                </Box>
                <Box>
                  <Text>{selectedItem.content}</Text>
                </Box>
                <Box my={2}>
                  <Text.Title>Điều Kiện áp dụng</Text.Title>
                </Box>
                <Box>
                  <Text>
                    Đạt đủ số điểm cần đổi và số lượng còn lại không được dưới 0
                  </Text>
                </Box>
              </Box>
              <Box
                pb={4}
                flex
                flexDirection="column"
                justifyContent="between"
                style={{ backgroundColor: "#0cb2ac" }}
                className="rounded-t-xl"
              >
                <div className="flex flex-row items-center justify-between p-4 px-4">
                  <Box>
                    <Text.Title size="large text-white">
                      Để đổi quà tặng!
                    </Text.Title>
                    <Text size="xxSmall text-white">
                      Hãy đến cửa hàng gần nhất
                    </Text>
                  </Box>
                  <img src={Ann} alt="" />
                </div>
              </Box>
            </Box>
          </Sheet>
        )}
      </div>
    </Box>
  );
};

export default Swipermedicin;
