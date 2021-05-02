import './Panier.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Apple from './resources/Apple.svg';
import Blackberry from './resources/Blackberry.svg';
import Raspberry from './resources/Raspberry_Pi.svg';
import React, {useCallback} from "react";
import {reducerAdd, reducerPaid} from "./tools/reducer";
import {initialStateAdd} from "./tools/environments";


export const Panier = (props) => {

  const [state, dispatch] = React.useReducer(reducerAdd, props.result);

  const dispatchBasket = (e, callback) => {
    dispatch({
      type: e.target.name,
      value: 0
    })

    callback();
    console.log('1: ',state);
  }

  const recupPros = () => {
    props.onResetBasket(state);

  }

  const handleClickReset = (e, callback) => {
    /*dispatch({
      type: e.target.name,
      value: 0
    })*/

    dispatchBasket(e,recupPros);
    console.log(state);




  }

  const handleClickPay = (e) => {
    if (state.total > 0) {
      alert(`Félicitation, vous vous êtes fait pigeonner avec vos ${state.total} articles composé de :
      ${state.apple} APPLE, 
      ${state.raspberry} Raspberry,
      ${state.blackberry} Blackberry`)

      dispatch({
        type : "RESET",
        value : 0
      })

    } else {
      alert( `vous n'avez aucun article dans votre panier`);
    }

    props.onResetBasket(state);
  }

  return (
    <div className={"container"}>
      <h2> Votre Panier </h2>
      <div className={"panier"}>
        <div className={"row"}>
          <div className={"col-sm"}>
            <div className={"image_panier"}>
              <img src={Apple} className={"img-fluid"}></img>
            </div>
          </div>
          <div className={"col-sm"}>
            <p> Quantité de produits apple : {state.apple}  </p>
          </div>
          <div className={"col-sm"}>
            <div className={"button_div"}>
              <button className={"btn btn-primary btn-sm"} type={"button"} name={"APPLE"} onClick={handleClickReset}>Reset </button>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-sm"}>
            <div className={"image_panier"}>
              <img src={Raspberry} className={"img-fluid"}></img>
            </div>
          </div>
          <div className={"col-sm"}>
            <p> Quantité de produits raspberry : {state.raspberry}  </p>
          </div>
          <div className={"col-sm"}>
            <div className={"button_div"}>
              <button className={"btn btn-primary btn-sm"} type={"button"} name={"RASPBERRY"} onClick={handleClickReset}>Reset </button>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-sm"}>
            <div className={"image_panier"}>
              <img src={Blackberry} className={"img-fluid"}></img>
            </div>
          </div>
          <div className={"col-sm"}>
            <p> Quantité de produits blackberry : {state.blackberry}  </p>
          </div>
          <div className={"col-sm"}>
            <div className={"button_div"}>
              <button className={"btn btn-primary btn-sm"} type={"button"} name={"BLACKBERRY"} onClick={handleClickReset}>Reset </button>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-sm"}></div>
          <div className={"col-sm"}>
            <p>Nombre de produit total dans votre panier : {state.total} </p>
          </div>
          <div className={"col-sm"}>
            <div className={"button_div"}>
            <button className={"btn btn-primary btn-sm"} type={"button"} name={"PAYMENT"} onClick={handleClickPay}>Payer </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
