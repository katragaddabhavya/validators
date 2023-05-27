let custname="gary";
let custemailid="gary@123.com";
let phno=14123123435;
let address="20,marbledrive,eville";
let noOfPizzaOrdered=5;
let pizzaSize=2;
let pizzaprice;
let noOfGarlicBread=5;
let GarlicBreadPrice;
let noOfBeverage=10;
let BeveragePrice;
let discount=5;

// define function displayCustomerDetails() to display the details of customer passed as parameters.
 function displayCustomerDetails(){
     console.log("custname " +custname);
     console.log("custemailid "+custemailid);
     console.log("phno "+phno);
     console.log("address "+address);
 }

// define funciton displayMenu() to raise an alert that displays the menu with 
function displayMenu(){
    console.log("select the items to order");
   console.log("1:Pizza");
     console.log("Price of one regular pizza :$9.99");
      console.log("Price of one medium pizza: $11.99"); 
       console.log("Price of one large pizza: $9.99");
   console.log("2: Garlic Bread");
       console.log("Price of one Garlic Bread: $5.99");
    console.log("3: Beverages");
       console.log("Price of one Beverage: $1.99");
}
// category, item names and price

 

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
function getPriceOfPizzaBasedOnSize(pizzaSize){
   let priceOfPizza=0;
switch(pizzaSize){
    case 1:
        priceOfPizza = 9.99;
        break;
    case 2:
        priceOfPizza = 11.99;
        break;
    case 3: 
        priceOfPizza = 13.99;
        break;
    default:    
        alert('Invalid size, Enter 1,2 or 3');
        priceOfPizza = 0;
        break;
   }
    return priceOfPizza;
}
// size passed as parameter.


// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){
           return 5.99;
}

// define function getPriceOfBeverage() to return price of beverage as 1.99.
 function getPriceOfBeverage(){
     return 1.99;
}

// define function calculatePrice() to return cost of items ordered for the 
function calculatepizzaPrice(noOfPizzaOrdered,priceOfPizza){
    return (noOfPizzaOrdered*priceOfPizza);
}
function calculategarlicbreadPrice(noOfGarlicBread,priceofgarlicbread){
     return (noOfGarlicBread*priceofgarlicbread);
}
function calculatebeveragePrice(noOfBeverage,priceOfbeverage){
    return (noOfBeverage*priceOfbeverage);
}
// no of items and price passed as parameters.
 

// define function calculateTotalBill() to return total bill amount from the 
function calculateTotalBill(pizzaprice,garlicbreadprice,beveragePrice){
    return (pizzaprice+garlicbreadprice+beveragePrice);
}
// total price of pizza, garlic bread and beverages ordered 
// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
function calculateDiscountAndReturnBillAmount(totalbill,discount){
    if(totalbill>50){
    return (totalbill-(totalbill*discount/100));
    }
    return totalbill;
}
// which will be calculated only if total bill is more than 50  
 
// define function displayOrderDetails() to print the order details
function displayOrderDetails(noOfPizzaOrdered, noOfGarlicBread, noOfBeverage,totalbill,discountbill) {
    console.log(`the no of pizza ordered :${noOfPizzaOrdered}`);
     console.log(`the no of garlicbread ordered :${noOfGarlicBread}`);
     console.log(`the no of beverage ordered :${noOfBeverage}`);
    console.log(`totalbill :${totalbill}`);
    console.log(`discountedbill : ${discountbill}`);
}

//Main Program

let priceofpizza= getPriceOfPizzaBasedOnSize(pizzaSize);
pizzaprice=calculatepizzaPrice(noOfPizzaOrdered,priceofpizza);
let priceofgarlicbread=getPriceOfGarlicBread();
 GarlicBreadPrice=calculategarlicbreadPrice(noOfGarlicBread,priceofgarlicbread);
let priceOfbeverage=getPriceOfBeverage();
 BeveragePrice= calculatebeveragePrice(noOfBeverage,priceOfbeverage);
displayMenu();
// call the functions to compute order amount and display order details
displayCustomerDetails();
let totalbill=calculateTotalBill(pizzaprice,GarlicBreadPrice,BeveragePrice);
let discountbill=calculateDiscountAndReturnBillAmount(totalbill,discount);
displayOrderDetails(noOfPizzaOrdered, noOfGarlicBread, noOfBeverage,totalbill,discountbill);