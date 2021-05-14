import {useEffect} from "react"
import { useParams } from "react-router"
import Aos from "aos"
import "aos/dist/aos.css"
import PeriodDetailsCSS from "../../components/Periods/PeriodDetails.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'


export const Sections = (props) => {

    const {id} = useParams()

    useEffect(()=>{
        Aos.init({duration: 2000});

    }, [])

    return (
      <div>
      </div>
    )
  }
  
  export default Sections
