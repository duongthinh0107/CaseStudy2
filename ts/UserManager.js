import { User } from "./User.js";
export class UserManager {
    constructor() {
        this.studentList = [];
    }
    addStudent(name, age, phone, email) {
        let student = new User(name, age, phone, email);
        this.studentList.push(student);
        this.renderList(this.studentList);
    }
    renderList(arr) {
        let html = "";
        if (arr.length === 0) {
            html += "<tr>";
            html += "<td>No Data</td>";
            html += "</tr>";
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                html += "<tr>";
                html += `<td>${i + 1}</td>`;
                html += `<td>${arr[i].getName()}</td>`;
                html += `<td>${arr[i].getAge()}</td>`;
                html += `<td>${arr[i].getNumberPhone()}</td>`;
                html += `<td>${arr[i].getEmail()}</td>`;
                html += `<td>
                     <button class="delete" value="${i}"><a href="#" class=""  title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a></button>
                     <button  data-toggle="modal" data-target="#exampleModal1" id="btn-edit" value="${i}" class="edit">
                     <a href="#" class="settings" title="Settings" data-toggle="tooltip" id="btn-edit"><i class="material-icons">&#xE8B8;</i></a>
                     </button>
                    </td>`;
                html += "</tr>";
            }
        }
        document.getElementById('tbody').innerHTML = html;
    }
    deleteUser(index) {
        this.studentList.splice(index, 1);
        this.renderList(this.studentList);
    }
    edit(index) {
        document.getElementById('name-confirm').value = this.studentList[index].name;
        document.getElementById('age-confirm').value = this.studentList[index].age;
        document.getElementById('phone-confirm').value = this.studentList[index].phone;
        document.getElementById('email-confirm').value = this.studentList[index].email;
        document.getElementById('index').value = index;
        console.log(index);
    }
}
//# sourceMappingURL=UserManager.js.map