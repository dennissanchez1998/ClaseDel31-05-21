export default (state,action) => {
    
    switch (action.type) {
        case "AGREGAR":
            return {
             ...state,prueba:[...state.prueba,action.payload]
            }
          
        default:
            return state;
    }
}