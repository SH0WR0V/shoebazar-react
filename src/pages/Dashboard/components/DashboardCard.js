import { Link } from "react-router-dom"

export const DashboardCard = ({ order }) => {
    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border rounded-lg shadow dark:border-slate-700">
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span>Order Id: {order.id}</span>
                <span>Total Paid: ${order.amount_paid}</span>
            </div>
            {order.products.map((product) => (
                <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                    <div className="flex">
                        <Link to={`/products/${product.id}`}>
                            <img className="w-32 rounded" src={product.image_local} alt={product.name} />
                        </Link>
                        <div className="pl-5">
                            <Link to={`/products/${product.id}`}>
                                <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                            </Link>
                            <div className="text-sm m-2 dark:text-slate-200">
                                <span>Per item price: ${product.price}</span>
                            </div>
                            <div className="text-sm m-2 dark:text-slate-200">
                                <span>Quantity: {product.quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }

        </div >
    )
}
