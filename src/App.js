import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CreateDiv></CreateDiv> */}

        <Dynamic header = "It's the header passed by attribute" paragraph = "It's a paragraph passed by attribute"></Dynamic>
      </header>
    </div>
  );
}
export default App;


//Add some element and styles with JSX

/* const CreateDiv = () => {
  return (
    <div>
      <h1>It's a header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, in sit! Aliquid exercitationem amet consequuntur voluptates blanditiis natus iure quia, dolore aut nihil eaque? Inventore in magnam tenetur id nisi veritatis iste rem eveniet cum? Distinctio excepturi fugiat cupiditate atque, ea unde sint ex odit nostrum sequi! Ducimus, animi pariatur.</p>
    </div>
  )
} */


//Pass dynamic data to components, props with passing attribute while calling the function

const Dynamic = (props) => {

  return (
    <div>
      <h1 style={{color: 'red'}}>{ props.header }</h1>
      <p style={{color: 'green', backgroundColor: 'hotpink', padding: '20px'}}>{ props.paragraph }</p>
    </div>
  )
}