//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

// we are joke to CEO mage na ? :)
// here we go !

const url = "https://65be9070dcfcce42a6f2ae84.mockapi.io/users";

async function deleteDaltons() {
  const response = await fetch(url);
  try {
    const data = await response.json();
    data.forEach((element) => {
      if (element.lastName === "Dalton") {
        fetch(`${url}/${element.id}`, { method: "DELETE" });
      }
    });
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}
deleteDaltons();

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
async function deleteEvenIds() {
  const response = await fetch(url);
  try {
    const data = await response.json();
    data.forEach((element) => {
      if (element.id % 2 === 0) {
        fetch(`${url}/${element.id}`, { method: "DELETE" });
      }
    });
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}
deleteEvenIds();


//*End of story :) 
