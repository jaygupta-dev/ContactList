
let contactListDiv = document.querySelector("#contactListDiv")
let contactNameData = document.querySelector("#contactName");
let contactNumberData = document.querySelector("#contactNumber");
let tableAdding = document.querySelector("#tableAdding");
let saveContactBtn = document.querySelector("#saveContact");
let conatctNameData = document.querySelector("#conatctNameData");
let conatctNumberData = document.querySelector("#conatctNumberData");
let tableDiv = document.getElementById("tableDiv");
let contactNumberDeleteBtn = document.querySelector("#contactNumberDelete");

let contactArray = [];
let objData = localStorage.getItem("nameandnumber");
if (objData != null) {
    contactArray = JSON.parse(objData);
}
displayContact()
saveContactBtn.addEventListener('click', () => {
    let name = contactNameData.value;
    let number = contactNumberData.value;
    if (contactNameData.value != '' && contactNumberData.value != '') {
            contactArray.push({ 'name': name, 'number': number });
            saveContact(contactArray);
            contactNameData.value = '';
            contactNumberData.value = '';
            displayContact()
    }
    else {
        alert("Without Name and Number you cannot save!!!!")
    }
})

function saveContact(contactArray) {
    let Phonebook = JSON.stringify(contactArray);
    localStorage.setItem("nameandnumber", Phonebook);
}
function displayContact() {
    let contactNumber = '';
    contactArray.forEach((nameandnumber, contactindex) => {
        contactNumber += `<tr id="tableAdding">
        <td class="sNoColumn">${contactindex + 1}</td>
        <td class="nameColumn">${nameandnumber.name}</td>
        <td class="numberColumn">${nameandnumber.number}</td>
        <td class="deleteColumn" onclick="deleteContact(${contactindex})">❌</td>
    </tr>`
        tableDiv.innerHTML = contactNumber;
    });
}
function deleteContact(contactindex) {
    let dltcnf = confirm("After Delete You Can't restore !!\nAre you sure ?")
    if (dltcnf == 1) {
        contactArray.splice(contactindex, 1);
        saveContact(contactArray);
        displayContact();
    }
}