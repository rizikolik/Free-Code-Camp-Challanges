const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

/// Async Order //
async function makeBeans(){
  let type=await shopForBeans()
  let isSoft=await soakTheBeans(type)
  let dinner=await cookTheBeans(isSoft)
  console.log(dinner)

}
makeBeans()

////TRY AND CATCH //
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  }
  catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
 }
 
 hostDinnerParty();

 //Promise all with await //
 let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

async function serveDinnerAgain(){
  let foodArray=await Promise.all([steamBroccoli(), cookRice(), bakeChicken(),cookBeans()]);
let vegetable = foodArray[0];
let starch =  foodArray[1];
let protein =  foodArray[2];
let side =  foodArray[3];

console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}
serveDinnerAgain()