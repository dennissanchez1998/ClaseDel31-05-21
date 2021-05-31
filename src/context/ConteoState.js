import React, { useReducer } from "react";
import ConteoContext from "./ConteoContext";
import ConteoReducer from "./ConteoReducer";

const ConteoState = (props) => {
  //A. initial state

  const initialState = {
    conteo: 0,
    usuario: "MIKE",
  };

  //B. configutacion de reducer

  const [state, distpach] = useReducer(ConteoReducer, initialState);

  //C. funciones propias
  const sumarNumero = () => {
    const numeroNuevo = state.conteo + 1;
    console.log(numeroNuevo);

    distpach({
      type: "SUMAR_UNO",
      payload: numeroNuevo,
    });
  };


  const RestarNumero = () => {
    const numeroNuevo = state.conteo - 1;
    console.log(numeroNuevo);

    distpach({
      type: "RESTAR_UNO",
      payload: numeroNuevo,
    });
  };

  const multiplicarNumero = () => {
    const numeroNuevo = state.conteo * 2;
    console.log(numeroNuevo);

    distpach({
      type: "MULTIPLICAR_UNO",
      payload: numeroNuevo,
    });
  };
  //D.Retorno

  return (
    <ConteoContext.Provider
      value={{
        conteoFE: state.conteo,
        usuarioFE: state.usuario,
        sumarNumero,
        RestarNumero,
        multiplicarNumero
      }}
    >
      {props.children}
    </ConteoContext.Provider>
  );
};

export default ConteoState;
