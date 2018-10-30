// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (driver){
    return driver.name;
  });
}