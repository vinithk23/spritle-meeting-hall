// Go to particular date

var todayDate = new Date().toISOString().split('T')[0];
var setDate = "2023-05-24";
dp.startDate = new DayPilot.Date(setDate);
dp.update() 