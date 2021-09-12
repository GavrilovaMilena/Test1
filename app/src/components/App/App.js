import './App.css';
import Header from '../Header/Header'
import Preview from '../Preview/Preview'
import Geography from '../Geography/Geography'
import Portfolio from '../Portfolio/Portfolio'
import Advantages from '../Advantages/Advantages'

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Preview />
        <Geography />
        <Portfolio />
        <Advantages />
      </div>
    </div>
  );
}

export default App;
