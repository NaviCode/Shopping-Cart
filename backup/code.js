// Global Variables

var idName; // Used in name to object 
var fruit;
var counter = 0; //removeFromCart();
var add = true; //toggles between add and remove to cart;
var tog = 0; //used to toggle
var shoppingCart = []; //all grocery stores start with empty shopping carts.

// JQUERY
$(document).ready(function(){
    $("img").mousedown(function(event){
        if(add === true)
        {
            switch (event.which)
            {
                case 1:
                    idName = this.id;
                    fruit = cart[idName];
                    addToCart();
            }
        }
        else{
            switch (event.which)
            {
                case 1:
                     idName = this.id;
                     fruit = cart[idName];
                     removeFromCart();
            }
        }
    });
})

var cart = {
    apple:{
        name: "Apple",
        cost: 75,
        count: 0
    },
    avacado:{
        name: "Avacado",
        cost: 150,
        count: 0
    },
    banana:{
        name: "Banana",
        cost: 50,
        count: 0
    },
    cherry:{
        name: "Cherry",
        cost: 110,
        count: 0
    },
    pear:{
        name: "Pear",
        cost: 110,
        count: 0
    },
    strawberry:{
        name:"Strawberry",
        cost:50,
        count: 0
    },
    watermelon:{
        name:"Watermelon",
        cost: 450,
        count: 0
    },
    pineapple:{
        name:"Pineapple",
        cost: 800,
        count: 0
    },
    peach:{
        name: "Peach",
        cost:130,
        count: 0
    }
}

function addToCart(){
    shoppingCart.push(fruit);
    displayShoppingCart();
}

function toggle(){ //Toggle for add/remove button.
    var togBox;
    if(tog === 0){
        alert("Please click the fruit you wish to remove.");
        add = false;
        togBox = document.getElementById("toggle").firstChild;
        togBox.data = "Add";
        tog++;
    }
    else{
        add = true;
        togBox = document.getElementById("toggle").firstChild;
        togBox.data = "Remove";
        tog = 0;
    }

}

function removeFromCart(){
    for(var i = 0; i<shoppingCart.length; i++){
        if(fruit === shoppingCart[i] && counter < 1){
            counter++;
            delete shoppingCart[i];
        }
    }
    counter = 0;
    shoppingCart = shoppingCart.filter(filterFunction);
    displayShoppingCart();
}

function filterFunction(value){
    return Boolean(value);
}

function displayShoppingCart(){
    var cartBox = document.getElementById("rightPanel");
    cartBox.value ="";
    for(var i = 0; i<shoppingCart.length; i++){
        cartBox.value += shoppingCart[i].name +" : $" + shoppingCart[i].cost/100 + "\n";  
        cartBox.scrollTop =cartBox.scrollHeight;
    }
}

function checkOut(){
    var cost = 0;
    for(var j = 0; j<shoppingCart.length;j++){
        cost = cost + shoppingCart[j].cost;
    }
    var totalCost = " Total cost: $"+ cost/100;
    var withTax = cost + (cost*.07);
    alert(totalCost + " with Tax: $"+ Math.round(withTax)/100);
}
