const allSeat = document.getElementsByClassName('seat');
let count = 0;
let totalClick = 0;
let clickedOnce = false;


for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        const seatName = e.target.parentNode.childNodes[1].innerText;
        const price = 550;
        const className = 'Economy';

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

        }


    });
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
