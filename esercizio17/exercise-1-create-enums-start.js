"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency[Currency["Euro"] = 0] = "Euro";
    Currency[Currency["Dollar"] = 1] = "Dollar";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
var countries = [
    {
        name: "France",
        currency: "Euro"
    },
    {
        name: "United States of America",
        currency: "Dollar"
    },
    {
        name: "Italy",
        currency: "Euro"
    },
    {
        name: "New Zealand",
        currency: "Dollar"
    },
];
// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
var countryLanguages = [
    { language: "Spanish", status: "primary" },
    { language: "English", status: "secondary" },
];
