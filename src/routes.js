import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Header from './Components/Header'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/search' component = {Search}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;