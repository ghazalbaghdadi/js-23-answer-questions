//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

const url = "https://65be9070dcfcce42a6f2ae84.mockapi.io/users/1";

const replacePerson = async () => {
  const newData = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phoneNumber: "(945)635-3854",
  };
  const editData = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(newData),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await editData.json();
  console.log(data);
};

replacePerson();

//*To be continue...
