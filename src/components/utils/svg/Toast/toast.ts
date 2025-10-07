import { toast } from "sonner";
import { sonarId } from "../../Variable/sonarId";

export const loadingToast = (message: string) => {
  return toast.loading(message, { id: sonarId });
};

export const okToast = (message: string) => {
  return toast.success(message, { id: sonarId });
};
