const burger = () => {
   const Burger = document.querySelector('.burger')
   const Body = document.querySelector('.body')
   const menu = document.querySelector('.menu')


   Burger.addEventListener('click', () => {

      Burger.classList.toggle('active')
      menu.classList.toggle('active')

      if (Burger.classList.contains('active')) {

         Body.style.overflowY = "hidden"
         Burger.setAttribute('aria-label', 'Закрыть меню')
         menu.setAttribute('aria-hidden', 'false')

      } else {

         Body.style.overflowY = "auto"
         Burger.setAttribute('aria-label', 'Открыть меню')
         menu.setAttribute('aria-hidden', 'true')

      }

   })

}

export default burger;
