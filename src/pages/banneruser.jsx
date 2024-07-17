import React, { useState, useEffect } from "react";
import {  useRecoilState } from "recoil";
import {
  displayNameState,
  phoneNumberState,
  
} from "../state";
import { getAccessToken, getPhoneNumber } from "zmp-sdk/apis";
import { Box, Text } from "zmp-ui";
import Barcode from "react-barcode";

const Banneruser = () => {
  const [phone, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [name, setName] = useRecoilState(displayNameState);
  const [pointtotal, setPointTotal] = useState();
 
  const secretKey = "K2UHm5uysg8RfBiDA846";
  
  // thay đổi +84 thành 0
  const processPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("84")) {
      return "0" + phoneNumber.substring(2);
    }
    return phoneNumber;
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
          name: "nam",
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
      setName(data.data.name);
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
  
  

  return (
    <Box
      className="bg-page-color"
      pb={4}
      mt={8}
      flexDirection="column"
      justifyContent="space-between"
    >
      <div className="toptop">
        <div className="px-4 pt-1">
          <Box
            flex
            flexDirection="column"
            className="relative zui-box-custom-bg rounded-lg  px-4 !overflow-hidden"
          >
            <div className="flex flex-cols-2 justify-between items-center pt-4 px-4 ">
              <Box className="barcode-container ">
                <Text.Title size="large text-white">{name}</Text.Title>

                <Text size="xSmall text-white">Bậc :</Text>
              </Box>

              <div className="zui-custom-bg-text absolute right-0 rounded-l-full px-4 py-2 text-white bg-slate-400">
                <Box>
                  <Text.Title size="small">{pointtotal}</Text.Title>
                </Box>
              </div>
            </div>
            <div className="px-10 py-4">
              <Box className="barcode-container slideIn  bg-slate-100 rounded-xl">
                <Box className="px-5 py-5">
                  <Barcode
                    className="w-full h-full rounded-xl"
                    value={"0931305101_30"}
                    text={"30"}
                  />
                </Box>
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Banneruser;
