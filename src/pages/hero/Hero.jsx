import React from 'react';
import { useStyles } from "./Hero.styles";
import CARTOGRAPHIE from "../../assets/images/6_OK-Titre-CARTOGRAPHIE.jpg";

export const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <img src={CARTOGRAPHIE} alt="CARTOGRAPHIE" className={classes.heroImage} />
    </div>
  );
};
