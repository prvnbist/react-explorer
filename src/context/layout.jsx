import React from 'react'

const Context = React.createContext()

const reducers = (state, { type }) => {
   switch (type) {
      case 'TOGGLE_SIDEBAR':
         return { ...state, sidebar: { open: !state.sidebar.open } }
      default:
         return state
   }
}

export const LayoutProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(reducers, {
      sidebar: { open: true },
   })
   return (
      <Context.Provider value={{ state, dispatch }}>
         {children}
      </Context.Provider>
   )
}

export const useLayout = () => {
   const { state, dispatch } = React.useContext(Context)

   const toggle_sidebar = React.useCallback(() => {
      dispatch({ type: 'TOGGLE_SIDEBAR' })
   }, [])

   return { state, toggle_sidebar }
}
