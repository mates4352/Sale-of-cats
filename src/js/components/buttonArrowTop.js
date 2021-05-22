const buttonArrowTop = () => {

   const ArrowTop = document.querySelector('.arrowTop')

   window.addEventListener("scroll", () => {

      if (window.scrollY > 0) {

         ArrowTop.style.display = 'block'

      } else {

         ArrowTop.style.display = "none"

      }

   })

   ArrowTop.addEventListener("click", () => {

      window.scrollTo({

         top: 0,
         behavior: 'smooth'

      });

   })

}

export default buttonArrowTop;
