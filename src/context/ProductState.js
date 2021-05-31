import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = (props) => {
  //1. inicial state
  const initialState = {
    zapatos: "nike",
      camisa: "adidas",
      pantalon: "levis",
      medias: "adidas",
      prueba:["adidas","vamos"]
    };
    
  //2. configutacion de reducer

    const [state, distpach] = useReducer(ProductReducer, initialState);
    

    //3. Funciones propias

    const agregar = (value) => {

        console.log(value);

        distpach({
            type: "AGREGAR",
            payload: value,
          });
        
    }

    //4.retorno
    return (
        <ProductContext.Provider
            value={
                {
                    lista: state,
                    agregar :((e)=>agregar(e))
                }
        }>
          {props.children}
        </ProductContext.Provider>
      );





};

export default ProductState;
