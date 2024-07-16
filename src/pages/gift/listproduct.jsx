import React, { useState, useEffect } from "react";
import { Box, Text, Sheet } from "zmp-ui";
import Ann from "../../../assets-src/Ann.svg";
import { useRecoilState } from "recoil";
import { phoneNumberState } from "../../state";
import { getAccessToken, getPhoneNumber } from "zmp-sdk/apis";

// list sản phẩm trong phần ưu đãi
const Listproduct = () => {
  const [phone, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [listInvest, setListInvest] = useState([]);
  const [pointtotal, setPointTotal] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  //getphone zmp
  const secretKey = "K2UHm5uysg8RfBiDA846";

  //api getphone
  const processPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("84")) {
      return "0" + phoneNumber.substring(2); // Thêm "0" và loại bỏ "84" ở đầu
    }
    return phoneNumber; // Trả về nguyên gốc nếu không thay đổi
  };

  const fetchPhoneNumber = async (userAccessToken) => {
    getPhoneNumber({
      success: async (data) => {
        let { token } = data;
        console.log("Token:", token);

        try {
          const response = await fetch("https://graph.zalo.me/v2.0/me/info", {
            headers: {
              access_token: userAccessToken,
              code: token,
              secret_key: secretKey,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log("data trả về :", data);

          if (data.data && data.data.number) {
            const formattedPhoneNumber = processPhoneNumber(data.data.number);
            setPhoneNumber(formattedPhoneNumber);
            console.log("change phone ", phone);
          } else {
            console.log("Không nhận được số điện thoại từ API.");
          }
        } catch (error) {
          console.error("Lỗi khi gọi API: ", error);
        }
      },
      fail: (error) => {
        console.log(error);
      },
    });
  };

  //api điểm thưởng
  const fetchUserID = async () => {
    // const getnumber = phone;
    const response = await fetch(
      "https://naman.tmsoftware.vn/api/storeCustomer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "8AF1apnMW2A39Ip7LUFtNstE5RjYleSf",
          phone: "0931305101",
        }),
      }
    );
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return;
    }

    const data = await response.json();
    console.log("data về :", data.data);

    if (data.data && data.data.id) {
      setPointTotal(data.data.total_point);
      setPhoneNumber(data.data.phone);
    } else {
      console.log("Không nhận được ID người dùng từ API.");
    }
  };
  // 1 phút gọi api 1 lần ,10000 = 10s
  useEffect(() => {
    const fetchData = async () => {
      getAccessToken({
        success: async (userAccessToken) => {
          console.log("Access token:", userAccessToken);
          await fetchPhoneNumber(userAccessToken);
          await fetchUserID();
          console.log("update point", pointtotal);
        },
        fail: (error) => {
          console.log(error);
        },
      });
    };

    fetchData();

    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [phone, pointtotal]);

  //api danh sách Listinvest

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
        setListInvest(data.data);
      } else {
        console.log("Không nhận được ID người dùng từ API.");
      }
    };

    fetchListInvert();
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Gọi hàm fetchListInvert để gọi API
  //     const fetchListInvert = async () => {
  //       const response = await fetch(
  //         "https://naman.tmsoftware.vn/api/getListInvest?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleSf",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         console.error(`HTTP error! status: ${response.status}`);
  //         return;
  //       }

  //       const data = await response.json();
  //       console.log("data về :", data.data);

  //       if (data.data) {
  //         setListInvest(data.data);
  //       } else {
  //         console.log("Không nhận được ID người dùng từ API.");
  //       }
  //     };

  //     fetchListInvert();
  //   }, 100000); // 1 phút gọi api 1 lần ,10000 = 10s

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleOpenSheet = (item) => {
    setSelectedItem(item);
    setSheetVisible(true);
  };

  const handleCloseSheet = () => {
    setSheetVisible(false);
    console.log("Sheet đã đóng");
  };

  return (
    //phần chứa điểm
    <Box className="bg-page-color" pb={4}>
      <div className="px-4 toptop1">
        <div className="rounded-2xl shadow-md bg-white py-4">
          <Box flex alignItems="center" className="">
            <img className="h-14 py- px-3" src={Ann} alt="" />
            <Box>
              <Text.Title size="small">Số Ann hiện tại của bạn là</Text.Title>
              <Box
                flex
                flexDirection="row"
                alignContent="flex-end"
                className=" space-x-1"
              >
                <Text.Title className="text-custom-teal">
                  {pointtotal}
                </Text.Title>
                <Text bold size="large" className=" text-custom-teal">
                  Ann
                </Text>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
      {/* Lấy ra Listinvert */}
      <Box>
        <div className="listinvest-container slideIn grid grid-cols-2 gap-4 px-4 py-2 pb-10 pt-6">
          {listInvest.map((item, index) => (
            <Box
              key={index}
              mb={2}
              className="bg-white rounded-lg shadow-md"
              pb={4}
            >
              <div className=" px-2 pt-2 space-y-2">
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
                    className="w-full h-full object-cover object-center rounded-lg bg-skeleton"
                  />
                </Box>
                <Text size="xSmall">{item.name}</Text>
                <div className="px-8">
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
                    <Text
                      bold
                      size="xxSmall"
                      className="text-white pb-2 h-8 py-2"
                    >
                      {item.point}
                    </Text>
                    <img className="h-8 py-2" src={Ann} alt="" />
                  </Box>
                </div>
                {/* Phần sheet */}

                {selectedItem && (
                  <Sheet
                    visible={sheetVisible}
                    onClose={handleCloseSheet}
                    height={700}
                    mask
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
                        <Box className="bottom-sheet-cover">
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
                              <Text size="xxSmall text-white">
                                Số lượng còn lại
                              </Text>
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
                            Đạt đủ số điểm cần đổi và số lượng còn lại không
                            được dưới 0
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
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Listproduct;
