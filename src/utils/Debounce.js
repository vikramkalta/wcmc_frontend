export function debounce(func, delay) {
  // declare a variable to store the timer
  let timer;
  // return a function that takes the arguments of the original function
  return (...args) => {
    // clear the previous timer if any
    clearTimeout(timer);
    // set a new timer with the delay
    timer = setTimeout(() => {
      // call the original function with the arguments
      func.apply(this, args);
    }, delay);
  };
}
