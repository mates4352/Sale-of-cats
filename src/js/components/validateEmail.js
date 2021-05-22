
const validateEmail = () => {
   const input = document.querySelector('.footer__email')
   const button = document.querySelector('.footer__btn')
   const form = document.querySelector('.footer__form')

   const email = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   }

   button.addEventListener('click', (event) => {

      event.preventDefault();

      if (email(input.value) === false) {

         input.classList.remove('validateFalse')
         input.classList.add('validateTrue')
         form.action = '#'

      } else {

         input.classList.remove('validateTrue')
         input.classList.add('validateFalse')
         form.action = 'addres'

      }

   })

}

export default validateEmail;


