import './Fruits.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import React from "react";

import Apple from './resources/Apple.svg';
import Blackberry from './resources/Blackberry.svg';
import Raspberry from './resources/Raspberry_Pi.svg';

import {select_Quantity} from "./tools/htmlTools";
import {reducerAdd} from "./tools/reducer";

export const Fruits = (props) => {

  const [state, dispatch] = React.useReducer(reducerAdd, props.result);
  const [appleState, setApple] = React.useState(0);
  const [raspberryState, setRaspberry] = React.useState(0);
  const [blackberryState, setBlackberry] = React.useState(0);

  const apple = "APPLE";
  const raspberry = "RASPBERRY";
  const blackberry = "BLACKBERRY";

  React.useEffect(() => {
    props.onBasketUpdate(state);
    console.log("fruit: ", state);
  })

  const handleChange = (e) => {
    const value = (Number.isInteger(parseInt(e.target.value))) ? parseInt(e.target.value) : 0 ;
    switch (e.target.name) {
      case apple :
        setApple(value);
        break;
      case raspberry:
        setRaspberry(value);
        break;
      case blackberry:
        setBlackberry(value);
        break;
      default:
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const value = (e.target.name == apple) ? appleState : (e.target.name == raspberry) ? raspberryState : blackberryState;

    dispatch({
      type: e.target.name,
      value: value,
    });

    alert(`Le nombre de ${e.target.name} dans votre panier est désormais de ${value}`);
  }

  const handleClickReset = (e) => {
    dispatch({
      type: e.target.name,
      value: 0
    });
    //props.onBasketUpdate(state);
    alert(`Il y a 0 ${e.target.name} dans votre panier`);
  }

  const handleClickAll = (e) => {
    dispatch ({

    })
    alert(`il y a dans votre panier un total de ${state.total} d'articles`);
  }

  const handleClickResetAll = (e) => {
    [apple, raspberry, blackberry].map((val) =>
      dispatch({
        type: val,
        value: 0
      })
    );
  }

  return(
    <div className="container">
      <h2>Notre Sélection </h2>

      <div className="grille">
        <div className="row">
          <div className="col-sm">
            <div className="fruit_name_div">
              <p className="fruit_name_p"> Pomme </p>
            </div>
            <hr/>
            <div className="image">
              <img src={Apple} className="img-fluid"></img>
            </div>
          </div>
          <div className="col-sm">
            <div className="fruit_name_div">
              <p className="fruit_name_p"> Framboise </p>
            </div>
            <hr/>
            <div className="image">
              <img src={Raspberry} className=""></img>
            </div>
          </div>
          <div className="col-sm">
            <div className="fruit_name_div">
              <p className="fruit_name_p"> Mûre </p>
            </div>
            <hr/>
            <div className="image">
              <img src={Blackberry} className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="select_form_div">
              <select className="form-select" value={appleState} name={apple} onChange={handleChange}>
                <option defaultValue="0">Quantités</option>
                {select_Quantity()}
              </select>
            </div>
            <div className="btn_form_div">
              <button className="btn btn-primary btn-sm" type="button" name={apple} onClick={handleClick}> Ajouter au panier</button>
              <button className="btn btn-secondary btn-sm" type="button" name={apple} onClick={handleClickReset}>Reset</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="select_form_div">
              <select className="form-select" name={raspberry} value={raspberryState } onChange={handleChange}>
                <option defaultValue="0">Quantités</option>
                {select_Quantity()}
              </select>
            </div>
            <div className="btn_form_div">
              <button className="btn btn-primary btn-sm" type="button" name={raspberry} onClick={handleClick}> Ajouter au panier</button>
              <button className="btn btn-secondary btn-sm" type="button" name={raspberry} onClick={handleClickReset}>Reset</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="select_form_div">
              <div className="select">
                <select className="form-select" name={blackberry} value={blackberryState} onChange={handleChange}>
                  <option defaultValue="0">Quantités</option>
                  {select_Quantity("BLACKBERRY")}
                </select>
              </div>
              <div className="btn_form_div">
                <button className="btn btn-primary btn-sm " type="button" name={blackberry}  onClick={handleClick}> Ajouter au panier</button>
                <button className="btn btn-secondary btn-sm" type="button" name={blackberry}  onClick={handleClickReset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="btn_total_div">
              <button className="btn btn-primary btn-sm" type="button" onClick={handleClickAll}> Ajouter tout</button>
              <button className="btn btn-secondary btn-sm" type="button"onClick={handleClickResetAll}>Reset tout</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
