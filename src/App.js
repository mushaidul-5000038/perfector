import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Buy from './components/Buy';
import Home from './components/Home';
import Sell from './components/Sell';
import {db} from './fbConfig'

function App() {
  return (
    <div className="App">

        <Router>

            <Switch>
                           
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
