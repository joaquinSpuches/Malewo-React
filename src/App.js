import NavBar from "./components/NavBar";
import LogIn from './components/LogIn';
import logo from './img/logo.jpg'
import './css/App.css'
function App() {

  return (
    <div>
      <header className='header'>
        <a className='noHover' href='/'><img src={logo} /></a>
        <NavBar links={['Home', 'Products','About Us', 'Contact'] }  />
        <LogIn />

      </header>
      <main>
        {/* <ProductList /> */}
      </main>
    </div>
  );
}

export default App;
