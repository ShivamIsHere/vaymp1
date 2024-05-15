
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import OrderCard from "../components/Profile/OrderCard";

import { useDispatch, useSelector } from "react-redux";
import { server } from "../server";
import styles from "../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../redux/actions/user";
import { Country, State } from "country-state-city";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllOrdersOfUser } from "../redux/actions/order";
// import AllOrdersComponent from '../Shop/AllOrders';




const AllOrders = () => {
    
    const { user } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.order);
    const {allProducts,isLoading} = useSelector((state) => state.products);
  
    const dispatch = useDispatch();
  console.log("orders",orders,user)
    useEffect(() => {
      dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch, user._id]);
  
    const columns = [
      { 
        field: "image", 
        headerName: "Product Image", 
        minWidth: 180, 
        flex: 0.7,
        renderCell: (params) => {
          return (
            <Link to={`/product/${params.id}`}>
              <img src={params.value} alt="Product" style={{ width: 50, height: 50 }} />
            </Link>
          );
        }
      },
      { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 ,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.id}`}>
            {params.value}
          </Link>
        );
      }
    },
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
  
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
      {
        field: " ",
        flex: 1,
        minWidth: 150,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/order/${params.id}`}>
                <Button>
                  <AiOutlineArrowRight size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
    ];
  
    const row = [];
  
    orders &&
      orders.forEach((item) => {
        // console.log(item.cart[0].images[0].url)
        console.log()
        row.push({
          id: item._id,
         image: item.cart[0].images[0].url,
         name: item.cart[0].name,
          itemsQty: item.cart.length,
          total: "Rs$" + item.totalPrice,
          status: item.status,
        });
      });
  
    return (
      <div className="">
        {orders &&
          orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
      </div>
    );
  };

  export default AllOrders;
