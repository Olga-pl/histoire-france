import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Periods from "./components/periods"
import Wars from "./components/wars"
import About from "./components/About"
import Summary from "./components/Periods/Summary"
import PeriodDetails from "./components/Periods/PeriodDetails"
import NotFound from "./components/NotFound"

import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLandingPageData(JsonData);
    setLoading(false);
    window.scrollTo(0, 0)
    
  }, [])

  if(loading)return <h1>LOADING</h1>


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <NavBar />
              <Home data={landingPageData.Home}/>
              <Periods data={landingPageData.Periods}/>
              <Wars data={landingPageData.Wars}/>
              <About data={landingPageData.About}/>
            </Route>
            <Route path ="/periods">
              <Summary data={landingPageData.Summary} />
            </Route>
            <Route exact path={`/:id/:period`}>
                <PeriodDetails data={landingPageData.Summary} />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
