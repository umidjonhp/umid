import { useContext } from "react";
import styles from "./OrderGadget.module.css"
import { DeleteIcon } from '../../Icon/DeleteIcon/DeleteIcon'
import GadjetsContext from "../../../context/gadjets-context";

function OrderGadget({ gadget }) {
    const ctx = useContext(GadjetsContext);
    const addGadjet = (id) => {
        ctx.onAddGadget(id);
        ctx.toastify();
    }
    const GetGadjet = (id) => {
        ctx.onGetGadget(id);
        ctx.toastifyGet();
    }
    const deleteGadjet = (id) => {
        ctx.onDeleteGadget(id);
        ctx.toastifyGet();
    }
    return (
        <div className={styles.gadgetCard}>
            <div className={styles.box}>
                <div className={styles.phoneImg}>
                    <img src={gadget.thumbnail} alt="" />
                </div>
                <div className={styles.counter}>
                    {gadget.count !== 1 && <button onClick={() => GetGadjet(gadget.id)} >-</button>}
                    {gadget.count === 1 && <button disabled >-</button>}
                    <span>{gadget.count}</span>
                    <button onClick={() => addGadjet(gadget.id)}>+</button>
                </div>
            </div>
            <div className={styles.title}>
                <span>{gadget.brand}</span>
                <span>{gadget.title}</span>
            </div>
            <div className={styles.price}>
                <h3><span>$</span>{gadget.newPrice}</h3>
                <DeleteIcon clickHandler={() => deleteGadjet(gadget.id)} />
            </div>
        </div>
    )
}

export default OrderGadget