import { enqueueSnackbar } from "notistack";

const errotToast = (message: string) => {
  enqueueSnackbar(message, { variant: "error" });
};
export default errotToast;
