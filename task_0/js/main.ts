interface Student{
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}
const student1: Student={
    firstName: "Sarah",
    lastName: "Smith",
    age: 20,
    location: "New York",
};

const student2: Student={
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "London",
};

const studentsList: Student[]=[student1,student2];

function renderStudentsTable() {
    const container = document.getElementById('studentTableContainer');
    if (!container) {
        console.error("Table container not found!");
        return;
    }

const table = document.createElement('table');
    const headerRow = table.insertRow();

    // Create table headers
    const headers = ["First Name", "Last Name", "Age", "Location"];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
studentsList.forEach(Student => {
        const row = table.insertRow();
        
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = Student.firstName;
        
        const locationCell = row.insertCell();
        locationCell.textContent = Student.location;
    });
 container.appendChild(table);

}
document.addEventListener('DOMContentLoaded', renderStudentsTable);