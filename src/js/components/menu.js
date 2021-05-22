const menu = () => {
   const headerBlock = document.querySelector('.header__block')
   const headerNav = document.querySelector('.header__nav')
   const Menu = document.querySelector('.menu')
   const W = window.innerWidth

   function adaptivMenu(value1,value2) {
      if (value1 < value2) {
         Menu.append(headerNav)
      } else {
         headerBlock.append(headerNav)
      }
   }

   adaptivMenu(W,992)
   window.addEventListener('resize', () => {
      adaptivMenu(W,992)
   })

}

export default menu;
