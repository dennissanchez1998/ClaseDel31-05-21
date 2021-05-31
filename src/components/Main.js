import React, { useContext, useState } from "react";
import ConteoContext from "../context/ConteoContext";
import ProductContext from "../context/ProductContext";

export const Main = () => {
  const [prueba, setprueba] = useState("");
  const ctx = useContext(ConteoContext);

  const ctx2 = useContext(ProductContext);
  console.log(ctx2);
  const { conteoFE, sumarNumero, RestarNumero, multiplicarNumero } = ctx;
  const { lista, agregar } = ctx2;
  console.log(lista);

  const click = (event) => {
    event.preventDefault();
    const operacionAritmetica = event.target.id;
    // Ejecutar función propia de context
    switch (operacionAritmetica) {
      case "sumar":
        sumarNumero();
        break;
      case "multiplicar":
        multiplicarNumero();
        break;
      default:
        RestarNumero();
    }
  };

  const agregar2 = (val) => {
    console.log(val.target.value);
    setprueba(val.target.value);
  };

  const forma = (e) => {
    e.preventDefault();
    agregar(prueba);
  };

  return (
    <div>
      el valor es este {ctx.conteoFE} y me llamo {ctx.usuarioFE}
      <button id="sumar" onClick={(e) => click(e)}>
        Sumar +1
      </button>
      <button id="restar" onClick={(e) => click(e)}>
        Restar -1
      </button>
      <button id="multiplicar" onClick={(e) => click(e)}>
        Multiplicar *2
      </button>
      <hr />
      {lista.camisa},{lista.zapatos},{lista.medias}
      <hr />
      <form
        onSubmit={(e) => {
          forma(e);
        }}
      >
        <input type="text" name="name" onChange={(e) => agregar2(e)} />
        <button type="submit">Agregar</button>
          </form>
          
          {
              lista.prueba.map((e) => (
                  <>
                      <div>{ e}</div>
                  
                  </>
                  
              ))
          }
    </div>
  );
};
