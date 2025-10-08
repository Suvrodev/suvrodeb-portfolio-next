// src/components/utils/data/navLinksData.ts
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  Psychology as PsychologyIcon,
  Email as EmailIcon,
  MonetizationOn as MonetizationOnIcon,
} from "@mui/icons-material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Boxes } from "lucide-react";

export const publicDashboardContents = [
  {
    id: "home",
    label: "Home",
    href: "#banner",
    icon: HomeIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "about",
    label: "About me",
    href: "#about",
    icon: InfoIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "service",
    label: "Service",
    href: "#service",
    icon: ManageAccountsIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "skill",
    label: "Skill",
    href: "#skill",
    icon: PsychologyIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "project",
    label: "Project",
    href: "#project",
    icon: Boxes,
    iconSize: 20,
    mobileIconSize: 18,
  },
  {
    id: "price",
    label: "Price",
    href: "#price",
    icon: MonetizationOnIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "blog",
    label: "Blog",
    href: "#blog",
    icon: AutoStoriesIcon,
    iconSize: 20,
    mobileIconSize: 18,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: EmailIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
];
