import { createUseStyles } from "react-jss";
import { DEFAULT_RADIUS } from "../../../constants/Constants";

export const useStyles = createUseStyles({
    gallery: {
        WebkitColumnCount: 1,
        MozColumnCount: 1,
        columnCount: 1,
        "@media all and (min-width: 460px)": {
            WebkitColumnCount: 2,
            MozColumnCount: 2,
            columnCount: 2,
            maxWidth: "100%",
            margin: "auto",
            WebkitColumnWidth: "33%",
            MozColumnWidth: "33%",
            columnWidth: "33%",
            padding: "0 12px",
            marginTop: 40,
            marginBottom: 40,
            minHeight: "100vh",
        },
    },

    pics: {
        WebkitTransform: "all 350ms ease",
        transform: "all 350ms ease",
        cursor: "pointer",
        marginBottom: 12,
        "& hover": {
            fillOpacity: ".8px"
        },
        "& img": {
            width: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            borderRadius: DEFAULT_RADIUS
        }
    },
});
