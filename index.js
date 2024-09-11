// create prompt
const orderStr = prompt(
    "Enter your froyo order.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee,vanilla,strawberry,coffee,chocolate,peanut butter,peanut butter,chocolate"
);

const orderArr = orderStr.split(/,/);
const listOfItemsOrdered = getListOfItems(orderArr);

function getListOfItems(order) {
    const list = {};
    for (const itme of order) {
        console.log(itme);
        if (!list.includes(itme)) {
            list[itme];
            //list.push(itme);
        }
    }
    return list;
}



//const flavorListing = getFlavorListing(listOfItemsOrdered, orderArr);


//console.log(orderArr);
console.log(listOfItemsOrdered);
