/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

const url = "https://jsonplaceholder.typicode.com/users";
async function getData() {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}
getData();