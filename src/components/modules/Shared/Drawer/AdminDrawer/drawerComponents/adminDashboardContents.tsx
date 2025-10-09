import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  Psychology as PsychologyIcon,
  Email as EmailIcon,
  MonetizationOn as MonetizationOnIcon,
  PeopleAlt as PeopleAltIcon,
  Description as DescriptionIcon,
  AutoStories as AutoStoriesIcon,
} from "@mui/icons-material";
import { Boxes } from "lucide-react";

export const adminDashboardContents = [
  {
    id: "home",
    label: "Home",
    href: "/admin-dashboard#banner",
    icon: HomeIcon,
    iconSize: 10,
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
    href: "/admin-dashboard/admin-resume",
    icon: DescriptionIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "about",
    label: "About me",
    href: "/admin-dashboard#about",
    icon: InfoIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "service",
    label: "Service",
    icon: ManageAccountsIcon,
    iconSize: 22,
    mobileIconSize: 18,
    subLinks: [
      {
        id: "add-service",
        label: "Add Service",
        href: "/admin-dashboard/add-service",
      },
      {
        id: "all-service",
        label: "All Service",
        href: "/admin-dashboard#service",
      },
    ],
  },
  {
    id: "skill",
    label: "Skill",
    href: "/admin-dashboard#skill",
    icon: PsychologyIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "project",
    label: "Project",
    icon: Boxes,
    iconSize: 20,
    mobileIconSize: 18,
    subLinks: [
      {
        id: "add-project",
        label: "Add Project",
        href: "/admin-dashboard/add-project",
      },
      {
        id: "all-project",
        label: "All Project",
        href: "/admin-dashboard#project",
      },
    ],
  },
  {
    id: "price",
    label: "Price",
    href: "/admin-dashboard#price",
    icon: MonetizationOnIcon,
    iconSize: 22,
    mobileIconSize: 18,
  },
  {
    id: "blog",
    label: "Blog",
    icon: AutoStoriesIcon,
    iconSize: 2000,
    mobileIconSize: 18,
    subLinks: [
      {
        id: "add-blog",
        label: "Add Blog",
        href: "/admin-dashboard/add-blog",
      },
      {
        id: "all-blog",
        label: "All Blog",
        href: "/admin-dashboard#blog",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/admin-dashboard/contact",
    icon: EmailIcon,
    iconSize: 10,
    mobileIconSize: 18,
  },
];
