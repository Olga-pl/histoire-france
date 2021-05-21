import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import NavBarPeriod from "./NavBarPeriod";

export const Summary = (props) => {

    useEffect(()=>{
        Aos.init({duration: 2000});

    }, [])

    return (
        <div>
          <NavBarPeriod />
            <div id='periods-summary'>
                <div className="container">
                    <h1>Sommaire </h1>
                    <ul className="timeline">
                        {props.data.map(period=>(
                            <li className="timeline">
                                <div className="icon done" />
                                <details className="panel">
                                    <summary>{period.period}</summary>
                                        {period.chapters.map(chapter=>(
                                            <p> {chapter.title}</p>   
                                        ))}
                                    <a href={`/${period.id}/${period.period}`}><button type="button" class="btn btn-outline-danger btn-lg">Lire</button></a>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
      </div>
    )
  }
  
  export default Summary
