import {useEffect, useState} from "react"
import { useParams } from "react-router"
import Aos from "aos"
import "aos/dist/aos.css"
import PeriodDetailsCSS from "../../components/Periods/PeriodDetails.module.css"

export const PeriodDetails = (props) => {

    const {id} = useParams()

    useEffect(()=>{
        Aos.init({duration: 2000});

    }, [])

    return (
      <div id={PeriodDetailsCSS.period_details} >
          
          <div>
            {props.data.map(period=>(
                <div>
                    {id === period.id &&
                    <div className={PeriodDetailsCSS.main}>
                         {period.chapters.map(chapter=>(
                                <div className={PeriodDetailsCSS.part}>
                                    <p className={PeriodDetailsCSS.counter}>{chapter.id}</p>
                                    <p className={PeriodDetailsCSS.summary} >{chapter.title}</p>
                                      
                                </div>
                            
                     
                            
                        ))}
                       
                           

                               
                    </div>}
                </div>
            ))}
        </div>
      </div>
    )
  }
  
  export default PeriodDetails
