interface User {
    username: string;
    age: number;
    status: string;
}

const obj: User = { username: 'Johnny', age: 25, status: 'active' };
const { username, age } = obj;
console.log(username, age);
