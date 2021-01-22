//GitHub Repository Link


//Assignment-3: Problem No:01 (kilometer to meter)
//start
function kilometerToMeter(distance) {
    var distanceInMeter = distance * 1000;
    return distanceInMeter;
}
var kilometerDistanceInput = kilometerToMeter(1);
console.log(kilometerDistanceInput);
//End

//Assignment-3: Problem No:02 (Budget Calculator)
//start
function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity) {
    var watchPrice = 50;
    var watch = watchQuantity * watchPrice;
    var mobilePrice = 100;
    var mobie = mobileQuantity * mobilePrice;
    var laptopPrice = 500;
    var laptop = laptopQuantity * laptopPrice;

    totalBudget = watch + mobie + laptop;
    return totalBudget;
}
var electronicsQuantityInput = budgetCalculator(2, 3, 2);
console.log(electronicsQuantityInput);
//End

//Assignment-3: Problem No:03 (Hotel Cost)
//Start
//Total Days costing result
function hotelCost(days) {
    if (days < 0) {
        return "you don't enter a days.Please Enter! how many days stay in this hotel.";
    } else {
        var totalDays = 0;
        totalDays += first10Days(days) + second10Days(days) + lastDays(days);
        return totalDays;
    }
}
// First 10 Days
function first10Days(days) {
    if (days <= 10) {
        return days * 100;
    } else if (days > 10) {
        return 10 * 100;
    } else {
        return 0;
    }
}
// Second 10 Days
function second10Days(days) {
    if (days > 10 && days <= 20) {
        return (days - 10) * 80;
    } else if (days > 20) {
        return 10 * 80;
    } else {
        return 0;
    }
}
// Last Days
function lastDays(days) {
    if (days > 20) {
        return (days - 20) * 50;
    } else {
        return 0;
    }
}
var stayDaysInput = hotelCost(40);
console.log(stayDaysInput);
//End

//Assignment-3: Problem No:04 (Mega Friend)
//Start
function megaFriend(friendsName) {
    if (Array.isArray(friendsName) != true) {
        return "Please! Enter your friends name like an array.";
    } else {
        var arrayLength = -1;
        var arrayIndex = null;

        for (var i = 0; i < friendsName.length; i++) {
            var element = friendsName[i].length;
            if (arrayLength < element) {
                arrayLength = element;
                arrayIndex = friendsName[i];
            }
        }
        return arrayIndex;
    }
}
var largeName = megaFriend(["misbahuddin", "kibria", "zipu", "ripu"]);
console.log(largeName);
//End