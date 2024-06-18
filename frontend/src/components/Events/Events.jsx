import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from './EventCard';

const Events = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const eventProducts = allProducts.filter((product) => product.listing === 'Event');

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.section}>
          <div className={styles.heading}>
            <h1>Popular Events</h1>
          </div>
          <div className="w-full grid">
            {eventProducts.length !== 0 ? (
              eventProducts.map((event) => <EventCard key={event._id} data={event} />)
            ) : (
              <h4>No Events available!</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
