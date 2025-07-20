import './App.css';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/Regular';
import { authors } from './data/authors';
import { books } from './data/books';



function App(){
  return(
    <>  
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}></RegularList>
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}></NumberedList>
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem}></RegularList>
      <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}></NumberedList>
    </>
  );
};


export default App;


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