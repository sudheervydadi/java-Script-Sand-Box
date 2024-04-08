function getCelsius(temperatureInFahrenheit) {
  return ((temperatureInFahrenheit - 32) * 5) / 9;
}

console.log(`The Temperature is ${getCelsius(32)}\xB0C`);

const minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax([50, 73, 24, 7]));

(function (length, breath) {
  console.log(
    `The Area of the rectangle with length of ${length} and width of ${breath} is ${
      length * breath
    }`
  );
})(10, 20);
