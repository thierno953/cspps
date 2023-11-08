import { useState } from "react";
import { useStyles } from "./AfghansCharleroi.styles";
import { BiX } from "react-icons/bi";
import { useGlobalStyles } from "../../../constants/Constants";

const AfghansCharleroi = ({ afghansCharleroi: { images } }) => {
    const [model, setModel] = useState(false);
    const [tempimage, setTempimage] = useState("");

    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    const getImg = (img) => {
        setTempimage(img)
        setModel(true)
    }

    return (
        <div className={globalClasses.container}>
            <div className={model ? "model open" : "model"}>
                <img src={tempimage} />
                <BiX onClick={() => setModel(false)} />
            </div>
            <div
                className={
                    classes.gallery
                }
            >
                {images.map((image, id) => (
                    <div key={id} className={classes.pics} onClick={() => getImg(image.img)}>
                        <img
                            src={image.img}
                            alt="Afghans Charleroi"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AfghansCharleroi;
