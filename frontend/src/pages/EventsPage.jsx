import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);

  // Filter products to include only those with listing === "Event"
  const eventProducts = allProducts.filter((product) => product.listing === "Event");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {eventProducts.length > 0 ? (
            eventProducts.map((product, index) => (
              <EventCard key={index} active={true} data={product} />
            ))
          ) : (
            <h4>No Events available!</h4>
          )}
        </div>
      )}
    </>
  );
};

export default EventsPage;
