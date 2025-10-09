import { enqueueSnackbar } from "notistack";
import { toast } from "sonner";

const errotToast = (message: string) => {
  enqueueSnackbar(message, { variant: "error" });
  toast.dismiss();
};
export default errotToast;
