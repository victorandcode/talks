/*
 Translate the following function to an arrow function with the following characteristics:
 - The new arrow function should return the exact same thing as the old version.
 - countryCode should have a default value of 'ES'
 - the function should use no return statement
*/
function getPackageAddress(countryCode, zipCode, address){
    var countryCode = countryCode || 'ES';
    return countryCode + "-" + zipCode + "-" + address;
}

const getPackageAddressArrow; //TODO