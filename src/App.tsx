import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavLink from './components/Nav';

const Dummy = ({}) => {
  return <h1>'I am dummy</h1>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <ul className="navigation">
          <NavLink exact={true} to={' '} size={'small'} text={'HomePage'} />
          <NavLink exact={true} to={'games'} size={'small'} text={'Games'} />
          <NavLink exact={true} to={'result'} size={'small'} text={'Result'} />
        </ul>

        <Switch>
          <Route exact path="/" component={Dummy} />
          <Route exact path="/games" component={Dummy} />
          <Route exact path="/result" component={Dummy} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
