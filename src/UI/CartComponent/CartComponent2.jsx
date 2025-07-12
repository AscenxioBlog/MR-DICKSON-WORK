import React  , { useContext } from 'react'
import { CartContext } from '../../ReusableComponent/CartContext';
import Button from '../../ReusableComponent/Button';
import CartComponent3 from './CartComponent3';
import { TbCurrencyNaira } from "react-icons/tb";


function CartComponent2() {
    const { cart, removeFromCart,decreaseQuantity, increaseQuantity } = useContext(CartContext);
    console.log(cart)

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    console.log(cartTotal);

  return (
    <div className=' p-[10px] lg:p-[20px]'>
    {cart.length === 0 ? (
        <p className='font-custom font-bold text-3xl dark:text-black'>Your cart is empty</p>
    ) : (
        <table className="cart-table dark:text-black border-[1px] p-[10px]  w-full border-black"  >
            <thead>
                <tr>
                    <th className='border-black border-[1px]'>Image</th>
                    <th className='border-black border-[1px]'>Product Name</th>
                    <th className='border-black border-[1px]'>Price</th>
                    <th className='border-black border-[1px]'>Quantity</th>
                    <th className='border-black border-[1px]'>Total</th>
                    <th className='border-black border-[1px]'>Remove</th>
                </tr>
            </thead>
            <tbody className=''>
                {cart.map((item) => (
                    <tr key={item.id}>
                        <td className='border-black border-[1px] flex justify-center w-full '>
                            <img src={item?.image} alt={item.productName} style={{ width: "70px", height: "70px" }} />
                        </td>
                        <td className='border-black border-[1px] text-center font-custom font-medium capitalize '>{item.name}</td>
                        <td className='border-black border-[1px] font-custom text-center  justify-center items-center  '><span className=' flex justify-center items-center'><TbCurrencyNaira />{item.price}</span></td>
                        <td className='flex justify-center border-black text-[1.rem] font-bold border-[1px]'> 
                        <Button
                            onClick={() => decreaseQuantity(item)}
                            disabled={item.quantity === 1}
                            label='-'
                            className='font-custom font-semibold text-[1.4rem]'
                            />

                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>

                            <Button
                            className='font-custom font-semibold text-[1.4rem]'
                            label='+'
                            onClick={() => increaseQuantity(item)}
                            />

                        </td>
                       
                        <td className='border-black border-[1px] text-center font-custom font-semibold '><span className=' flex justify-center items-center'><TbCurrencyNaira />{(item.price * item.quantity).toFixed(2)}</span></td>
                        
                        <td className='border-black border-[1px] text-center'>
                            <Button
                            className='text-red-500'
                            label='X'
                            onClick={() => removeFromCart(item)}/>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
    <CartComponent3 cart={cart} cartTotal={cartTotal} />
</div>
);
}
  

  


export default CartComponent2