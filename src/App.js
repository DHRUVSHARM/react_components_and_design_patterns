import './App.css';
import { SplitScreen } from './components/split-screen';


const LeftSideComp = ({title}) => {
  return(
      <h2 style={{backgroundColor: 'crimson'}}>
        {title}
      </h2>
  )
}

const RightSideComp = ({title}) => {
  return(
    <h2 style={{backgroundColor : 'yellow'}}>
      {title}
    </h2>
  )
}


function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3} >
      <LeftSideComp title={'Left'}></LeftSideComp>
      <RightSideComp title = {'Right'}></RightSideComp>
    </SplitScreen>
  );
}

export default App;
