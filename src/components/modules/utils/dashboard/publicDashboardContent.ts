// src/components/utils/data/navLinksData.ts
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ManageAccounts as ManageAccountsIcon,
  Psychology as PsychologyIcon,
  Work as WorkIcon,
  RssFeed as RssFeedIcon,
  Email as EmailIcon,
  MonetizationOn as MonetizationOnIcon,
} from "@mui/icons-material";

export const publicDashboardContents = [
  { id: "home", label: "Home", href: "#banner", icon: HomeIcon },
  { id: "about", label: "About me", href: "#about", icon: InfoIcon },
  {
    id: "service",
    label: "Service",
    href: "#service",
    icon: ManageAccountsIcon,
  },
  { id: "skill", label: "Skill", href: "#skill", icon: PsychologyIcon },
  { id: "project", label: "Project", href: "#project", icon: WorkIcon },
  { id: "price", label: "Price", href: "#price", icon: MonetizationOnIcon },
  { id: "blog", label: "Blog", href: "#blog", icon: RssFeedIcon },
  { id: "contact", label: "Contact", href: "#contact", icon: EmailIcon },
];
