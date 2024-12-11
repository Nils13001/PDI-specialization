package com.demoFactory.order;

public class InStoreOrder extends OrderAbstract{


    @Override
    public void processOrder() {
        this.setOrderId("InS111");
        System.out.println("In Store Order with id " + this.getOrderId());
    }
}
