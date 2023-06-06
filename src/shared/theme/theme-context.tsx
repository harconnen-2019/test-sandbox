import React from 'react';

// https://habr.com/ru/articles/522896/

type Theme = 'light' | 'dark';
type Action = { type: 'setTheme'; value: Theme } | { type: 'toggleTheme' };
type Dispatch = (action: Action) => void;
type State = { theme: Theme };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeStateContext = React.createContext<State | undefined>(undefined);
const ThemeDispatchContext = React.createContext<Dispatch | undefined>(undefined);

/**
 *
 * @param state    {State}  - текущее состояние
 * @param action   {Action} - список действий
 * @returns state  {State}  - новое состояние
 */
function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setTheme': {
      return { theme: action.value };
    }
    case 'toggleTheme': {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { theme: newTheme };
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Такого действия "${exhaustiveCheck}" не существует`);
    }
  }
}

/**
 *
 * @param props {ThemeProviderProps}
 * @param props.children {React.ReactNode}
 * @returns JSX.Element
 */
function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = React.useReducer(themeReducer, { theme: 'light' });
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

/**
 * В дальнейшем не проверяем на undefined, так мы уже провели эту проверку!
 * @returns React.useContext(ThemeStateContext)
 */
function useThemeState() {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState должен использоваться в пределах ThemeProvider');
  }
  return context;
}

/**
 * В дальнейшем не проверяем на undefined, так мы уже провели эту проверку!
 * @returns React.useContext(ThemeDispatchContext)
 */
function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch должен использоваться в пределах ThemeProvider');
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useThemeState, useThemeDispatch };
