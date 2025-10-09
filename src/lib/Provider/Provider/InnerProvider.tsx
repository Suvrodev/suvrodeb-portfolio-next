import { getCurrentUserToken } from "@/components/actions/authActions/authService/getCurrentUser";
import { cookiesAndStateAction } from "@/components/actions/authActions/CookiesAndStateAction/CookiesAndStateAction";
import { useAppDispatch } from "@/redux/hooks";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Toaster } from "sonner";

interface IProps {
  children: React.ReactNode;
}

const InnerProvider = ({ children }: IProps) => {
  // console.log("in Inner Provieder");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCurrentUserToken();
      if (token) {
        await cookiesAndStateAction(token, dispatch);

        // ✅ condition check for Profile complete
        // redirectIfProfileIncomplete(currentUser, router);
      }
    };
    fetchToken();
  }, [dispatch]);

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
      <Toaster />
    </SnackbarProvider>
  );
};

export default InnerProvider;
