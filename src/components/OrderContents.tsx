import type { MenuItems, OrderItem } from "../types/index";
import { formatCurrency } from '../helpers/index';

type OrderItemProps = {
    order: OrderItem[];
    removeItem: (id: MenuItems['id']) => void;
};

export default function OrderContents({ order, removeItem }: OrderItemProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
                {order.map((item) => 
                    <div 
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        key={item.id}>
                            <div className="">
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} * {formatCurrency(item.quantity * item.price)}
                                </p>
                            </div>
                        <button 
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() =>removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                )}
        </div>
            <div className="space-y-3 mt-5"></div>
        </div>
    );
}
