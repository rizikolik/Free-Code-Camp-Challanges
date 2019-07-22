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