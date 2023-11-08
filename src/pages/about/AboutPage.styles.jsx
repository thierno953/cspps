import { createUseStyles } from "react-jss";
import { colorDark } from "../../constants/Constants";

export const useStyles = createUseStyles({
  aboutContainer: {
    marginTop: "4vh",
    marginBottom: "4vh",
  },
  aboutMeContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    "@media all and (min-width: 960px)": {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  title: {
    color: colorDark,
    fontWeight: 600,
  },
  aboutMeTextWrapper: {
    "& p": {
      fontSize: 16,
    },
    "@media all and (min-width: 960px)": {
      paddingRight: 20,
    },
    "@media all and (min-width: 696px)": {
      "& p": {
        fontSize: 18,
      },
    },
  },
  aboutMeImage: {
    width: "100%",
    objectFit: "cover",
    margin: "0 auto 20px",
    "@media all and (min-width: 960px)": {
      width: "100%",
      maxWidth: "100%",
      height: "50vh",
      objectFit: "cover",
      margin: "initial",
    },
  },
});
