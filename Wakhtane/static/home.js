document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            alert('You clicked the ' + event.target.innerText + ' button');
        });
    });
});