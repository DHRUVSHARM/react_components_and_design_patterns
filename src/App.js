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
import { DataSourceWithRender } from './components/data-source-with-render';
import axios from 'axios';
import { DataSource } from './components/data-source';

// fetching method from the server can be extracted out like this
const getDataFromServerAxios = async (url) => {
  const response = await axios.get(url);
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

function App(){
  return(
    <>  
    { /* similar functionality with the render props pattern */ }
      <DataSourceWithRender 
        getData={() => getDataFromServerAxios("users/3")} 
        render = {(resource) => <UserInfo user={resource} />}
      >
      </DataSourceWithRender>

      {/* data source where we can pass the component as well as the resource we want to load */}
      <DataSource
        getData={() => getDataFromLocalStorage("checking_key")} 
        resourceName={"message"}
      >
        <Message></Message>
      </DataSource>
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