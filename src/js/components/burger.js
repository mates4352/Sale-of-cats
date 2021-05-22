const burger = () => {
   const Burger = document.querySelector('.burger')
   const Body = document.querySelector('.body')
   const menu = document.querySelector('.menu')

   function aria(aria, value1, value2) {

      if (Burger.getAttribute(aria) === value1) {

         Burger.setAttribute(aria, value2)

      } else {

         Burger.setAttribute(aria, value1)

      }

   }

   Burger.addEventListener('click', () => {

      Burger.classList.toggle('active')
      menu.classList.toggle('active')

      if (Burger.classList.contains('active')) {

         Body.style.overflowY = "hidden"

      } else {

         Body.style.overflowY = "auto"

      }

      aria('aria-hidden', 'true', 'false')
      aria('aria-label', 'Открыть меню', 'Закрыть меню')

   })

}

export default burger;
