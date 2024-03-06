import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const total = cartItems.reduce((acc, curr) => acc + (curr.price ? curr.price :curr.defautlPrice), 0);
    return (
        <>
            {cartItems.length ? (
                <div className="w-6/12 mx-auto mt-8">
                    {cartItems.map((item, index) => (
                        <CartItems key={index} resData = {item} />
                    ))}
                    <div className="flex justify-between p-2 my-2">
                        <h2 className="text-md font-semibold"> Total : </h2>
                        <h2 className="text-md font-semibold"> &#8377; {total /100}</h2>
                    </div>
                </div>

            ) : (
                    <div className="flex flex-col justify-center items-center mt-12">
                        <div className="bg-cart w-[271px] h-[256px] bg-cover bg-no-repeat"></div>
                        <div className="mt-6 font-semibold text-xl text-gray-600">Your Cart is Empty</div>
                        <div className="mt-2 text-sm">You can go to the home page to view more restaurants</div>
                        <Link to={'/'} className="bg-custom-default font-semibold text-white p-2 inline-block mt-6">SEE RESTAURANTS NEAR YOU</Link>
                    </div>
            )}
        </>
    );
}
export default Cart;

