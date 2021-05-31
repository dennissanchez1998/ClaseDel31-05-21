//1. exportacion de una funcion de flecha 


export default (state,action) => {
    
    switch (action.type) {
        case "SUMAR_UNO":
            return {
             ...state,conteo:action.payload
            }
            case "RESTAR_UNO":
                return {
                 ...state,conteo:action.payload
            }
            case "MULTIPLICAR_UNO":
                return {
                 ...state,conteo:action.payload
             }
        default:
            return state;
    }
}