import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AiOutlineArrowRight } from "react-icons/ai";

const OrderCard = ({ order }) => {
  const { _id, cart, status, totalPrice } = order;
  const { images, name } = cart[0];

  return (
    <Link to={`/user/order/${_id}`} className="">
    <div className="bg-white ml-2 p-4 rounded shadow flex flex-col sm:flex-row items-start gap-4">
      <div className="flex items-start flex-grow">
        <Link to={`/user/order/${_id}`} className="flex-none w-34">
          <img src={images[0].url} alt={name} className="w-[80px] h-[80px] object-cover rounded" />
        </Link>
        <div className="flex flex-col justify-between flex-grow ml-4">
          <div className="mb-2">
            <Link to={`/user/order/${_id}`} className="text-blue-500 hover:underline">
              {name}
            </Link>
          </div>
          <div className="text-sm text-gray-600">Status: {status}</div>
          <div className="text-sm text-gray-600">Total Price: Rs {totalPrice}</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse items-center sm:mt-auto">
        <Link to={`/user/order/${_id}`} className="">
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<AiOutlineArrowRight />}
            className="mt-2 sm:mt-0" // Adjusted margin for small screens
          >
            View Order
          </Button>
        </Link>
      </div>
    </div>
    </Link>
  );
};

export default OrderCard;