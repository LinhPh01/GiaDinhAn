import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";

// export const userState = selector({
//   key: "user",
//   get: () =>
//     getUserInfo({
      
//     }),
// });

// import { getUserInfo } from "zmp-sdk/apis";

// getUserInfo({
//   success: (data) => {
//     // xử lý khi gọi api thành công
//     const { userInfo } = data;
//   },
//   fail: (error) => {
//     // xử lý khi gọi api thất bại
//     console.log(error);
//   }
// });



// import { getStorageInfo } from "zmp-sdk/apis";

// getStorageInfo({
//   success: (data) => {
//     // xử lý khi gọi api thành công
//     const { currentSize, limitSize } = data;
//   },
//   fail: (error) => {
//     // xử lý khi gọi api thất bại
//     console.log(error);
//   }
// });
// export const phoneState = selector<string | boolean>({
//   key: "phone",
//   get: async ({ get }) => {
//     const requested = get(requestPhoneTriesState);
//     if (requested) {
//       const { number, token } = await getPhoneNumber({ fail: console.warn });
//       if (number) {
//         return number;
//       }
//       console.warn(
//         "Sử dụng token này để truy xuất số điện thoại của người dùng",
//         token
//       );
//       console.warn(
//         "Chi tiết tham khảo: ",
//         "https://mini.zalo.me/blog/thong-bao-thay-doi-luong-truy-xuat-thong-tin-nguoi-dung-tren-zalo-mini-app"
//       );
//       console.warn("Giả lập số điện thoại mặc định: 0337076898");
//       return "0337076898";
//     }
//     return false;
//   },
// });

export const idState = atom({
  key: "id",
  default: "",
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});

export const ageState = atom({
  key: "age",
  default: "",
});

export const emailState = atom({
  key: "email",
  default: "",
});

export const locationState = atom({
  key: "location",
  default: "",
});

export const genderState = atom({
  key: "gender",
  default: "",
});

export const allergyState = atom({
  key: "allergy",
  default: "",
});

export const underlyingdiseaseState = atom({
  key: "underlyingdisease",
  default: "",
});

export const totalPointState = atom({
  key: "totalPointState",
  default: 0,
});

export const ranksState = atom({
  key: "ranksState",
  default: [],
});

export const phoneNumberState = atom({
  key: "phone",
  default: "",
});

export const getListInvertState = atom({
  key: "getListInvertState",
  default: "",
});
// import { getAccessToken } from "zmp-sdk/apis";

// getAccessToken({
//   success: (accessToken) => {
//     // xử lý khi gọi api thành công
//     console.log("tokenn access là: ", accessToken);
//   },
//   fail: (error) => {
//     // xử lý khi gọi api thất bại
//     console.log(error);
//   },
// });

// import { getPhoneNumber } from "zmp-sdk/apis";

// getPhoneNumber({
//   success: async (data) => {
//     let { token, number } = data;
//     console.log("token là :", token);
//     console.log("sdt trả về : ", number);
//     // console.log("sdt là :", number);
//   },
//   fail: (error) => {
//     // Xử lý khi gọi api thất bại
//     console.log(error);
//   },
// });
