package com.demoBuild.order;

//import com.demoFactory.order.Order;
import com.demoFactory.order.OrderAbstract;

public class OrderBuilder {

    String orderId;
    String orderType;

    public OrderBuilder(String orderId){
            this.orderId = orderId;
    }

    public OrderBuilder setOrderType(String orderType) {
//        if(orderType == null || orderType.trim().isEmpty()){
////            System.out.println("Hi");
//            throw new OrderException("Order Type is required");
//        }
        this.orderType = orderType;
        return this;
    }

    public Order build() throws OrderException{
        if(orderType == null || orderType.trim().isEmpty()){
//            System.out.println("Hi");
            throw new OrderException("Order Type is required");
        }
        return new Order(this);
    }

}

//public class OrderBuilder {
//
//    public String orderId;
//
//    public OrderBuilder(String orderId){
//
//        this.orderId = orderId;
//    }
//
//    public OrderAbstract build(){
//
//        return new OrderAbstract(this) {
//            @Override
//            public void processOrder() {
//                System.out.println(this);
//            }
//        };
//    }





