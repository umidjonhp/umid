import { useContext } from "react";
import styles from "./Navbar.module.css"
import { LogoIcon } from '../Icon/LogoIcon/LogoIcon'
import { BagIcon } from '../Icon/BagIcon/BagIcon'
import GadjetsContext from '../../context/gadjets-context';
import { ToastContainer } from "react-toastify";

function Navbar() {
  const ctx = useContext(GadjetsContext);
  const openOrder = () => ctx.toggleOrderSection()
  const closeOrder = () => ctx.toggleOrderSection()
  return (
    <nav >
      <div className="s">
        <ToastContainer
          style={
            {
              width: "230px",
              fontSize: "1.5rem",
              fontWeight: "700"
            }}
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className={styles.nav}>
          <LogoIcon clickHandler={closeOrder} />
          <BagIcon clickHandler={openOrder} />
          <span>{ctx.items.length}</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar