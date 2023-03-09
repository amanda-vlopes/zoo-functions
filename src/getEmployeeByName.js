const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  return data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

console.log(getEmployeeByName('Orloff'));
module.exports = getEmployeeByName;
