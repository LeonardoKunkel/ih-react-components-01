import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const name = 'Leo'
  const lastname = 'Bravo'
  return (
    <div className="App">
      <Header nombre={name} />
      <Footer apellido={lastname} />
    </div>
  );
}

export default App;
