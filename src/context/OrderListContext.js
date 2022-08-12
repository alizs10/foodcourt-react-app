import React from 'react';

const OrderListContext = React.createContext({
    items: [],
    setItems: () => { },
    handleAddToList: () => {}
});

export default OrderListContext;