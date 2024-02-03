/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// ! Answer

const url = "https://jsonplaceholder.typicode.com/users";
const article = document.querySelector("article");

async function cardInfo() {
  const res = await fetch(url);
  try {
    const datas = await res.json();
    datas.forEach((ele) => {
      const newEl = document.createElement("div");
      const name = document.createElement("h3");
      const company = document.createElement("h3");

      newEl.style.cssText =
        "width: 250px; height:200px; margin:2rem; background:linear-gradient(to right, #1488cc, #2b32b2); border-radius: 1.5rem; text-align: center; padding-top:1rem";
      article.style.cssText = "display: flex; flex-wrap: wrap; ";
      document.body.style.backgroundColor = 'black';
      name.innerText = `Name :
       ${ele.name}`;
      company.innerText = `Company :
       ${ele.company.name}`;

      newEl.append(name);
      newEl.append(company);
      article.append(newEl);
    });
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}
cardInfo();
