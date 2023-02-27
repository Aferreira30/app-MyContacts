import {Route, Switch} from 'react-router-dom';

import Home from '../src/pages/Home'
import NewContact from '../src/pages/NewContact';
import EditContact from '../src/pages/EditContact';

export default function Rotas(){
  return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novo" component={NewContact} />
        <Route path="/editar/:id" component={EditContact} />
      </Switch>
  )

};
