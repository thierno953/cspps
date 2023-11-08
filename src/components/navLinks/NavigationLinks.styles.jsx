import { createUseStyles } from "react-jss";
import { DEFAULT_PADDING, colorDark, colorGray, defaultFontMedium } from "../../constants/Constants";

export const useStyles = createUseStyles({
  navLinks: {
    fontFamily: defaultFontMedium,
    color: colorGray,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "& li": {
      width: "100%",
    },
    "& li a": {
      display: "block",
      width: "100%",
      padding: "20px 0",
      textAlign: "center",
      color: colorGray,
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: colorDark,
      },
    },
    "@media all and (min-width: 696px)": {
      flexDirection: "row",
      "& li": {
        width: "initial",
      },
      "& li a": {
        width: "auto",
        padding: DEFAULT_PADDING,
      },
    },
  },
  navLinksFooter: {
    "& li a": {
      textAlign: "left",
    },
  },
  navLinkActive: {
    color: `${colorDark} !important`,
  },
});
