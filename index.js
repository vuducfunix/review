const btn = document.querySelector('.submit')

const inputA = document.querySelector('.a')
const inputB = document.querySelector('.b')

btn.addEventListener('click', () => {
    console.log(+inputA.value + +inputB.value);
})
