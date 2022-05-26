import {UserManager} from "./UserManager.js";

const userManager = new UserManager();

let index;
let name = document.getElementById('name') as HTMLInputElement;
let age = document.getElementById('age') as HTMLInputElement;
let phone = document.getElementById('phone') as HTMLInputElement;
let email = document.getElementById('email') as HTMLInputElement;
let nameConfirm = document.getElementById('name') as HTMLInputElement;
let ageConfirm = document.getElementById('age') as HTMLInputElement;
let phoneConfirm = document.getElementById('phone') as HTMLInputElement;
let emailConfirm = document.getElementById('email') as HTMLInputElement;
function clearInputConfirm() {
    nameConfirm.value = ""
    ageConfirm.value = ""
    phoneConfirm.value = ""
    emailConfirm.value = ""
}
//
function updateButtonDelete() {
    let deleteStudent = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteStudent.length; i++) {
        deleteStudent[i].addEventListener('click', () => {
            if (confirm('ban co muon xoa khong')) {
                index = deleteStudent[i].getAttribute('value');
                userManager.deleteUser(+index);
                updateButtonDelete();
            }
        })
    }
}

document.getElementById('search-data').addEventListener('input',searchStudent)
//search
function searchStudent(){
    let searchInput = (document.getElementById('search-data') as HTMLInputElement).value
    let searchValue = userManager.studentList.filter(value => {
        return value.name.toUpperCase().includes(searchInput.toUpperCase());
    })
    userManager.renderList(searchValue)
}

//
function editButtonStudent() {
    let editStudent = document.getElementsByClassName('edit');
    for (let i = 0; i < editStudent.length; i++) {
        editStudent[i].addEventListener('click',()=>{
            index = editStudent[i].getAttribute('value');
            console.log('dfds',index)
            userManager.edit(+index);
            editButtonStudent()
        })
    }
    document.getElementById('confirm').addEventListener('click',function (){
        userManager.studentList[index].name = (document.getElementById('name-confirm') as HTMLInputElement).value
        userManager.studentList[index].age = (document.getElementById('age-confirm') as HTMLInputElement).value
        userManager.studentList[index].phone = (document.getElementById('phone-confirm') as HTMLInputElement).value
        userManager.studentList[index].email = (document.getElementById('email-confirm') as HTMLInputElement).value
        userManager.renderList(userManager.studentList)
        clearInputConfirm()
    })

}
function clearInput() {
    name.value = ''
    age.value = ''
    phone.value = ''
    email.value = ''
}
document.getElementById('add').addEventListener('click',saveStudent);


function saveStudent() {
    userManager.addStudent(name.value,age.value,phone.value,email.value)
    clearInput()
    editButtonStudent()
    updateButtonDelete()


}



// function isRequire(inputElement) {
//     let div = inputElement.parentElement;
//     let error = document.createElement('small');
//     let small = div.appendChild(error);
//
//
//     inputElement.addEventListener('blur', () => {
//         if (inputElement.value === "") {
//             inputElement.style.borderColor = 'red';
//             small.innerText = `nhap ${inputElement.id} vao o chau ei`
//             this.errors++;
//
//         } else {
//             inputElement.style.borderColor = 'blue';
//             this.user[inputElement.id] = inputElement.value;
//             small.hidden = true;
//             this.errors --;
//         }
//     })
// }

// function checkFuck(inputElement){
//
//     let div = inputElement.parentElement;
//     console.log(div.children.length)
//     if(div.children.length > 3){
//         return
//     }
//     let error = document.createElement('small');
//     let small = div.appendChild(error);
//     if (inputElement.value === "") {
//         inputElement.style.borderColor = 'red';
//         small.innerText = `nhap ${inputElement.id} vao o chau ei`
//         this.errors++;
//
//     } else {
//         inputElement.style.borderColor = 'blue';
//         small.hidden = true;
//         this.errors --;
//     }
// }



// isRequire(name)
// isRequire(age)
// isRequire(phone)
// isRequire(email)
//

