import {tabQ} from "./environments";
import React from "react";
import '../Fruits.css';

export const select_Quantity = () =>
  tabQ.map((num, i) =>
      <option key={i} value={num}> {num} </option>
  );



