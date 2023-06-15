import Books from './components/books';
import Navigation from './components/navigation/navbar';

function App() {
  return (
    <>
      <div className="navbar">{<Navigation/>}</div>
      <div className="container">{<Books/>}</div>
    </>
  );
}

export default App;
