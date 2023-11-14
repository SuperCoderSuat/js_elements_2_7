const btn = document.body.querySelector('button');
const wrapper = document.body.querySelector('.umwickeln');

let counter = 0;

btn.addEventListener('click', () => {

    const neuesElement = document.createElement('div');

    if (counter % 10 === 0) {

        neuesElement.classList.add('weiss');

    } else {

        neuesElement.classList.add('rechteck');

    }

    neuesElement.textContent = counter;
    wrapper.appendChild(neuesElement);

    counter++;

});