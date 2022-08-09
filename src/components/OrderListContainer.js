import React, { useState } from 'react'
import BackDrop from './BackDrop'
import OrderListButton from './OrderListContents/OrderListButton'
import OrderListSidebar from './OrderListContents/OrderListSidebar'

function OrderListContainer() {

  const [orderListVisibility, setOrderListVisibility] = useState(false)

  return (
    <div>
      <OrderListButton setOrderListVisibility={setOrderListVisibility} />

      <BackDrop handleClick={() => setOrderListVisibility(false)} toggler={orderListVisibility}>
        <OrderListSidebar toggler={orderListVisibility} />
      </BackDrop>

    </div>
  )
}

export default OrderListContainer