import { useGlobalStyles } from "../../constants/Constants";
import { useStyles } from "./Footer.styles";
import clsx from "clsx";
import MyLogo_1 from "../../assets/logo/unnamed.png"
import MyLogo_2 from "../../assets/logo/FWB.png"
import MyLogo_3 from "../../assets/logo/logoOK.png"

export const Footer = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const mylogo = {
    images: [
      {
        img: MyLogo_1,
        link: "https://cireold.cire.be",
      },
      {
        img: MyLogo_2,
      },
      {
        img: MyLogo_3,
        link: "https://ninonmazeaud.cargo.site",
      },
    ],
  };

  return (

    <div className={clsx(globalClasses.container, classes.footerContainer)}>
      <div className={classes.footerInfo}>
        <p>
          Ce site a été réalisé grâce au soutien du Ciré asbl et de la FWB. Cet outil est participatif, n'hésitez pas à y contribuer.
        </p>
        <div className={classes.myimages}>
          {mylogo.images.map((logo, index) =>
            <a href={logo.link} key={index}>
              <img src={logo.img} alt="mylink" />
            </a>
          )}
        </div>
      </div>
    </div>

  );
};
