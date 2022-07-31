import { NavLink } from "@/components/index";

import settings from "@/config/settings";

/**
 * It takes the headerLinks array from the settings object and returns an array of NavLink components
 */
const getHeaderLinks = () =>
  settings.headerLinks.map((link) => <NavLink {...link} key={link.label} />);

export default getHeaderLinks;
