// utils/updateUser.ts
import { verifyToken } from "@/components/utils/Functions/verifyToken";
import { useAppDispatch } from "@/redux/hooks";
import { setUserData } from "@/redux/features/AuthManagement/authSlice";
import { setCurentUser } from "../authService/setCurentUser";

export const cookiesAndStateAction = async (
  accessToken: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    console.log("Access Token in action: ", accessToken);
    await setCurentUser(accessToken);
    const currentUser = verifyToken(accessToken);
    dispatch(setUserData({ user: currentUser, token: accessToken }));
    // console.log("User updated after coaching update:", currentUser);
  } catch (err) {
    console.error("Failed to update user:", err);
  }
};
