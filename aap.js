// Question 40
function make_album(name, title) {
    return ("".concat(name, ",").concat(title));
}
var album1 = make_album("First Name", "First Album");
var album2 = make_album("Seecond Name", "Seecond Album");
var album3 = make_album("Third Name", " Third Album");
console.log(album1);
console.log(album2);
console.log(album3);
// Question 41
var magician_names = ["Saad", "Billgates", "Niel Arm Stong"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician_names) {
        console.log(magician_names);
    });
}
show_magicians(magician_names);
// Question 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magician_names); // Modifies the original array
show_magicians(magician_names); // Shows modified names
// question 43
var magician_name = ["Saad", "Billgates", "Niel Arm Stong"];
function make_gret(magician_name) {
    magician_name.forEach(function (magician_name) {
        console.log(magician_name);
    });
}
make_gret(magician_name);
show_magicians(magician_names);
// question 44
function sandwitch(food) {
    return (" Making Sandwich Fresh include ".concat(food, " "));
}
console.log(sandwitch(["Club", "Cold drink"]));
console.log(sandwitch(["Chicken ", "Cold drink"]));
console.log(sandwitch(["Beef", "Cold drink"]));
// question 45
function carInformation(manufactureName, modelName, options) {
    var carInfo = { manufactureName: manufactureName, modelName: modelName, options: options };
    return carInfo;
}
console.log(carInformation("Toyota", "V8", ["Black In color", "Engine Is New"]));
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
