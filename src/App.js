import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Buy from './components/Buy';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/HomeComponents/Footer';
import PropertyDetails from './components/BuyComponents/PropertyDetails';
import Sell from './components/Sell';


function App() {
  return (
    <div className="App">

        <Router>

            <Switch>
                         
               <Route path='/buy'>
                
                  <Header/>  
                  <Buy/>
                  <Footer/> 
                  
                </Route>

                <Route path='/sell'>
                  
                  <Header/> 
                  <Sell/>
                  <Footer/> 
                
                </Route>

                <Route path='/property/:id'>
                  
                  <Header/> 
                  <PropertyDetails/>
                  <Footer/> 
                
                </Route>
                
                <Route path='/'>
                  
                  <Header/> 
                  <Home/>
                  <Footer/> 
                  
                </Route>    
                
            </Switch>


        </Router>

      
  
    </div>
  );
}

export default App;
