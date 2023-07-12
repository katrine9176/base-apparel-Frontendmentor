const input = document.querySelector('.input input')
const err = document.querySelector('.error')
const errImg = document.querySelector('.err')
const btn = document.querySelector('.input button')
const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const emailValidation = () => {
	if (!re.test(input.value)) {
		err.style.display = 'block'
		errImg.style.display = 'block'
		input.style.border = '2px solid hsl(0, 93%, 68%)'
	} else {
		err.style.display = 'none'
		errImg.style.display = 'none'
		input.style.border = 'solid 0.5px hsl(0, 36%, 70%)'
	}
}

btn.addEventListener('click', emailValidation)
