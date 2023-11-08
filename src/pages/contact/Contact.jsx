import { useStyles } from "./Contact.styles";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Cartographie from "../../assets/images/Carte_site_ A_propos(haut).jpg";
import { useGlobalStyles } from "../../constants/Constants";
import ContactForm from "../../components/contactForm/ContactForm";
import { mylink } from "../../components/data/liens";

export const Contact = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <img
        src={Cartographie}
        alt="Cartographie"
        className={classes.aboutMeImage}
      />
      <div className={classes.container}>
        <div className={classes.contactLeftContainer}>
          <div>
            <div>
              <p>
                Si vous souhaitez ajouter une information,
                <br />
                transmettre une modification, dire bonjour 👋
              </p>
              <p>
                <FaEnvelopeOpen /> cartographiesp@gmail.com
              </p>
            </div>
          </div>
          <div className={classes.contactRightFormContainer}>
            <ContactForm />
          </div>
        </div>
        <div className={classes.mylink}>
          <p>
            Si vous souhaitez en savoir plus sur les différents,
            <br />
            collectifs de personnes sans-papiers, actifs à Bruxelles,
            <br />
            contactez-les directement
            👋
          </p>
          <div className={classes.imagesLink}>
            {mylink.images.map((mylin, index) =>
              <div key={index}>
                <a href={mylin.link}>
                  <img src={mylin.img} alt="mylink" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
