import { enqueueSnackbar } from "notistack";
import { toast } from "sonner";

const erToast = (message: string) => {
  enqueueSnackbar(message, { variant: "error" });
  toast.dismiss();
};
export default erToast;
