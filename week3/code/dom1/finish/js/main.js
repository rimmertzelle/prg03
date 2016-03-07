var total = calculateTotalPrice();
setTotalPriceInHTML(total);

/**
 * Calculate the price of all the items in the list
 *
 * @returns {number}
 */
function calculateTotalPrice()
{
    var receipts = document.getElementsByTagName('li');
    var total = 0.0;

    //Count all the receipts
    for (var i = 0; i < receipts.length; i++) {
        total += parseFloat(receipts[i].innerHTML);
    }

    return total;
}

/**
 * Update the HTML to show the total price
 *
 * @param total
 */
function setTotalPriceInHTML(total)
{
    var totalPlaceholder = document.getElementById('total');
    totalPlaceholder.innerHTML = total.toFixed(2);
}
