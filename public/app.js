var addNewInput = document.getElementById('addNew'),
    list = document.getElementById('list');

addNewInput.addEventListener('keypress', function (event) {
    console.log('keypressed ' + event.keyCode);
    if (event.keyCode === 13) {
        var item = document.createElement('li');

        item.innerHTML = addNewInput.value;
        list.appendChild(item);
    }
});

console.log('its running');