import './App.css';
import FuncComp2 from './Components/FunComp2';
import FunComp1 from './Components/FunComp1';
import FunComp3 from './Components/FunComp3';
import RWDEx02 from './Components/RWD/Typography';
import RWDEx03 from './Components/RWD/Buttons';
import RWDEx04 from './Components/RWD/Lists';
import Panels from './Components/RWD/Panels';
import Form from './Components/RWD/Form';
import PersonsList from './Components/RWD/PersonsList';
import DynamicTabs from './Components/RWD/DynamicTabs';
import ClassComp1 from './Components/ClassComponents/ClassComp1';
import ClassComp2 from './Components/ClassComponents/ClassComp2';
import ClassComp3 from './Components/ClassComponents/ClassComp3';

function App() {
 
  return (
    <div className="container">
      <div className="row">
      <h1>Root Component</h1>       
      </div>
      <div className="row">
        {/* <RWDEx02/> */}
        {/* <RWDEx03/> */}
        {/* <RWDEx04/> */}
        {/* <Panels/> */}
        {/* <Form/> */}
        {/* <PersonsList/> */}
        <DynamicTabs/>
        {/* <ClassComp1/> */}
        {/* <ClassComp2/> */}
        {/* <ClassComp3 msg="Hello class comp"/> */}
      </div>
    </div>
  );
}

export default App;
