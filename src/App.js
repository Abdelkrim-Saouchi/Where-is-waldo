import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
