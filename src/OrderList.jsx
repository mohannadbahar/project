import React, { useState, useEffect } from 'react';

function OrderList({ authToken }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://ecommerce-node4.vercel.app/order', {
          headers: {
            'Authorization': authToken,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const ordersData = await response.json();
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [authToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Order Date: {order.date}</p>
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
