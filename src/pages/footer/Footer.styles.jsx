import { createUseStyles } from "react-jss";
import { DEFAULT_PADDING, DEFAULT_RADIUS, colorGray, colorLightGray } from "../../constants/Constants";

export const useStyles = createUseStyles({
  footerContainer: {
    // paddingTop: DEFAULT_PADDING,
    // paddingBottom: DEFAULT_PADDING,
    background: colorLightGray,
    borderRadius: DEFAULT_RADIUS,
  },
  footerInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "100%",
    color: colorGray,
    paddingTop: DEFAULT_PADDING,
    paddingBottom: DEFAULT_PADDING,

    "& p": {
      fontSize: 16,
    },
    "& a": {
      textDecoration: "none",
      color: colorGray,
    },

    "@media all and (min-width: 696px)": {
      "& p": {
        fontSize: 18,
        textAlign: "center"
      },
    },
  },
  myimages: {
    textAlign: "center",
    "& img": {
      width: 80,
      height: "auto",
    }
  }
});
