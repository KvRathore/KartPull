import { Route, Redirect, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';

// Importing components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  // console.log(initial);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
