import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes'; // Corregido el nombre de la importación

function App() {
  return (
    <div>
      <Navbar />
      <Recipes /> {/* Utiliza Recipes en lugar de RecipeApp */}
      <Footer />
    </div>
  );
}

export default App;
