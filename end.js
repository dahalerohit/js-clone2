let employees = [];
let employeeId = 1;

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let profession = document.getElementById('profession').value.trim();
    let age = document.getElementById('age').value.trim();

    let messageDiv = document.getElementById('message');

    if (!name || !profession || !age) {
        messageDiv.textContent = "All fields are required!";
        messageDiv.className = 'error';
        messageDiv.style.display = 'block';
    } else {
        // Add employee to array
        let newEmployee = {
            id: employeeId++,
            name: name,
            profession: profession,
            age: parseInt(age)
        };
        employees.push(newEmployee);

        // Show success message
        messageDiv.textContent = "Employee added successfully!";
        messageDiv.className = 'success';
        messageDiv.style.display = 'block';

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';

        // Update employee list
        updateEmployeeList();
    }
});

function updateEmployeeList() {
    let employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        let employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <strong>${employee.name}</strong> (${employee.profession}, ${employee.age})
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    updateEmployeeList();
}
