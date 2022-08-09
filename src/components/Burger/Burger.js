import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
    const transformedIngredients =Object.keys(igKey => {
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i } type={igKey}/>;
        });
    })
    console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>    
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}             
      {/* <BurgerIngredient type="bacon" />
       <BurgerIngredient type="meat" /> */}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

