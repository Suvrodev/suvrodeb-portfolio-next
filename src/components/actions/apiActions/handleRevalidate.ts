import { startTransition } from "react";
import { revalidateAll } from "./revalidateProject";

export const handleRevalidate = async () => {
  startTransition(async () => {
    await revalidateAll();
  });
};
