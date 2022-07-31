import { NavLink } from "@/components/index";

import settings from "@/config/settings";

/**
 * It takes the headerLinks array from the settings object and returns an array of NavLink components
 */
const getHeaderLinks = () =>
  settings.headerLinks.map(({ label, activeLinks, link, icon }) => (
    <NavLink
      label={label}
      activeLinks={activeLinks}
      key={label}
      link={link}
      icon={icon}
    />
  ));

export default getHeaderLinks;
