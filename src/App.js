import logo from './logo.svg';
import './App.css';

function App() {
  const myArr = [
    { name: 'laptop', price: 153000 },
    { name: 'phone', price: 93000 },
    { name: 'watch', price: 33000 },
    { name: 'tablet', price: 5000 }
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <CreateDiv></CreateDiv> */}

        {/* <Dynamic header = "It's the header passed by attribute" paragraph = "It's a paragraph passed by attribute"></Dynamic> */}

        {/* <CreateComp name={myObj.name} age={myObj.age} job={ myObj.job }></CreateComp> */}

        {
          myArr.map(product => {
            return (
              <ArrOfObject name={product.name} price={ product.price }></ArrOfObject>
            )
        },{})
        }
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

/* const Dynamic = (props) => {

  return (
    <div>
      <h1 style={{color: 'red'}}>{ props.header }</h1>
      <p style={{color: 'green', backgroundColor: 'hotpink', padding: '20px'}}>{ props.paragraph }</p>
    </div>
  )
} */


//Pass dynamic data to components with object

/* const myObj = {
  name: 'Ayon',
  age: 24,
  job: 'Programming'
}
const CreateComp = props => {
  return (
    <div>
      <h1>Name: { props.name }</h1>
      <h3>Age: { props.age }</h3>
      <h3>Profession: { props.job }</h3>
    </div>
  )
} */


//Pass dynamic data to components with array of object

const ArrOfObject = props => {
  return (
    <div style={{border: '2px solid white', padding: '10px 30px', margin: '20px'}}>
      <h3>Product Name: { props.name }</h3>
      <p>Product Price: { props.price }</p>
    </div>
  )
}