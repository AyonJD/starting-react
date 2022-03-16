import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateDiv></CreateDiv>
      </header>
    </div>
  );
}
export default App;

const CreateDiv = () => {
  return (
    <div>
      <h1>It's a header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in sit! Aliquid exercitationem amet consequuntur voluptates blanditiis natus iure quia, dolore aut nihil eaque? Inventore in magnam tenetur id nisi veritatis iste rem eveniet cum? Distinctio excepturi fugiat cupiditate atque, ea unde sint ex odit nostrum sequi! Ducimus, animi pariatur.</p>
    </div>
  )
}