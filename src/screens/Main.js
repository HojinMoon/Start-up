import React,{ useState ,useEffect} from 'react';

import Navigation from '../components/Navigation';
import Map from '../components/Map';
import Analysis_modal from '../components/Analysis_modal';
import Accordion_menu from '../components/Accordian_menu';
import Footer from '../components/Footer';
import Display_coordinate from '../components/Display_coordinate';
import Display_industry from '../components/Display_industry';
import Select_industry from '../components/Select_industry';


function Main(props) {
  const [mark, setMark] = useState({lat: 0, lng: 0});
  const [username,setUsername] = useState({})
  const [industry,setIndustry] = useState("미선택")

  return(
    <>
    <Navigation/>
    <div>
      <div className = "row">
        <div className = "col-sm-8">
          <Map mark={mark} setMark={setMark}/>
        </div>
        <div className = "col-sm-4" >
          <div className = "row" style = {{height: '100%',}}>
            <div className><Accordion_menu mark={mark} industry = {industry} setIndustry={setIndustry}/></div>
            <div className = "text-center">
              <div><Analysis_modal mark={mark} industry={industry}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    )
}

export default Main