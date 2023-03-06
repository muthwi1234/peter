// JavaScript code for student module

// Function to handle attendance form submission
function handleAttendanceSubmit(event) {
	event.preventDefault(); // Prevent form from submitting

	// Get the selected attendance option
	var attendanceSelect = document.getElementById("attendance");
	var attendance = attendanceSelect.value;

	// Display a confirmation message
	alert("Your attendance for today has been recorded as " + attendance + ".");
}

// Function to handle grade form submission
function handleGradeSubmit(event) {
	event.preventDefault(); // Prevent form from submitting

	// Get the selected subject and entered grade
	var subjectSelect = document.getElementById("subject");
	var subject = subjectSelect.value;
	var gradeInput = document.getElementById("grade");
	var grade = gradeInput.value;

	// Display a confirmation message
	alert("Your grade for " + subject + " has been recorded as " + grade + ".");
}

// Add event listeners to attendance and grade forms
var attendanceForm = document.querySelector("form:nth-of-type(1)");
attendanceForm.addEventListener("submit", handleAttendanceSubmit);

var gradeForm = document.querySelector("form:nth-of-type(2)");
gradeForm.addEventListener("submit", handleGradeSubmit);
