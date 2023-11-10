import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import GadjetsContext from "./context/gadjets-context";
import Orders from "./components/Orders/Orders";


function App() {
  const ctx = useContext(GadjetsContext)

  return (
    <>
      <Navbar />
      <div className="container">
        {ctx.orderSection && <Orders />}
        {!ctx.orderSection && <Header />}
        {!ctx.orderSection && <Products />}
      </div>

    </>
  )
}

export default App