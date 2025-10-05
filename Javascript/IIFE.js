// Immediately Invoked Function Expression (IIFE)

(function hi() {
    // Named IIFE
  console.log(`Hiiii...How are you`);
})();

( 
    // Simple IIFE
    () => {
        console.log("This is simple IIFE");
        
    }
)();

((name) => {
    // Simple IIFE with Params
  console.log(`${name}'s coding`);
})("aditya");
