import { useContext } from "react";
import styles from "./Navbar.module.css"
import { LogoIcon } from '../Icon/LogoIcon/LogoIcon'
import { BagIcon } from '../Icon/BagIcon/BagIcon'
import GadjetsContext from '../../context/gadjets-context';

function Navbar() {
  const ctx = useContext(GadjetsContext);
  const openOrder = () => ctx.toggleOrderSection()
  const closeOrder = () => ctx.toggleOrderSection()
  return (
    <nav >
      <div className="s">
        <div className={styles.nav}>
          <LogoIcon clickHandler={closeOrder}/>
          <BagIcon clickHandler={openOrder}/>
          <span>{ctx.items.length}</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar