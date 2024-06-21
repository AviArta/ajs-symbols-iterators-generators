function canIterate(object) {
    try {
        if (typeof object[Symbol.iterator] === "function") {
            console.log(true);
        } else if (typeof object[Symbol.iterator] == "undefined"){
            console.log(false);
        }
    } catch(error) {
        if (error.name === "TypeError") {
            console.log(false);
        }
         
    }
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
