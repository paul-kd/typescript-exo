import { User } from './user';

function printUser(user: User) {
  const appTh: HTMLElement = document.getElementById('app-th');
  if (<User>user)  {
    return (appTh.innerHTML = `<td>${user.name}</td> 
          <td>${user.firstname}</td>
          <td>${user.age}</td>`);
  } else {
    appTh.innerHTML = `<td>Error</td>`;
  }
}

const first = {
  name: 'Doe',
  firstname: 'John',
  age: 33,
};

//console.log(typeof first);

printUser(first);
