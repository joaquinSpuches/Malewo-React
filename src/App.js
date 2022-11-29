import NavBar from './components/NavBar'
import logo from './img/logo.png'
import './css/App.css'
function App() {

  return (
    <body>
      <header className='header'>
        <img src={logo} />
        <NavBar links={['Home', 'Products','About Us', 'Contact'] } />

      </header>
      <main>
        {/* <ProductList /> */}
      </main>
    </body>
  );
}

export default App;
