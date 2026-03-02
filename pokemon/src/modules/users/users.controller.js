const UserController = {};

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

UserController.findAll = async () => await fetch(API_URL,{
    method: 'GET',
    headers: HEADERS
}).then(response => response.json())
.then(result => (result))
.catch(console.log);

export default UserController;