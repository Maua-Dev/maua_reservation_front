import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import HomeContextProvider from "./context/HomeContext";

function App() {
  return (
    <>
      <BrowserRouter>
          <HomeContextProvider>
          <AppRouter />
          </HomeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
