import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './components/Main/Main'

function App() {
  const name = 'Leo'
  const lastname = 'Bravo'
  return (
    <div className="App">
      <Header nombre={name} />
      <Main />
      <Footer apellido={lastname} />
    </div>
  );
}

export default App;
