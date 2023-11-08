import { useEffect, useState } from "react";
import { useStyles } from "./Navbar.styles";
import logo from "../../assets/boussole.png";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useGlobalStyles } from "../../constants/Constants";
import { NavigationLinks } from "../../components/navLinks/NavigationLinks";


export const Navbar = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const { pathname } = useLocation();

  const [navigationToggled, setNavigationToggled] = useState(false);

  useEffect(() => {
    // On navigation make sure to toggle the mobile navigation off and scroll to top
    setNavigationToggled(false);
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
  }, [pathname]);

  const handleHamburgerClicked = () => {
    setNavigationToggled((toggled) => {
      document.body.style.overflowY = toggled ? "auto" : "hidden";
      return !toggled;
    });
  };

  return (
    <div className={clsx(globalClasses.container, classes.navContainer)}>
      <Link to="/">
        <img src={logo} alt="Cartographie" className={classes.logo} />
      </Link>
      <div className={classes.navRight}>
        <div className={classes.hideMobile}>
          <NavigationLinks />
        </div>
        <div
          className={clsx(classes.navHamburger, {
            [classes.navHamburgerActive]: navigationToggled,
          })}
          onClick={handleHamburgerClicked}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        className={clsx(classes.navMobileContainer, {
          [classes.navMobileContainerActive]: navigationToggled,
        })}
      >
        <NavigationLinks />
      </div>
    </div>
  );
};
