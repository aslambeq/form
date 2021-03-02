const form = document.getElementsByTagName('form')[0]
const email = document.getElementById('email')
const fullname = document.getElementById('fullname')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const formInputs = document.querySelectorAll('.form__input')

/* regEx input value validator */
const FormItemValidateHandler = (e, el, validator) => {
  e.preventDefault()
  let test

  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const fullnameRegEx = /^(?=.*?[A-z]).{4,}$/
  const passwordRegEx = /^(?=.*?[A-z0-9]).{4,}$/

  const regExTest = regEx => regEx.test(String(el.value).toLowerCase())

  switch (validator) {
    case 'email':
      test = regExTest(emailRegEx)
      break

    case 'fullname':
      test = regExTest(fullnameRegEx)
      break

    case 'password':
      test = regExTest(passwordRegEx)
      break

    case 'password2':
      test = password2.value && password.value === password2.value
      break
    default:
      break
  }

  /* --invalid modifier switcher */
  if (!test) {
    el.classList.add('form__input--invalid')
    el.classList.remove('form__input--valid')
  } else {
    el.classList.remove('form__input--invalid')
    el.classList.add('form__input--valid')
  }
}

/* form submit feedback with --error / --success modifier */
const formSubmitFeedback = () => {
  formInputs.forEach(i => {
    if (!i.value || i.classList.value.includes('--invalid')) {
      form.classList.remove('form--success')
      form.classList.add('form--error')
    } else {
      form.classList.remove('form--error')
      form.classList.add('form--success')
    }
  })
}

email.addEventListener('input', e => {
  FormItemValidateHandler(e, email, 'email')
})
email.addEventListener('blur', e => {
  FormItemValidateHandler(e, email, 'email')
})

fullname.addEventListener('input', e => {
  FormItemValidateHandler(e, fullname, 'fullname')
})
fullname.addEventListener('blur', e => {
  FormItemValidateHandler(e, fullname, 'fullname')
})

password.addEventListener('input', e => {
  FormItemValidateHandler(e, password, 'password')
  FormItemValidateHandler(e, password2, 'password2')
})
password.addEventListener('blur', e => {
  FormItemValidateHandler(e, password, 'password')
  FormItemValidateHandler(e, password2, 'password2')
})

password2.addEventListener('input', e => {
  FormItemValidateHandler(e, password2, 'password2')
})
password2.addEventListener('blur', e => {
  FormItemValidateHandler(e, password2, 'password2')
})

form.addEventListener('submit', e => {
  FormItemValidateHandler(e, email, 'email')
  FormItemValidateHandler(e, fullname, 'fullname')
  FormItemValidateHandler(e, password, 'password')
  FormItemValidateHandler(e, password2, 'password2')
  formSubmitFeedback(e)
})
