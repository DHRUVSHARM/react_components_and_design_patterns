import './App.css';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { BookInfo } from './components/book-info';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { CurrentUserLoader } from './components/current-user-loader';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/Regular';
import { ResourceLoader } from './components/resource-loader';
import { UserInfo } from './components/user-info';
import { UserLoader } from './components/user-loader';
import { authors } from './data/authors';
import { books } from './data/books';
import { Modal } from './Modal'; 
import { DataSource } from './components/data-source';
import { UncontrolledForm } from './components/uncontrolled-form';
import { ControlledForm } from './components/controlled-form';
import OrgChartTree from './components/demo-tree';
import { SplitScreenVertical, SvgCenteredWrapper } from './components/split-screen';
import { ControlledModal } from './components/controlled-modal';
import { useState } from 'react';

// fetching method from the server can be extracted out like this
/*
const getDataFromServerAxios = async (url) => {
  const response = await axios.get(url
  );
  return response.data;              
}

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
}


const Message = ({message}) => {
  return(
    <h1>{message}</h1>
  )
}
*/





function App() {
    const [shouldDisplayModal, setShouldDisplayModal] = useState(false);

    return (
        <>
          <ControlledModal shouldDisplay={shouldDisplayModal} onClose={() => setShouldDisplayModal(false)} >
            <h1>This is a controlled modal</h1>
            <p>You can control its visibility from the parent component.</p>
          </ControlledModal>

          <button onClick={() => setShouldDisplayModal(!shouldDisplayModal)}>{shouldDisplayModal ? 'Hide Modal' : 'Show Modal'}</button>
        </>
    );
};


export default App;

/*
function App(){
  return(
    <>  
      <UserLoader userId={"3"}>
         <UserInfo></UserInfo>
      </UserLoader>
      <UserLoader userId={"2"}>
         <UserInfo></UserInfo>
      </UserLoader>
      <UserLoader userId={"1"}>
         <UserInfo></UserInfo>
      </UserLoader>
       
    </>
  );
};


export default App;
*/

/*
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
*/