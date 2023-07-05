import './App.css';
import GlobalStyle from './GlobalStyle';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
