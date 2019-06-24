// Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
today: { min: 72, max: 83 },
tomorrow: { min: 74.3, max: 84.6 }
};

function getMaxTmrw(forecast) {
"use strict";

const { tomorrow : {max: maxOfTomorrow} }= forecast;

return maxOfTomorrow;

console.log(getMaxOfTmrw(LOCAL_FORECAST));
