import logo from "./logo.svg";
import "./App.css";

import ConteoState from "./context/ConteoState";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import ProductState from "./context/ProductState";

function App() {
  return (
    <div className="App">
      <ProductState>
        <ConteoState>
          <Header />
          <Main />
        </ConteoState>
      </ProductState>
    </div>
  );
}

export default App;
