function submitForm() {

  var name = document.getElementById("nameInput").value;
  var staffno = document.getElementById("staff_no").value;
  var kcdio = document.getElementById("kcdioInput").value;
  var contactno = document.getElementById("contact_no").value;
  var email = document.getElementById("emailInput").value;
  var deduction = document.getElementById("deductionInput").value;
  var startDate = document.getElementById("start_dateInput").value;
  var endDate = document.getElementById("end_date"); 
  var agreeCheckbox = document.getElementById("agreeBox").checked;

  if (name === "" || staffno === "" || kcdio === "" || contactno === "" || email === "" || deduction === "" || startDate === "" || endDate === "") {
    alert("Please fill out all required fields.");
    return;
}

    if (!agreeCheckbox) {
      alert("Please click agree to be part of the campaign.");
      return;
  }

    alert("Successfully submitted!");
    
}

  function resetPage() {
    location.reload();
  }

let btn = document.querySelectorAll(".buttons");
btn.forEach((btn) => {
  btn.onclick = function (e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    let ripples = document.createElement("overlay");

    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 2000);
  };
});


