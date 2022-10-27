function add(a,b)
{
  console.log("Simple call");
 return a+b;
}
console.log("Simple call", add(3));
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0]; 
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    }
    else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const memoizeAdd =memoize(add);
memoizeAdd(100,100);
memoizeAdd(100);
memoizeAdd(100,200);
