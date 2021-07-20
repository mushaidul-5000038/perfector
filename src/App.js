import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Buy from './components/Buy';
import Header from './components/Header';
import Home from './components/Home';
import Sell from './components/Sell';


function App() {
  return (
    <div className="App">

        <Router>

            <Switch>
                   <Header/>        
               <Route path='/buy'>
                 
                 <Buy/>
                  
                </Route>

                <Route path='/sell'>
                  
                  <Sell/>
                
                </Route>
                
                <Route path='/'>
                  
                  <Home/>
                  
                </Route>    
                
            </Switch>


        </Router>

      
  
    </div>
  );
}

export default App;
