const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'orange';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeader.length; index += 1) {
    emergencyTasksHeader[index].style.backgroundColor = 'pink';
}

const noEmergencyTask = document.querySelector('.no-emergency-tasks');
noEmergencyTask.style.backgroundColor = 'yellow';

const noEmergencyTaskHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTaskHeader.length; index += 1) {
    noEmergencyTaskHeader[index].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';