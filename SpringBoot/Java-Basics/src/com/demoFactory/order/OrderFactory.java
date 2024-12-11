package com.demoFactory.order;

public class OrderFactory {

    public OrderAbstract getOrderType(String orderType){

        if (orderType==null){
            return null;
        }
        else if (orderType.equalsIgnoreCase("ONLINE")) {
            return new OnlineOrder();
        }
        else if (orderType.equalsIgnoreCase("INSTORE")) {
            return new InStoreOrder();
        }

        return null;
    }

}
