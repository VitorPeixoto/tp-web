import { createContext } from 'react';

export const Context = createContext();

const withContext = Component => (
  props => (
    <Context.Consumer>
      <Component {...props} />
    </Context.Consumer>
  )
)

export default withContext;
