import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';

function App() {
  return (
    <div>
      <Navbar />
      <Recipes /> 
      <Footer />
    </div>
  );
}

export default App;
