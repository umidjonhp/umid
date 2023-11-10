import { useContext } from "react";
import styles from "./Orders.module.css"
import OrderGadget from './OrderGadget/OrderGadget'
import GadjetsContext from "../../context/gadjets-context";

function Orders() {
    const ctx = useContext(GadjetsContext);
    return (
        <div className={styles.orderCard}>
            <h2>SHOPPING CART</h2>

            <OrderGadget />
            <p>Total Price: <h3><span>$</span>499</h3></p>
        </div>
    )
}

export default Orders