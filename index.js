function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    let exercise = "i will go to the gym"
    return function toDayActivity() {
        console.log(`Today ${exercise} at 5pm`);
      };

}
function returnsAnAnonymousFunction(){
    let exercise = "i will go to the dojang"
    return function () {
        console.log(`Today ${exercise} at 5pm`);
      };

}