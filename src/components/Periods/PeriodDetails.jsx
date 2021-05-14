import {useEffect, useState} from "react"
import { useParams } from "react-router"
import Aos from "aos"
import "aos/dist/aos.css"
import PeriodDetailsCSS from "../../components/Periods/PeriodDetails.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Sections from "../Periods/Sections"
import Radium from 'radium'


export const PeriodDetails = (props) => {

    const {id} = useParams()

    useEffect(()=>{
        Aos.init({duration: 2000});

    }, [])

    return (
      <div>
          <div>
            {props.data.map(period=>(
                <div>
                    {id === period.id &&
                    <div>
                        <div className={PeriodDetailsCSS.intro_period}>
                            <div className={PeriodDetailsCSS.main}>
                                {period.chapters.map(chapter=>(
                                    <div className={PeriodDetailsCSS.part}>
                                            <div>
                                                <p className={PeriodDetailsCSS.counter}>{chapter.id}</p>
                                                <div className={PeriodDetailsCSS.container}>
                                                    <div className={PeriodDetailsCSS.hidden_line}>  
                                                        <div><p className={PeriodDetailsCSS.summary} >{chapter.title}</p></div>
                                                        <a href={`#${chapter.title}`} ><p className={PeriodDetailsCSS.discover}>Découvrir</p></a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                            <a href="/periods"><button type="button" id={PeriodDetailsCSS.fixed_btn} className="btn btn-danger">Retour Sommaire</button></a>
                        </div>
                        <div className={PeriodDetailsCSS.section_container}>
                            <div className={PeriodDetailsCSS.chap_section}>
                            {period.chapters.map(chapter=>(
                                        <div>
                                                    <h2 id={chapter.title} data-aos="fade-right" className={PeriodDetailsCSS.chap_title}>{chapter?.title}</h2>
                                                    <p>Bla Bla</p>
                                                    <p>Bla Bla</p>
                                                    <p>Bla Bla</p>
                                                    <p>Bla Bla</p>
                                                    <p>Bla Bla</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    }
                </div>
            ))}
        </div>
      </div>
    )
  }
  
  export default PeriodDetails
