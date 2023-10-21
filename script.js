var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["subject"] = document.getElementById("subject").value;
    formData["day"] = document.getElementById("day").value;
    formData["time"] = document.getElementById("time").value;
    formData["room"] = document.getElementById("room").value;
    formData["instructor"] = document.getElementById("instructor").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.subject;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.day;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.time;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.room;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.instructor;
        cell4 = newRow.insertCell(5);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("subject").value = selectedRow.cells[0].innerHTML;
    document.getElementById("day").value = selectedRow.cells[1].innerHTML;
    document.getElementById("time").value = selectedRow.cells[2].innerHTML;
    document.getElementById("room").value = selectedRow.cells[3].innerHTML;
    document.getElementById("instructor").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.subject;
    selectedRow.cells[1].innerHTML = formData.day;
    selectedRow.cells[2].innerHTML = formData.time;
    selectedRow.cells[3].innerHTML = formData.room;
    selectedRow.cells[4].innerHTML = formData.instructor;
}


//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this schedule?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("subject").value = '';
    document.getElementById("day").value = '';
    document.getElementById("time").value = '';
    document.getElementById("room").value = '';
    document.getElementById("instructor").value = '';
    selectedRow = null;
}