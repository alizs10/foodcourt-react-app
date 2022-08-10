import React from 'react';

const OrderListContext = React.createContext({
    items: [],
    setItems: () => { }
});

export default OrderListContext;