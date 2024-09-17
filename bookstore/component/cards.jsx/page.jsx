import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { API } from '../../utils/api';
import axios from "axios"
import { useStateContext } from '../../context/stateContext';
import { useRouter } from 'next/navigation';

const Cards = ({ item }) => {

  const { user } = useStateContext()
  const router = useRouter()

  const stripeKey = "pk_test_51O6bQ9GaFip5Wq2G5iswiMNb4mXHI4dPCEjaHDI55WYcFsvMXAp0FyswpQ5u6qSr3tvTDjsFPlXZ8Giu6qOaXGCU00rXVtAm3p"
  const stripePromise = loadStripe(stripeKey)

  const handleStripe = async () => {

    if (!user) {
      console.log("no user");
      router.push("/login");
      return;
    } else {
      const itemPrice = item.price;
      const itemName = item.name;
      const stripe = await stripePromise;
      
      console.log("user");
      try {
        // Send request to your backend to create a Stripe session
        const response = await axios.post("/api/stripe", {
          itemPrice,
          itemName,
        }
          //   , {
          //     headers: {
          //       Authorization: `Bearer ${user?.token}`,
          //     },
          //   }
        );

        if (response.status === 200) {
          const { sessionId } = response.data;
          await stripe.redirectToCheckout({ sessionId });
        } else {
          console.error("Error:", response.data);
        }
      } catch (error) {
        console.error("Axios Error:", error);
      }

    }

  };

  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="Books"
            className="w-[100%] h-[100%] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div onClick={handleStripe}
              className="cursor-pointer px-2 py-1 border-[2px] rounded-lg hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
