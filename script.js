var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function akanNames() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var gender = document.getElementById("gender").value;
    let birthday = new Date(`${year}-${month}-${day}`)
    let dateString = birthday.toDateString()
    let birthDate = birthday.getDay()
  
  
    if (gender === "male") {
      let name = maleNames[birthDate]
      output.textContent = "You were born on " + dateString + ",  Your Akan Name is " + name
    } else if (gender === "female") {
      let name = femaleNames[birthDate]
      output.textContent = "You were born on " + dateString + ",  Your Akan Name is " + name
    } else {
      alert("Select your gender")
    }
  
    if (day > 31 || day < 1) {
      alert("Invalid date")
      output.textContent = "Put a valid date!"
    }
  
    if (month > 12 || month < 1) {
      alert("Invalid month")
      output.textContent = "Put a valid month!"
  
    }
  }