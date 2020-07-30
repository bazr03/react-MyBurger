import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredKey) => {
      return [...Array(props.ingredients[ingredKey])].map((_, i) => {
        return <BurgerIngredient key={ingredKey + i} type={ingredKey} />;
      });
    })
    .reduce((acumulador, valorActual) => {
      return acumulador.concat(valorActual);
    }, []);

  if(transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
