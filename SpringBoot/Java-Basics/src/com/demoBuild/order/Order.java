package com.demoBuild.order;

public class Order {

    String orderId;
    String orderType;

    public Order(OrderBuilder builder){
        this.orderId = builder.orderId;
    }

    public String toString(){
        return "Order {"+
                "ID: "+orderId+","+
                "Type: "+orderType+" }";
    }

}
