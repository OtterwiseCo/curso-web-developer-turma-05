import { createContext, useContext, useReducer } from 'react'

const initialState = {
  firstBox: [
    {
      id: 0,
      name: 'button 0',
    },
    {
      id: 1,
      name: 'button 1',
    },
    {
      id: 2,
      name: 'button 2',
    },
  ],
  secondBox: [
    {
      id: 3,
      name: 'button 3',
    },
    {
      id: 4,
      name: 'button 4',
    },
    {
      id: 5,
      name: 'button 5',
    },
  ],
}

const BoxContext = createContext()

const reducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'box-1': {
      const buttonFound = state.firstBox.find(
        (button) => button.id === action.id
      )
      console.log(buttonFound)
      const newSecondBox = [...state.secondBox, buttonFound]
      console.log(newSecondBox)
      const newFirstBox = state.firstBox.filter(
        (button) => button.id !== action.id
      )
      console.log(newFirstBox)
      return { firstBox: newFirstBox, secondBox: newSecondBox }
    }
    case 'box-2': {
      const buttonFound = state.secondBox.find(
        (button) => button.id === action.id
      )
      const newFirstBox = [...state.firstBox, buttonFound]

      const newSecondBox = state.secondBox.filter(
        (button) => button.id !== action.id
      )
      return { firstBox: newFirstBox, secondBox: newSecondBox }
    }
    default:
      break
  }
}

const BoxProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BoxContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BoxContext.Provider>
  )
}

const useBox = () => {
  const context = useContext(BoxContext)
  if (context === undefined) {
    throw Error('O contexto deve ser usado dentro de um Provider')
  }
  return context
}

export { BoxProvider, useBox }
