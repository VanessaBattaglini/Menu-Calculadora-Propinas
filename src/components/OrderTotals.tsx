import { useMemo } from "react"
import { OrderItem } from "../types/index"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}
export default function OrderTotals({order}: OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a Pagar: {''}
                    <span className="font-black" >{formatCurrency(subTotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-black" >$0</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-black" >$0</span>
                </p>
            </div>
        
            <button></button>
        </>
    )
}
