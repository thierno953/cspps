import { createUseStyles } from "react-jss";
import { colorDark } from "../../constants/Constants";

export const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 20,
    fontSize: 16,
    "@media all and (min-width: 960px)": {
      paddingTop: 20,
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 100,
      fontSize: 18,
    },
  },
  contactLeftContainer: {
    color: colorDark,
    "& p": {
      color: colorDark,
    },
  },
  contactRightFormContainer: {},
  aboutMeImage: {
    width: "100%",
    objectFit: "cover",
    margin: "0 auto 20px",
    "@media all and (min-width: 460px)": {
      width: "100%",
      maxWidth: "100%",
      height: "50vh",
      objectFit: "cover",
      margin: "initial",
      marginTop: "4vh",
      marginBottom: "4vh",
    },
  },
  imagesLink: {
    display: "flex",
    gap: 20,
    paddingTop: 10
  },
  mylink: {
    "& p": {
      color: colorDark,
    },
    "& img": {
      width: 50,
      height: "auto",
      objectFit: "contain",
      borderRadius: "50%",
      padding: 10,
      "@media all and (min-width: 460px)": {
        width: 50,
      },
    }
  }
});
