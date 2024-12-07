'use client';

import useAuth from '@/hooks/useAuth';
import api from '@/lib/userNextAxios';
import Actions from '@/store/actions';
import { StoreContext } from '@/store/store-context';
import { useRouter } from 'next/navigation';
import { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function AddToCart({ item }) {
  const { token } = useAuth();
  const [_, dispatch] = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const router = useRouter();

  const refreshPage = () => router.refresh();

  const checkCartStatus = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get(
        `/api/cart/get?registrationStartupId=${item.id}`,
      );
      setIsInCart(data?.data);
    } catch (error) {
      setIsInCart(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [item]);

  async function addToCartHandler() {
    try {
      if (loading) return;
      setLoading(true);
      const { data, status } = await api.put('/api/cart/update', {
        registerStartupIds: [item.id],
      });
      if (status === 200) {
        checkCartStatus();
        setIsInCart(true);
        toast.success(data.message);
        dispatch({ type: Actions.CART_UPDATE_COUNT });
      }
    } catch (error) {
      console.log('AddToCartHandler ~ error:', error);
      toast.error('Failed to add to cart');
    } finally {
      setLoading(false);
      refreshPage();
    }
  }

  async function removeFromCartHandler() {
    try {
      setLoading(true);
      const { data, status } = await api.put('/api/cart/delete', {
        registerStartupIds: [item.id],
      });
      if (status === 200) {
        checkCartStatus();
        setIsInCart(false);
        toast.success(data.message);
        dispatch({ type: Actions.CART_UPDATE_COUNT });
      }
    } catch (error) {
      toast.error('Failed to remove item from cart');
    } finally {
      setLoading(false);
      refreshPage();
    }
  }

  useEffect(() => {
    if (item) {
      checkCartStatus();
    }
  }, [item, checkCartStatus]);

  if (!token) {
    return (
      <button disabled className="btn-primary">
        {loading ? (
          <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
        ) : (
          'Add to Cart'
        )}
      </button>
    );
  }

  return (
    <>
      {!isInCart ? (
        <button
          onClick={addToCartHandler}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
          ) : (
            'Add to Cart'
          )}
        </button>
      ) : (
        <button
          onClick={removeFromCartHandler}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
          ) : (
            ' Remove from cart'
          )}
        </button>
      )}
    </>
  );
}

export default AddToCart;
