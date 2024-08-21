
var form = document.getElementById("form");

var users = [];
form.addEventListener("submit", function (ele) {
  ele.preventDefault();
  console.log(ele.target.elements.name.value);
  console.log(ele.target.elements.address.value);
  var user = {
    Name: ele.target.elements.name.value,
    Address: ele.target.elements.address.value,
  };
  users.push(user);
  showuser()
});

function showuser() {
  var table = document.getElementById("tableBody");
    table.innerText=""
  users.forEach((user) => {
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdAddress = document.createElement("td");
    var tdAction = document.createElement("td");
    var tdReomve =document.createElement("td")
    var tdUpadte = document.createElement("td")
    tdName.innerText = user.Name;
    tdAddress.innerText = user.Address;
    tdReomve.innerText ="Remove"
    tdUpadte.innerText ="Update"
    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdAction);
    tdAction.appendChild(tdReomve)
    tdAction.appendChild(tdUpadte)
    tdReomve.classList.add("btn", "btn-primary")
    tdUpadte.classList.add("btn", "btn-primary")
    tdReomve.addEventListener("click", function() {
      removeUser(user);
    });
    tdUpadte.addEventListener("click", function() {
      updateUser(user)
    });
    table.appendChild(tr)

  });
}
function removeUser(item) {
  users.splice(item, 1);
  showuser();
}

function updateuser(item) {
  var NAME = prompt("enter name");
  var ADDRESS = prompt("enter address");
  item.Address = ADDRESS;
  item.Name = NAME;
  showuser();
}

