window.addEventListener('load', init);

/**
 * Execute after document is fully loaded
 */
function init()
{
    //Get the button & add event
    var button = document.getElementById('button');
    button.addEventListener('click', addItem);
}

/**
 * Add the new item to the list
 */
function addItem()
{
    //Retrieve the whole list
    var ul = document.getElementById('todo');

    //Create a new list item
    var li = document.createElement('li');
    li.innerHTML = 'Watch the new X-Files';

    //Append new item to the list
    ul.appendChild(li);
}
