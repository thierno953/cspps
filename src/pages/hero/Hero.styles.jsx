import { createUseStyles } from "react-jss";
import { DEFAULT_RADIUS } from "../../constants/Constants";

export const useStyles = createUseStyles({
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "4vh",
    marginBottom: "4vh",
  },
  // title: {
  //     lineHeight: 1.5,
  //     fontSize: "18px",
  //     fontWeight: "600",
  //     maxWidth: 700,
  //     margin: "auto",
  //     textAlign: "center",

  //     "@media all and (min-width: 960px)": {
  //         fontSize: "18px",
  //     },
  // },
  heroImage: {
    display: "block",
    maxWidth: "100%",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: DEFAULT_RADIUS,
  },
});
