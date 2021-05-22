const menu = () => {
   const headerBlock = document.querySelector('.header__block')
   const headerNav = document.querySelector('.header__nav')
   const Menu = document.querySelector('.menu')

   window.addEventListener('resize', () => {

      if (window.innerWidth < 992) {
         Menu.append(headerNav)
      } else {
         headerBlock.append(headerNav)
      }

   })
}

export default menu;
