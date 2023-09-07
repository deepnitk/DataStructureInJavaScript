function debounce(callback, delay, immediate = false) {
    let timerID;
    /*
      So in debounce, we return a function. The reason we return a function 
      is because of the fact that we need a debounced version of the callback function.
      And inside this function, the first thing we do is we clear the timeout, and this 
      is using clearTimeout using a timerID. So this creates a closure, meaning that every call
      to this function has the same timerID. sO we clear the timeout, which is 
      how we reset our delay every time debounced function is called.
    */
    
    return function(...args) {
      clearTimeout(timerID);
      const shouldCallImmediately = timerID == null && immediate;
      if (shouldCallImmediately) {
        callback.apply(this, args);
      }
      timerID = setTimeout(() => {
        if(!immediate) {
          callback.apply(this, args);
        }
        timerID = null;
      }, delay);
    }
  }
  
  // Do not edit the line below.
  exports.debounce = debounce;
  