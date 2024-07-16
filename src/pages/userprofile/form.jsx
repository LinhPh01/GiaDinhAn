import React from "react";
import { Text, Box, useNavigate, useSnackbar, Checkbox, Page } from "zmp-ui";
// import { useRecoilState } from "recoil";
// import {
//   displayNameState,
//   idState,
//   emailState,
//   ageState,
//   genderState,
//   locationState,
//   allergyState,
//   underlyingdiseaseState,
//   phoneNumberState,
// } from "../../state";
import HeaderEdit from "./headeredit";
import headerlogo from "../../../assets-src/header.svg";
// import { getAccessToken, getPhoneNumber } from "zmp-sdk/apis";

const FormPage = () => {
  const navigate = useNavigate();
  // const [phone, setPhoneNumber] = useRecoilState(phoneNumberState);
  // const [id, setId] = useRecoilState(idState);
  // const [name, setName] = useRecoilState(displayNameState);
  // const [age, setAge] = useRecoilState(ageState);
  // const [gender, setGender] = useRecoilState(genderState);
  // const [email, setEmail] = useRecoilState(emailState);
  // const [address, setAddress] = useRecoilState(locationState);
  // const [allergy, setAllergy] = useRecoilState(allergyState);
  // const [underlyingdisease, setUnderlyingdisease] = useRecoilState(
  //   underlyingdiseaseState
  // );

  // const { openSnackbar } = useSnackbar(); // sử dụng thanh thông báo snackbar

  // const secretKey = "K2UHm5uysg8RfBiDA846"; // mã key getphone

  // const processPhoneNumber = (phoneNumber) => {
  //   // chuyển số điện thoại +84 thành 0
  //   if (phoneNumber.startsWith("84")) {
  //     return "0" + phoneNumber.substring(2);
  //   }
  //   return phoneNumber;
  // };
  // // useEffect lấy số điện thoại khi vừa mở app
  // useEffect(() => {
  //   getAccessToken({
  //     success: (userAccessToken) => {
  //       console.log("Access token:", userAccessToken);
  //       getPhoneNumber({
  //         success: async (data) => {
  //           let { token } = data;
  //           console.log("Token:", token);
  //           try {
  //             const response = await fetch(
  //               "https://graph.zalo.me/v2.0/me/info",
  //               {
  //                 headers: {
  //                   access_token: userAccessToken,
  //                   code: token,
  //                   secret_key: secretKey,
  //                 },
  //               }
  //             );

  //             if (!response.ok) {
  //               throw new Error(`lỗi response: ${response.status}`);
  //             }

  //             const data = await response.json();
  //             console.log("data trả về :", data);

  //             if (data.data && data.data.number) {
  //               const formattedPhoneNumber = processPhoneNumber(
  //                 data.data.number
  //               );
  //               setPhoneNumber(formattedPhoneNumber);
  //               console.log("Cập nhật sdt:", formattedPhoneNumber);
  //             } else {
  //               console.log("Không nhận được số điện thoại từ API.");
  //             }
  //           } catch (error) {
  //             console.error("Lỗi khi gọi API: ", error);
  //           }
  //         },
  //         fail: (error) => {
  //           console.log(error);
  //         },
  //       });
  //     },
  //     fail: (error) => {
  //       console.log(error);
  //     },
  //   });
  //   // lưu dữ liệu lại trong localStorage để hiển thị cho đến khi có thay đổi khác
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     const userData = JSON.parse(storedUserData);
  //     setPhoneNumber(userData.phone);
  //     setName(userData.name);
  //     setGender(userData.gender);
  //     setAge(userData.age);
  //     setEmail(userData.email);
  //     setAddress(userData.address);
  //     setAllergy(userData.allergy);
  //     setUnderlyingdisease(userData.underlying_disease);
  //   }
  // }, [
  //   setPhoneNumber,
  //   setName,
  //   setGender,
  //   setAge,
  //   setEmail,
  //   setAddress,
  //   setAllergy,
  //   setUnderlyingdisease,
  // ]);
  // // api update thay đổi thông tin người dùng nếu không nhập gì trả về null
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log({
  //     phone,
  //     name,
  //     age,
  //     gender,
  //     email,
  //     allergy,
  //     underlying_disease: underlyingdisease,
  //     address,
  //   });

  //   const response = await fetch(
  //     "https://naman.tmsoftware.vn/api/storeCustomer",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         api_key: "8AF1apnMW2A39Ip7LUFtNstE5RjYleSf",
  //         phone: "0367259158",
  //         name: "nam",
  //         age: age || null,
  //         gender: gender || null,
  //         email: email || null,
  //         allergy: allergy || null,
  //         underlying_disease: underlyingdisease || null,
  //         address: address || null,
  //       }),
  //     }
  //   );
  //   if (!response.ok) {
  //     console.error(`lỗi response: ${response.status}`);
  //     return;
  //   }

  //   const data = await response.json();
  //   console.log("data về:", data.data);

  //   if (data.data && data.data.id) {
  //     setPhoneNumber(data.data.phone);
  //     setName(data.data.name);
  //     setGender(data.data.gender);
  //     setAge(data.data.age);
  //     setEmail(data.data.email);
  //     setAddress(data.data.address);
  //     setAllergy(data.data.allergy);
  //     setUnderlyingdisease(data.data.underlying_disease);

  //     localStorage.setItem(
  //       "userData",
  //       JSON.stringify({
  //         phone: data.data.phone,
  //         name: data.data.name,
  //         gender: data.data.gender,
  //         age: data.data.age,
  //         email: data.data.email,
  //         address: data.data.address,
  //         allergy: data.data.allergy,
  //         underlying_disease: data.data.underlying_disease,
  //       })
  //     );

  //     openSnackbar({
  //       text: "Thông tin đã được lưu thành công!",
  //       type: "success",
  //       duration: 3000,
  //     });
  //   } else {
  //     console.log("Không nhận được ID người dùng từ API.");
  //   }
  // };

  // const handleBack = () => {
  //   navigate(-1);
  // };

  return (
    <div className="bg-page-color">
      <Box className="bg-page-color zalo-mini" pb={10}>
      <HeaderEdit />
      <div className="py-4 toptop1">
      <Box
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="bg-page-color"
      >
        <Box
          flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text.Title style={{ color: "#0ebeb8" }}>{name}</Text.Title>
          </Box>
          <Box ml={2}>
            <img
              className="w-10 h-10 rounded-lg border-inset"
              src={headerlogo}
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box mt={4} pb={4}>
        <div className="px-8">
          <div className="flex flex-col space-y-4">
            <textarea
              className="rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tên người dùng"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
              }}
            />
            <Box flex flexDirection="row" className="space-x-2">
              <Checkbox
                checked={gender === "male"}
                onChange={() => setGender("male")}
                className="px-2"
              >
                Nam
              </Checkbox>
              <Checkbox
                checked={gender === "female"}
                onChange={() => setGender("female")}
              >
                Nữ
              </Checkbox>
            </Box>
            <textarea
              className="rounded-lg"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Tuổi"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />

            <textarea
              className="rounded-lg"
              value={phone}
              // readOnly
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Số điện thoại"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
            <textarea
              className="rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
            <textarea
              className="rounded-lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Địa chỉ"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
            <textarea
              className="rounded-lg"
              value={allergy}
              onChange={(e) => setAllergy(e.target.value)}
              placeholder="Dị ứng"
              style={{
                height: "80px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
                overflow: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            />
            <textarea
              flex
              alignItems="start"
              value={underlyingdisease}
              className="rounded-lg"
              onChange={(e) => setUnderlyingdisease(e.target.value)}
              placeholder="Bệnh nền"
              style={{
                height: "80px",
                width: "100%",
                fontSize: "16px",
                resize: "none",
                padding: "12px",
                boxSizing: "border-box",
                overflow: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            />
            <div className="flex items-center justify-center space-x-4">
              <Box
                style={{ backgroundColor: "#0cb2ac" }}
                className="rounded-3xl px-4"
                flex
                alignItems="center"
                justifyContent="center"
              >
                <Text className="px-4 py-4 text-white" onClick={handleSubmit}>
                  Lưu thông tin
                </Text>
              </Box>
              <Box
                style={{ backgroundColor: "#0cb2ac" }}
                className="rounded-3xl space-x-1"
                flex
                alignItems="center"
                justifyContent="center"
                variant="secondary"
              >
                <Text className="px-4 py-4 text-white" onClick={handleBack}>
                  Trở về
                </Text>
              </Box>
            </div>
          </div>
        </div>
      </Box>
      </div>
    </Box>
    </div>
  );
};

export default FormPage;
