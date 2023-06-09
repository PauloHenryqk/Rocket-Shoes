import './App.css';
import Nav from "./components/nav/index"
import Main from "./components/main/index"
import Price from "./components/preco/index"
import Footer from "./components/footer/index"

function App() {
  return (
    <>
        <div id="main">
           <Nav />
           <Price />
           <Main />
        </div>
        <Footer />
    </>
  );
}

export default App;
