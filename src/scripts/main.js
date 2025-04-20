'use strict';

const li = Array.from(document.querySelectorAll('li'));

sortList(li);
getEmployees(li);

function sortList(list) {
  const ul = document.querySelector('ul');

  const sortedItems = list.sort((a, b) => {
    const salaryA = parseInt(a.getAttribute('data-salary').slice(1));
    const salaryB = parseInt(b.getAttribute('data-salary').slice(1));

    return salaryA - salaryB;
  });

  ul.innerHTML = '';
  sortedItems.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => {
    const names = item.textContent.trim();
    const salary = item.getAttribute('data-salary');
    const position = item.getAttribute('data-position');
    const age = item.getAttribute('data-age');

    employees.push({
      name: names,
      salary: salary,
      position: position,
      age: age,
    });
  });

  return employees;
}
