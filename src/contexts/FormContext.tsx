// Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from "react";

//context
const FormContext = createContext(undefined);

//reducer
enum FormActions {
  setCurrentStep, //passo atual
  setName, //pedir nome
  setEmail, //pedir email
}
const formReducer = (state, action) => {
  //recebo os dados no state
  switch (action.type) {
    case FormActions.setCurrentStep: //executo a ação de trocar passo
      return { ...state, currentStep: action.payload }; //pego o passo atual com o payload, atualizo com currenStep e retorno o state com currentstep modificado
    case FormActions.setName:
      return { ...state, setLevel: action.payload };
    case FormActions.setEmail:
      return { ...state, setEmail: action.payload };

    default:
      return state;
  }
};

//Provider
const FormProvider = ({ children }) => {
  return <FormContext.Provider>{children}</FormContext.Provider>;
};
