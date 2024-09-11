// create prompt
const orderStr = prompt(
    "Enter your froyo order.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee,vanilla,strawberry,coffee,chocolate,peanut butter,peanut butter,chocolate"
);

const orderArr = orderStr.split(/,/);
const listOfItemsOrdered = getListOfItems(orderArr);

function getListOfItems(order) {
    const list = {};
    for (const item of order) {
        if (list[item]) {
            list[item]++;
        } else {
            list[item] = 1;
        }
    }
    return list;
}

