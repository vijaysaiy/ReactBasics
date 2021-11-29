import {React,useState} from "react";
import Buttons from "./Buttons"
import Form from "./Form"
import ImageDemo from "./ImageDemo";
import Lists from "./Lists"
import PaneledInfo from "./PaneledInfo";
import Panels from "./Panels"
import PersonsList from "./PersonsList"
import RowsAndColumns from "./RowsAndColumns"
import Typography from "./Typography"

function DynamicTabs() {
   const [tab,setTab] = useState(true)
  return (
    <div>
      <h1>Dynamic Tabs</h1>
      <ul className="nav  nav-tabs ">
        <li>
          <a href="#ex-1" data-toggle="tab" onClick={()=>setTab(false)}>
            Buttons
          </a>
        </li>
        <li>
          <a href="#ex-2" data-toggle="tab" onClick={()=>setTab(false)}>
           Forms
          </a>
        </li>
        <li>
          <a href="#ex-3" data-toggle="tab" onClick={()=>setTab(false)}>
            Lists
          </a>
        </li>
        <li>
          <a href="#ex-4" data-toggle="tab" onClick={()=>setTab(false)}>
            Panels
          </a>
        </li>
        <li>
          <a href="#ex-5" data-toggle="tab" onClick={()=>setTab(false)}>
            Person List
          </a>
        </li>
        <li>
          <a href="#ex-6" data-toggle="tab" onClick={()=>setTab(false)}>
            R and C
          </a>
        </li>
        <li>
          <a href="#ex-7" data-toggle="tab" onClick={()=>setTab(false)}>
            Typography
          </a>
        </li>
        <li>
          <a href="#ex-8" data-toggle="tab" onClick={()=>setTab(false)}>
            Image Demo
          </a>
        </li>
        <li>
          <a href="#ex-9" data-toggle="tab" onClick={()=>setTab(false)}>
           Paneled Info
          </a>
        </li>
      </ul>
       {tab && <PersonsList/>}
      <div className="tab-content">
        <div id="ex-1" className="tab-pane fade">
            <Buttons />
        </div>
        <div id="ex-2" className="tab-pane fade">
        <Form/>
        </div>
        <div id="ex-3" className="tab-pane fade">
            <Lists/>
        </div>
        <div id="ex-4" className="tab-pane fade">
             <Panels/>
        </div>
        <div id="ex-5" className="tab-pane fade">
             <PersonsList/>
        </div>
        <div id="ex-6" className="tab-pane fade">
             <RowsAndColumns/>
        </div>
        <div id="ex-7" className="tab-pane fade">
             <Typography/>
        </div>
        <div id="ex-8" className="tab-pane fade">
             <ImageDemo/>
        </div>
        <div id="ex-9" className="tab-pane fade">
             <PaneledInfo/>
        </div>
      </div>      
    </div>
  );
}

export default DynamicTabs;
