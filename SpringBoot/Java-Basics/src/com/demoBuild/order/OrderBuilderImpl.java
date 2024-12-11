package com.demoBuild.order;

import com.demoFactory.order.OrderAbstract;

public class OrderBuilderImpl {

    public static void main(String args[]) throws OrderException {

        try {
            Order order = new OrderBuilder("Ord1002")
               //     .setOrderType("")
                    .build();
            System.out.println(order);
        } catch (OrderException e) {
            System.out.println(e.getMessage());
        }

    }
}
