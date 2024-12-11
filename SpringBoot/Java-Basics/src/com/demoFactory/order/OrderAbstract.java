package com.demoFactory.order;

import com.demoBuild.order.OrderBuilder;

public abstract class OrderAbstract {

    String orderId;

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public abstract void processOrder();

}
