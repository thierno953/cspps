import { useStyles } from "./AboutPage.styles";
import Cartographie from "../../assets/images/Carte_site_ A_propos(haut).jpg";
import Cartographie1 from "../../assets/images/Carte_site_ A_propos(bas).jpg";
import { useGlobalStyles } from '../../constants/Constants';

export const AboutPage = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <main className={globalClasses.container}>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutMeContainer}>
          <div className={classes.aboutMeTextWrapper}>
            <img
              src={Cartographie}
              alt="Cartographie"
              className={classes.aboutMeImage}
            />
            <br /><br />
            <p className={classes.title}>
              Archives Poétiko-politics des lieux occupés et autogérés par et pour des personnes sans-papiers à Bruxelles, depuis les années 2000.
            </p>
            <p>
              Ce projet commence en 2019.
            </p>
            <p>
              Son point de départ fut la rencontre avec les habitant·es de La Maison des Migrants, alors située rue Prince Royal n°103, en 2016.
            </p>
            <p>
              Nous étions des voisin·es, et je commençais à passer lors d’évènements, pour proposer des ateliers aux enfants de la maison, partager un repas.
            </p>
            <p>
              Au moment de déménager une première fois, après plus de 9 mois d’occupation, certain·es m’ont demandé d’aider. Je suis restée. Participant aux premières réunions, écoutant de loin les propositions, baignant dans l’urgence, ne sachant pas où j’allais, ou iels iraient.
            </p>
            <p>
              Du jour au lendemain, ce lieu que je côtoyais maintenant souvent, avec ses activités quotidiennes, ses évènements culturels et autres, allait brusquement fermer ses portes. Mettant tout le monde dehors, habitant·es compris·es. Et une fois que tout serait déménagé, le bâtiment redeviendrait vide et silencieux. Ne laissant aucune trace du passage de La Maison des Migrants - ce lieu de vie effervescent d’expérimentations sociales et politiques - comme si rien n’avait existé. Un immeuble de logements de luxe serait construit à la place, fin de l’histoire.
            </p>
            <p>
              C’est le point de départ du travail d’archives, commencé avec le groupe de La Maison des Migrants, et étendu aux expériences des autres collectifs de personnes sans-papiers à Bruxelles. Dans le but de préserver ces architectures collectives et éphémères.
            </p>
            <p>
              Mais aussi démontrer la violence et l’absurdité d’un système qui traque et qui expulse des familles, des femmes et des hommes, sans être inquiété et sans laisser de traces.
            </p>
            <p>
              Le nombre de déplacements sur des périodes parfois très courtes montre également la volonté et la persévérance de ces groupes, qui se réorganisent malgré les obstacles.
            </p>
            <p>
              Ces occupations (parfois appelées « squats »), à la fois lieux de vie et lieux de lutte, sont nombreuses à Bruxelles.
            </p>
            <p>
              À la différence de squatteureuses qui font le choix de vivre en marge, parfois pour des raisons politiques, parfois pour des raisons économiques, ou autres, les habitant·es de ces occupations n’ont pas d’autre choix que d’y vivre. L’absence de statut empêche bien souvent l’accès au logement via un contrat de location.
            </p>
            <p>
              Ici, chacun·e des habitant·es a ses objectifs personnels à poursuivre, mais surtout un objectif commun : obtenir la régularisation. Celles et ceux qui y accèdent, finissent souvent par quitter ces espaces collectifs pour se construire une vie « normale » : un appartement à soi.
            </p>
            <p>
              L’histoire de ces lieux et de leurs occupant·es, raconte aussi Bruxelles : gentrification excessive, expulsions illégales, accès à la régularisation, droit au logement pour toustes,…
            </p>
            <p className={classes.title}>
              Ce projet est collectif et participatif, vous pouvez y contribuer
            </p>
            <p>
              Voyager dans la carte.
            </p>
            <p>
              Cliquer sur des points pour accéder à différents documents.
            </p>
            <p>
              Prendre contact si vous souhaitez ajouter - modifier une ou plusieurs informations.
            </p>
            <p>
              Cet outil sera toujours en construction.
            </p>
            <p>
              Il n’est pas parfait et comporte sûrement des erreurs et des imprécisions.
            </p>
            <p>
              Pour finir, ce projet ne fait pas l’état des lieux de toutes les occupations de Bruxelles.
            </p>
            <p>
              Il existe autant de manières d’occuper un lieu qu’il existe de lieux occupés. Ici, il s’agit uniquement de lieux où seules des personnes sans-papiers résident, et s’organisent entre elles. Bien sûr, il y a toujours des allié·es, plus ou moins présent·es, souvent pour les négociations et les obligations administratives.
            </p>
            <p>
              C’est donc une balade virtuelle dans Bruxelles.
            </p>
            <p>
              Qui invite à se perdre.
            </p>
            <p>
              Car il n’est pas important de savoir exactement où l’on se trouve.
            </p>
            <p>
              Juste entrer, et passer un peu de temps.
            </p>
          </div>
          <img
            src={Cartographie1}
            alt="Cartographie"
            className={classes.aboutMeImage1}
          />
        </div>
      </div>
    </main>
  );
};
