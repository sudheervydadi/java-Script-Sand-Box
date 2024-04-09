const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let mappedArray = numbers.map((number) => number * number);

console.log(mappedArray);

const socialArray = [
  { name: 'Twitter', url: 'http://www.Twitter.com', foundedIn: 2012 },
  { name: 'Facebook', url: 'http://www.Facebook.com', foundedIn: 2008 },
  { name: 'Linkedn', url: 'http://www.Linkedn.com', foundedIn: 2010 },
  { name: 'Instagram', url: 'http://www.Instagram.com', foundedIn: 2016 },
];

mappedArray = socialArray.map((socialObj) => socialObj.url);

console.log(mappedArray);

mappedArray = socialArray.map((socialObj) => {
  return {
    companyName: socialObj.name,
    foundedyear: socialObj.foundedIn,
  };
});

console.log(mappedArray);
