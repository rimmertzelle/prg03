window.addEventListener('load', init);

/**
 * Execute after document is fully loaded
 */
function init()
{
    //Get the form & listen to submit event
    var form = document.getElementById('new-todo-form');
    form.addEventListener('submit', addItem);
}

/**
 * Add the new item to the list
 *
 * @param e
 */
function addItem(e)
{
    //Make sure we won't actually send the form
    e.preventDefault();

    //Get the value from the form element
    var newItem = document.getElementById('inputfield').value;

    //Retrieve the whole list
    var ul = document.getElementById('todo');

    //Create a new list item
    var li = document.createElement('li');
    li.innerHTML = newItem;

    //Empty the current form item so we can add another & show message to user
    document.getElementById('inputfield').value = "";
    document.getElementById('new-item').innerHTML = newItem + " is toegevoegd";

    //Append new item to the list
    ul.appendChild(li);
}
