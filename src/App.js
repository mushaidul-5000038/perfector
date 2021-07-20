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
                         
               <Route path='/buy'>
                
                  <Header/>  
                  <Buy/> 
                  
                </Route>

                <Route path='/sell'>
                  
                  <Header/> 
                  <Sell/>
                
                </Route>
                
                <Route path='/'>
                  
                  <Header/> 
                  <Home/>
                  
                </Route>    
                
            </Switch>


        </Router>

      
  
    </div>
  );
}

export default App;
