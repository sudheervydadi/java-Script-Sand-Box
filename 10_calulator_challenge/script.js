function calulator(num1, num2, operator) {
  switch (operator) {
    case '+': {
      console.log(num1 + num2);
      break;
    }
    case '-': {
      console.log(num1 - num2);
      break;
    }
    case '*': {
      console.log(num1 * num2);
      break;
    }
    case '/': {
      console.log(num1 / num2);
      break;
    }
    default: {
      console.log('Error message');
      break;
    }
  }
}

calulator(5, 10, '$');
