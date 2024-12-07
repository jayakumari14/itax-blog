// 'use client';

// import api from '@/lib/userNextAxios';
// import Actions from '@/store/actions';
// import { StoreContext } from '@/store/store-context';
// import { useRouter } from 'next/navigation';
// import { useState, useContext } from 'react';
// import { toast } from 'react-toastify';

// function AddToCart({ item, alreadyInCart }) {
//   const [loading, setLoading] = useState(false);
//   const [_, dispatch] = useContext(StoreContext);
//   const router = useRouter();

//   const refreshPage = () => router.refresh();

//   async function addToCartHandler() {
//     try {
//       setLoading(true);
//       const { data, status } = await api.put('/api/cart/update', {
//         serviceIds: [item.id],
//       });
//       if (status === 200) {
//         dispatch({ type: Actions.CART_UPDATE_COUNT });
//         toast.success(data.message);
//       }
//     } catch (error) {
//       console.log('AddToCartHandler ~ error:', error);
//       toast.error('Failed to add to cart');
//     } finally {
//       setLoading(false);
//       refreshPage();
//     }
//   }
//   async function removeFromCartHandler() {
//     try {
//       setLoading(true);
//       const { data, status } = await api.put('/api/cart/delete', {
//         serviceIds: [item.id],
//       });
//       if (status === 200) {
//         dispatch({ type: Actions.CART_UPDATE_COUNT });
//         toast.success(data.message);
//       }
//     } catch (error) {
//       console.log('Error while removing item ', error);
//       toast.error('Failed to remove item from cart');
//     } finally {
//       setLoading(false);
//       refreshPage();
//     }
//   }

//   console.log(alreadyInCart);

//   return (
//     <>
//       {!alreadyInCart ? (
//         <button
//           onClick={addToCartHandler}
//           disabled={loading}
//           className="btn-primary"
//         >
//           {loading ? (
//             <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
//           ) : (
//             'Add to Cart'
//           )}
//         </button>
//       ) : (
//         <button
//           onClick={removeFromCartHandler}
//           disabled={loading}
//           className="btn-primary"
//         >
//           {loading ? (
//             <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
//           ) : (
//             ' Remove from cart sdfds'
//           )}
//         </button>
//       )}
//     </>
//   );
// }

// export default AddToCart;
