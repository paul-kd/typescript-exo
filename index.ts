import { User } from './user';
//import { UserType } from './usertype';

function printUser(users: User) {
  const appTh: HTMLElement = document.getElementById('app-th');
  if (users.name && users.firstname && users.age) {
    return (appTh.innerHTML = `<td>${users.name}</td> 
          <td>${users.firstname}</td>
          <td>${users.age}</td>`);
  } else {
    appTh.innerHTML = `<td>Error</td>`;
  }
}

const users: User = {
  name: 'Doe',
  firstname: 'John',
  age: 33,
};

printUser(users);
