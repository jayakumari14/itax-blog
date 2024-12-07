import Image from 'next/image';
import { formatINRCurrency } from '@/utils/utilityFunctions';
import ButtonLink from '../dashboard/GSTR/Button';
import PayNowHandler from './PayNowHandler';

export default function Checkout({ cartItems }) {
  if (!cartItems || cartItems.length < 1) {
    return (
      <div className="min-h-screen flex justify-center">
        <div className="flex flex-col items-center gap-2 mt-[100px]">
          <Image
            width={300}
            height={300}
            src={'/cart.svg'}
            alt="Cart Images"
            className="xl:w-[300px] md:w-[200px]"
          />
          Add items in your cart to checkout with payment.
          <ButtonLink title={'Add Some Services'} linkTo={'/apis/all_apis'} />
        </div>
      </div>
    );
  }

  const gstPercentage = 0.18;
  const itemCount = cartItems.length || 0;
  const subTotal = cartItems.reduce((total, item) => item.price + total, 0);
  const total = subTotal + subTotal * gstPercentage;

  return (
    <>
      <div className="min-h-screen text-slate-800 flex flex-col items-center gap-5 my-10 w-11/12 m-auto ">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">
            Checkout{' '}
            <span className="text-xl">
              ({itemCount} {itemCount > 1 ? `items` : 'item'})
            </span>
          </h1>
        </div>

        <div className="flex justify-center min-w-[50%]">
          <div className="flex bg-[#f0f0f1] min-w-[75%] flex-col space-y-4 md:space-y-8 py-5 px-3 my-3 sm:px-8 sm:py-8 rounded items-start">
            <h2 className="text-2xl font-medium">Order summary</h2>
            <div className="justify-self-end w-full rounded grid grid-cols-2 h-fit text-2xl">
              <span className="text-left py-2">Sub Total: </span>
              <span className="font-semibold text-right py-2">
                {formatINRCurrency(subTotal)}
              </span>
              <span className="text-left py-2">GST (18%): </span>
              <span className="font-semibold text-right py-2">
                {formatINRCurrency(+subTotal * gstPercentage)}
              </span>
              <span className="col-span-2 py-2 border-t-2 border-zinc-400 mt-3 text-right font-semibold text-2xl">
                {formatINRCurrency(total)}
              </span>
            </div>

            <div className="flex justify-end w-full">
              <PayNowHandler
                cartItems={cartItems}
                totalAmount={total.toString()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
