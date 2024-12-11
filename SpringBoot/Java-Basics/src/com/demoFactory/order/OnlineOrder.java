package com.demoFactory.order;

public class OnlineOrder extends OrderAbstract{


    @Override
    public void processOrder() {
        System.out.println("Online Order");
    }
}
