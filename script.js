function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dobArray = dobInput.split('/');
    var dobDate = new Date(dobArray[2], dobArray[1] - 1, dobArray[0]); // Year, Month (zero-based), Day
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
  
    document.getElementById("result").innerText = "Your age is: " + age;
  }
  