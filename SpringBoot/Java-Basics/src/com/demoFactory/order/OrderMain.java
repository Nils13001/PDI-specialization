package com.demoFactory.order;

public class OrderMain {

    public static void main(String[] args) {
        OrderFactory orderFactory = new OrderFactory();

        OrderAbstract o1 = orderFactory.getOrderType("ONLINE");
        OrderAbstract o2 = orderFactory.getOrderType("INSTORE");

        o1.processOrder();
        o2.processOrder();


    }



}
