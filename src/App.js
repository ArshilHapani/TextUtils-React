import './StyleSheets/Sample';
import './Sample.css';
import image from './kakashi.jpeg'
// ! React app contains props and States.
// * Instead of for we use htmlFor and react is case sensitive.
// ! We can return upto one HTML element in React in this case we have div if you want to do so then you should use jsk Fragement
// * Here are some major changes like instead of html class we use className KeyWord as class is reserved keyword in react 
let Name = "<h1>Arshil</h1>  "; //? Things is written inside {} in jsx is countered as JavaScript
// //* Not rendered as HTML for safety purpose
let obj = {
  name: "Arshil",
  age: 30,
}
const element = (
  <h1 className='Heading'>Hello <i>Italic  and all mighty <br />{obj.name} with age <br />{obj.age}</i> </h1>
)

function App1() {
  return (
    <>
      <header className='Header'>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <div className="blank">
        {`Hello  ${Name} `} <br />age {obj.age} <br /><br /><br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a error repellat inventore laboriosam, dolor repellendus doloremque culpa, voluptates soluta, in dolorem quibusdam recusandae id ut reprehenderit. Reiciendis, aliquid nulla.
      </div>
      <img src={image} alt="Kakashi" />
      <p>{element}</p>
    </>
  ); //* Here the role of the parenthesis is to prevent automatic semicoloms which is provided by the js engine in browser leads to ruin of the code
  //? things inside return func everything is JSX  !Which is HTML in the form of jsor vice versa
}
export default App1;