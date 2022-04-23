"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    validations.validateDate = (date) => {
        return (date instanceof Date) ? true : false;
    };
    validations.validateNumber = (number) => {
        return (number > 0) ? true : false;
    };
    validations.validateEmail = (email) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };
})(validations || (validations = {}));
console.log(validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map