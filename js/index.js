// Your code goes here

const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', event => {
    console.log('mouse over');
    headerImg.style.transform = 'scale(0.8)';
    headerImg.style.transition = 'transform 0.8s';

});


const headerMouseLeave = document.querySelector('.intro img');
console.log(headerMouseLeave);

headerMouseLeave.addEventListener('mouseleave', () => {
    console.log('you dbl clicked');
    headerMouseLeave.style.transform = 'scale(1.0)';
    headerMouseLeave.style.transition = 'transform 0.8s';
});



const signUpBtn = document.querySelectorAll('.btn');
console.log(signUpBtn);

signUpBtn.forEach(item => {
    item.addEventListener('click', () => {
        alert("You clicked the Signup button!!");
    });
});



document.addEventListener('keydown', logKey);

function logKey(e) {
    console.log(` Key pressed was: ${e.code}`);
}


document.addEventListener('wheel', () => {
    console.log('wheel being used');
    const textColor = document.querySelector('body');
    textColor.style.color = 'purple';
});


document.addEventListener('scroll', () => {
    const changeH2s = document.querySelectorAll('.text-content h2');
    changeH2s.forEach(item => {
        item.style.color = 'gold';
    });

});


const footer = document.querySelector('footer');
footer.addEventListener('dblclick', () => {
    footer.style.color = 'gold';
    footer.style.backgroundColor = 'purple';
    footer.children[0].style.color = "gold";
    footer.children[0].style.fontSize = '20px';
});


window.addEventListener('resize', () => {
    const newTitle = document.querySelector('.logo-heading');
    newTitle.textContent = "Torture Bus";
    newTitle.style.color = 'gold';

});


const letsGoImg = document.querySelector('.img-content img');
letsGoImg.addEventListener('mouseenter', () => {
    letsGoImg.src = 'https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
    letsGoImg.alt = 'Doggy';

    const letsGoH2 = document.querySelector('.text-content');
    letsGoH2.children[0].textContent = 'Doggy TakeOver';
    letsGoH2.children[1].textContent = 'The dog chased down the bus and chewed through the tires. Next, he crashed through the door, entered the bus and began devouring all of the passengers leaving no survivors. Today, this incident is known as the Torture Bus Massacre.';
});


const navEl = document.querySelectorAll('.nav-link');
navEl.forEach(item => item.addEventListener('focus', () => {
    item.style.color = 'green';
}));




const cardTitle = document.querySelector('.title');
cardTitle.addEventListener('click', function(event) {
    cardTitle.style.fontSize = '20px';
    cardTitle.style.color = "purple";
    cardTitle.style.transition = 'color 0.5s';
    event.stopPropagation();
});


const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', (e) => {
    formSubmit.style.backgroundColor = 'gold';
    formSubmit.style.color = 'purple';
    e.preventDefault();


});