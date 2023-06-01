import './App.sass';
import Footer from './Header-Footer/Footer';
import Header from './Header-Footer/Header';
import MyWorks from './MyWorks/MyWorks';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
