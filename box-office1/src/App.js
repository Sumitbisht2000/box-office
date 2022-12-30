import React from "react";
import { Switch,Route } from 'react-router-dom';

function App() {
  return (
  <Switch>
    
    <Route  exact path ="/">
        THIS IS HOME PAGE
    </Route>

    <Route  exact path ="/starred">
        THIS IS starred
    </Route>
    <Route>
      THIS PAGE IS 404 PAGE  
    </Route>
  
  </Switch>
  );
  
}

export default App;
