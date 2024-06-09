import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { getAllOrdersOfUser } from "../redux/actions/order";
import OrderCard from "../components/Profile/OrderCard";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders, isLoading } = useSelector((state) => state.order);

  const dispatch = useDispatch();

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
      },
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
      renderCell: (params) => {
        return <Link to={`/product/${params.id}`}>{params.value}</Link>;
      },
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
          <Link to={`/user/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        image: item.cart[0].images[0].url,
        name: item.cart[0].name,
        itemsQty: item.cart.length,
        total: "Rs" + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="">
          {orders &&
            orders.map((order) => <OrderCard key={order._id} order={order} />)}
        </div>
      )}
      <Footer />
    </>
  );
};

export default AllOrders;
