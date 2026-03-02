const pokemonController = {};
const API_URL = 'http://localhost:5173/public/test.json';
const HEADERS = {
    "Content-Type": "application/json",
    "Acept":  "appllication/json"
}
//TODO methods

pokemonController.findAll = async () => await fetch(API_URL, {
    method: 'GET',
    headers: HEADERS
})
.then(response=> response.json())
.then(result=> (result))
.catch(error => {console.log(error)});

export default pokemonController;