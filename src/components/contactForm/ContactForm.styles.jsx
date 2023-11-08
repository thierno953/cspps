import { createUseStyles } from "react-jss";
import { DEFAULT_PADDING, DEFAULT_RADIUS, colorDark, colorGray, colorLight, colorLightGray, defaultFont, defaultFontMedium } from "../../constants/Constants";

export const useStyles = createUseStyles({
  container: {},
  formInput: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: DEFAULT_PADDING,
    "& label": {
      fontFamily: defaultFontMedium,
      fontSize: 16,
      paddingBottom: 8,
    },
    "& input, & textarea": {
      backgroundColor: colorLightGray,
      padding: "13px 16px",
      borderRadius: DEFAULT_RADIUS,
      color: colorGray,
      // border: "none",
      fontSize: 16,
      outline: "none",
      fontFamily: defaultFont,
    },
    "& textarea": {
      resize: "vertical",
      minHeight: 100,
    },
    "& div": {
      color: "red",
      fontSize: 16,
      paddingTop: 8,
    },
  },
  formButton: {
    background: colorDark,
    color: colorLight,
    outline: "none",
    border: "none",
    borderRadius: DEFAULT_RADIUS,
    padding: DEFAULT_PADDING,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: defaultFontMedium,
    fontSize: 14,
    cursor: "pointer",
    "& span": {
      marginRight: 8,
    },
    "& svg path": {
      fill: colorLight,
    },
    "&:hover": {
      backgroundColor: colorDark,
    },
  },
});
