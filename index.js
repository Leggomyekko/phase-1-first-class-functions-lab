// Code your solution in this file!
// Code your solution in this file!
//define returnFirstTwoDrivers - new array
//const returnFirstTwoDrivers()  =  function(drivers)  {
  const returnFirstTwoDrivers = 
  function(drivers) {
      return drivers.slice(0, 2);
      };

const returnLastTwoDrivers = 
  function(drivers) {
      return drivers.slice(-2);
      };
      
const selectingDrivers = 
  [returnFirstTwoDrivers, returnLastTwoDrivers];
       
function createFareMultiplier(integer) {
          return function(fare){
              return fare * integer;   
          };
      }
      

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, boat) {
  return boat(drivers);
}
