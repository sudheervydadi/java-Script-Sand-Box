const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

filteredArray = numbers.filter((number) => number % 2 === 0);

console.log(filteredArray);

const socialArray = [
  { name: 'Twitter', url: 'http://www.Twitter.com', foundedIn: 2012 },
  { name: 'Facebook', url: 'http://www.Facebook.com', foundedIn: 2008 },
  { name: 'Linkedn', url: 'http://www.Linkedn.com', foundedIn: 2010 },
  { name: 'Instagram', url: 'http://www.Instagram.com', foundedIn: 2016 },
];

const filteredArray = socialArray.filter(
  (socialObj) => socialObj.name === 'Twitter' || socialObj.name === 'Instagram'
);

console.log(filteredArray);

filteredArray = socialArray.filter(
  (socialObj) =>
    (socialObj.name === 'Twitter' || socialObj.name === 'Instagram') &&
    socialObj.foundedIn >= 2013
);

console.log(filteredArray);
