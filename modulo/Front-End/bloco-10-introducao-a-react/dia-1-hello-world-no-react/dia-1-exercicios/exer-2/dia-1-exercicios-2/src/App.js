import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Content />
      </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
