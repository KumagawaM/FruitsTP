import { initialStateAdd } from "./environments";

export const reducerAdd = (state, action) => {
    switch(action.type) {
      case "APPLE":
        return {
          apple: action.value,
          raspberry: state.raspberry,
          blackberry: state.blackberry,
          total: action.value + state.raspberry + state.blackberry
        }
      case "RASPBERRY":
        return {
          apple: state.apple,
          raspberry: action.value,
          blackberry: state.blackberry,
          total: action.value + state.apple + state.blackberry
        }
      case "BLACKBERRY":
        return {
          apple: state.apple,
          raspberry: state.raspberry,
          blackberry: action.value,
          total: action.value + state.raspberry + state.apple
        }
      case "RESET":
        return {
          apple: 0,
          raspberry: 0,
          blackberry: 0,
          total: 0
        }

      default:
        return state;
  }
}

export const reducerPaid = (state, action) => {


}
