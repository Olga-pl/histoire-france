import {useEffect, useState} from "react"
import { useParams } from "react-router"
import Aos from "aos"
import "aos/dist/aos.css"
import PeriodDetailsCSS from "../../components/Periods/PeriodDetails.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from "react-bootstrap"

import {Prehistoire1, Prehistoire2, Prehistoire3, Prehistoire4}  from "../Periods/Prehistoire/Prehistoire"


export const PeriodDetails = (props) => {

    const {id} = useParams()


    return (
      <div>
          <div>
            {props.data.map(period=>(
                <div>
                    {id === period.id &&
                        <div>
                            {/* <section className="zoom"><img src="https://cutt.ly/Rb4olTR" alt="image"/></section> */}

                        {/* <div className={PeriodDetailsCSS.intro_period}>
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
                        </div> */}
                        <header className={PeriodDetailsCSS.zoom}>
	                        <img className={PeriodDetailsCSS.image_header} src="https://cutt.ly/Tb4nfSo" />
                        </header>
                            <main role="main">
                                <div className={PeriodDetailsCSS.content}>
                                <div className={PeriodDetailsCSS.section_container}>
                                <div className={PeriodDetailsCSS.chap_section}>
                                    {period.chapters.map(chapter=>(
                                        <div>
                                            <div className={PeriodDetailsCSS.contain_title}>
                                                <h2 id={chapter.title} data-aos="fade-right" className={PeriodDetailsCSS.chap_title}>{chapter?.title}</h2>
                                            </div>
                                                {chapter.section?.map(section=>(
                                                    <details className={PeriodDetailsCSS.panel}>
                                                        <summary>
                                                            <Card className={PeriodDetailsCSS.card_header}>  
                                                                <Card.Header key={section.id} id={section.id} >
                                                                    <h4 className={PeriodDetailsCSS.section_title}>{section.title}</h4>
                                                                </Card.Header>
                                                            </Card>
                                                        </summary>
                                                        <div className={PeriodDetailsCSS.content_section}>
                                                            {(() => {
                                                                switch (section.id) {
                                                                        case "1":   return <Prehistoire1 />;
                                                                        case "2": return  <Prehistoire2 />;
                                                                        case "3":  return <Prehistoire3 />;
                                                                        default:      return <Prehistoire4 />;
                                                                    }
                                                            })()}
                                                        {/* {section.text.map(article=>(
                                                        <Card className={PeriodDetailsCSS.card_container} border="danger" style={{ width: '18rem' }}>
                                                            <Card.Body>
                                                            <Card.Title>Danger Card Title</Card.Title>
                                                            <Card.Text>
                                                            {article.article}
                                                            </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                        ))} */}
                                                        </div>
                                                    </details>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                                </div>
                                
                            </main>


                        
                            <a href="/periods"><button type="button" id={PeriodDetailsCSS.fixed_btn} className="btn btn-danger">Retour Sommaire</button></a>

                    </div>
                    }
                </div>
            ))}
        </div>
      </div>
    )
  }
  
  export default PeriodDetails
