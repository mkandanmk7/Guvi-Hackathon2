import "./App.css";
import Products from "./Pages/Products/Products";
import Header from "./Components/Header";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />

          <Route path="/about" component={About} />
        </Switch>
        <Route path="/home">
          <Redirect to="/" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
