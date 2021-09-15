import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/products-context";

import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";
import ConfigureProductsStore from "./hooks-store/products-store";

ConfigureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
