// for (let i = 0; i <= 10; i++) {
//   console.log(`Number ${i}`);
// }

const socials = ['Twitter', 'Facebook', 'Linkedn', 'Instagram'];

socials.forEach(function (item) {
  console.log(item);
});

socials.forEach((item) => console.log(item));

function lenghtChecker(word, index) {
  console.log(`${word} - ${word.length} -${index}`);
}

socials.forEach(lenghtChecker);

const socialArray = [
  { name: 'Twitter', url: 'http://www.Twitter.com', foundedIn: 2012 },
  { name: 'Facebook', url: 'http://www.Facebook.com', foundedIn: 2008 },
  { name: 'Linkedn', url: 'http://www.Linkedn.com', foundedIn: 2010 },
  { name: 'Instagram', url: 'http://www.Instagram.com', foundedIn: 2016 },
];

socialArray.forEach((socialObj, index) =>
  console.log(
    `${socialObj.name} - ${socialObj.url} - ${socialObj.foundedIn} - ${index}`
  )
);
