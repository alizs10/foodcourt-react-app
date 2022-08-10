export const priceFormatter = price => {
    return parseInt(price).toLocaleString('en-US');
}


export const e2pNumbers = number => {
    let persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
    let englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (let i = 0; i < englishNumbers.length; i++) {
        let req = new RegExp(englishNumbers[i], "g");
        number = number.replace(req, persianNumbers[i])
    }

    return number;
}


export const showPersianPrice = price => {
    return e2pNumbers(priceFormatter(price))
}


export const isInList = (foodId, CatId, items) => {
    let res = false;

    items.forEach(item => {
        itemChecker: if (item.food.id == foodId && item.catId == CatId) {
            res = item;
            break itemChecker;
        }
    });

    return res;
}

export const calculateOrderList = items => {

    let payPrice = 0;

    items.map(item => {
        payPrice += (item.food.price * item.count)
    })

    return payPrice;
}


export const generateId = () => {
    return Math.floor(Math.random() * 1000000).toString();
}


