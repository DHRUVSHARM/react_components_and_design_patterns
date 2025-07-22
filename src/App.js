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


function App(){
  return(
    <>  
      <ResourceLoader resourceUrl={"/users/1"} resourceName={"user"}>
        <UserInfo></UserInfo>
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/books/2"} resourceName={"book"}>
        <BookInfo></BookInfo>
      </ResourceLoader>
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