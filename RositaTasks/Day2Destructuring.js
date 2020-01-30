const address1 = {
  doorNumber: 17,
  apartment: "the wharf",
  city: "london",
  country: "UK"
};

// const city = address1.city
// const country = address1.country

const { city, country } = address1;

// The above code says, give me a variable called city, a variable called country,
// and take it from the address1 object. We’re taking the first property and the last
// property and putting them into two new variables that will be scoped to the parent block (or window!).

const address2 = {
  doorNumber: 1,
  apartment: "random house",
  city: city,
  country: country
};

console.log(address1, address2);
