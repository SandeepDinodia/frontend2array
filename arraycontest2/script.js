const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (data[i].profession == "developer") {
      console.log(data[i]);
    }
  }
}

// 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let profession = prompt("Enter profession:");
  
    let newPerson = {
      name: name,
      age: age,
      profession: profession,
    };
    data.push(newPerson);
    console.log(newPerson);
  }


// 3. Remove Admins
function removeAdmin() {
Ans=data.filter((element)=>element.profession !== "admin");
console.log(Ans);
}

// 4. Concatenate Array
function concatenateArray() {
  let skills=["MS Word","Leadership","Comunication"];
  let moreSkill=["Coding","Teaching"];
  let newArr=skills.concat(moreSkill);
  console.log(newArr);
}

// 5. Average Age
function averageAge() {
  const ageSum = data.reduce((sum, person) => sum + person.age, 0);
  const average = ageSum / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  console.log("Is there anyone above 25?", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionArr = [];
  data.forEach((element) => {
    if (!uniqueProfessionArr.includes(element.profession)) {
      uniqueProfessionArr.push(element.profession);
    }
  });
  console.log(uniqueProfessionArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
data[0].profession="manager";
console.log(data[0]);
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce((count, person) => {
    if (person.profession === "developer" || person.profession === "admin") {
      count[person.profession] = (count[person.profession] || 0) + 1;
    }
    return count;
  }, {});

  console.log("Developer Count:", professionCount.developer || 0);
  console.log("Admin Count:", professionCount.admin || 0);
}
