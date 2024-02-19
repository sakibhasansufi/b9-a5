const allSeat = document.getElementsByClassName('seat');
let count = 0;
let totalClick = 0;
let clickedOnce = false;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        const seatName = e.target.parentNode.childNodes[1].innerText;
        const className = 'Economy';
        let price = 550;


        if (totalClick >= 4) {
            this.disabled = true;

            alert("You can't book more than four seats");

        }
        else {
            totalClick++;
            this.style.backgroundColor = '#1dd100'
            count = count + 1;
            setInnerText('seat-number', count);
            // total cost
            const totalCost = document.getElementById('total-cost').innerText;
            const convertedCost = parseInt(totalCost);
            document.getElementById('total-cost').innerText = convertedCost + parseInt(price);

            // grand total
            const grandTotal = document.getElementById('grand-total').innerText;
            const convertGrandTotal = parseInt(grandTotal);
            const discountNew = (convertGrandTotal + parseInt(price));
            document.getElementById('grand-total').innerText = discountNew

            // seat name
            const selectedSeat = document.getElementById('selected-seat');
            console.log(selectedSeat)
            const li = document.createElement('li');
            const p = document.createElement('p');
            li.innerText = seatName;
            li.appendChild(p);
            selectedSeat.appendChild(li);
            // price
            const selectedPrice = document.getElementById('selected-price');
            console.log(selectedPrice)
            const li2 = document.createElement('li');
            const p2 = document.createElement('p');
            li2.innerText = price;
            li2.appendChild(p2);
            selectedPrice.appendChild(li2);
            // class    
            const selectedCLass = document.getElementById('selected-class');
            const li3 = document.createElement('li');
            const p3 = document.createElement('p');
            li3.innerText = className;
            li3.appendChild(p3);
            selectedCLass.appendChild(li3);

            // seat left
            const availableSeat = document.getElementById('forty').innerText;
            const convertedAvailableSeat = parseInt(availableSeat);
            document.getElementById('forty').innerText = convertedAvailableSeat - 1;



        }



    });
}

document.getElementById('apply-button').addEventListener('click', function () {
    console.log('clicked');
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement;
    const price = 0;
    console.log(couponCode);
    if (couponCode === 'NEW15') {
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const discountNew = (convertGrandTotal + parseInt(price)) - ((convertGrandTotal + parseInt(price)) * 0.15);
        document.getElementById('grand-total').innerText = discountNew;
        document.getElementById('input-field').value = '';
        this.remove()

    }

    else if (couponCode === 'Couple 20') {
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const discountNew = (convertGrandTotal + parseInt(price)) - ((convertGrandTotal + parseInt(price)) * 0.20);
        document.getElementById('grand-total').innerText = discountNew;
        document.getElementById('input-field').value = '';
        this.remove()

    }


    else {
        alert('wrong coupon');
        document.getElementById('input-field').value = '';
    }

})

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// hidden


function hide() {
    hideElementById('section');
    showElementById('hid');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId2) {
    const element2 = document.getElementById(elementId2);
    element2.classList.remove('hidden');
}



const inputField = document.getElementById('myInput');
const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', function (event) {
    if (!inputField.checkValidity() || inputField.value.trim() === '') {
        event.preventDefault(); 

        if (!inputField.checkValidity()) {
            inputField.focus();
            alert('Please fill in the required field.');
        } else {
            alert('Please enter some text in the input field.');
        }
    }
});







