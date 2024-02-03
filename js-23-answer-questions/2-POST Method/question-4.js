// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */

const url = "https://65be9070dcfcce42a6f2ae84.mockapi.io/users";

const people = (arr) => {
  arr.forEach(async (data) => {
    const getData = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const response = await getData.json();
    console.log(response);
  });
};

people(users);

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const form = document.querySelector("form");
const fisrtName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const button = document.querySelector("button");

const phoneNum = document.createElement("input");
phoneNum.setAttribute("id", "phone");
phoneNum.setAttribute("type", "text");

const label = document.createElement("label");
label.innerText = "Phone Number:";
label.setAttribute("for", "phone");

// Add phone input after lastName input
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(lastName, phoneNum);
insertAfter(lastName, label);

// form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const person = {
    firstName: fisrtName.value,
    lastName: lastName.value,
    phoneNumber: phoneNum.value,
  };
  if (fisrtName.value == "" || lastName.value == "" || phoneNum.value == "") {
    alert("Hame input haro por mikoni ya chi azizam ?!💙🗡️");
  } else {
    const postData = await fetch(url, {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await postData.json();
    console.log(data);
  }

  fisrtName.value = "";
  lastName.value = "";
  phoneNum.value = "";
});
//*To be continue...
