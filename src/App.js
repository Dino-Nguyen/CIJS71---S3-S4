import AddItem from "./AddListItem";
import ToDoListItem from "./ToDoList";
import Footer from "./Footer";
import "./App.css"
function App() {
  return (
    <div className="App">
      <AddItem/>
     <ToDoListItem item="Jogging"/>
     <ToDoListItem item="Buy some milk"/>
     <ToDoListItem item="Clean up bedroom"/>
     <ToDoListItem item="Learn React"/>
     <ToDoListItem item="Doing Exercises"/>
     <Footer/>
    </div>
  );
}

export default App;
