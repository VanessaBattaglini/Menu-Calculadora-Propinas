import { useMemo, useCallback} from "react"
import { OrderItem } from "../types/index"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}
export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useCallback(() => subTotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subTotalAmount + tipAmount(), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a Pagar: {''}
                    <span className="font-black" >{formatCurrency(subTotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-black" >{formatCurrency(tipAmount())}</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-black" >{formatCurrency(totalAmount)}</span>
                </p>
            </div>
        
            <button 
                className="w-full bg-blue-700 text-white p-3 font-black uppercase mt-5 disabled:opacity-20"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
