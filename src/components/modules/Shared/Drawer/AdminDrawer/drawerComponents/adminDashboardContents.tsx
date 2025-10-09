// src/components/utils/data/navLinksData.ts
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  Psychology as PsychologyIcon,
  Email as EmailIcon,
  MonetizationOn as MonetizationOnIcon,
  PeopleAlt as PeopleAltIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Boxes } from "lucide-react";

export const adminDashboardContents = [
  {
    id: "home",
    label: "Home",
    href: "#banner",
    icon: HomeIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "allUser",
    label: "All User",
    href: "/admin-dashboard/all-user",
    icon: PeopleAltIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "resume",
    label: "Resume",
    href: "/admin-dashboard/resume",
    icon: DescriptionIcon,
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
    href: "/admin-dashboard/contact",
    icon: EmailIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
];
