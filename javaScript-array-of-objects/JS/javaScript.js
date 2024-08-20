var users=[]

function addUser(){
        var name=prompt("enter the name")
        var id=prompt("enter the id")
        var balance=prompt("enter the balance")

        var userData={
            userName:name,
            userId:id,
            userBalance:balance
        }
    users.push(userData)
}

addUser()
addUser()


function editUserBalanceById(id,balance){
    var indexOfUser=users.findIndex(ele=>id==ele.userId)
    users[indexOfUser].userBalance=balance
}

var id=prompt("enter the id to edit balance")
var balance=prompt("enter new balance")
editUserBalanceById(id,balance)



function deleteUserById(id){
    var indexOfUser=users.findIndex(ele=>id==ele.userId)
    users.splice(indexOfUser,1)
}

var idToDelete=prompt("enter the id to delete")
deleteUserById(idToDelete)
console.log(users)

