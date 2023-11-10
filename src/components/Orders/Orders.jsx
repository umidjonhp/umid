import { useContext } from "react";
import styles from "./Orders.module.css"
import OrderGadget from './OrderGadget/OrderGadget'
import GadjetsContext from "../../context/gadjets-context";

function Orders() {
    const ctx = useContext(GadjetsContext);
    return (
        <div className={styles.orderCard}>
            <h2>SHOPPING CART</h2>
            {ctx.items.map((gadget) => (
                <OrderGadget key={gadget.id} gadget={gadget} />
            ))}
            {ctx.items.length !== 0 &&
                <div className={styles.pp}>Total Price: <h3><span>$</span>{ctx.totalPrice}</h3></div>}
            {ctx.items.length === 0 && <span className={styles.info}>There is no product in your cart!
                <br></br> ☹️</span>}
        </div>
    )
}

export default Orders