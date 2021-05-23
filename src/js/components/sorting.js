const sorting = () => {
   let number = [];
   const card = document.querySelector('.cat__wrapper')
   for (let i = 0; i < card.children.length; i++){


      for (let j = 0; j < card.children.length; j++) {

         if (!(card.children[i].children[j] == undefined)
         && card.children[i].children[j].classList.contains('cat__wrap-column'))
         {

            for (let v = 0; v < card.children[i].children[j].children.length; v++){

               if (!(card.children[i].children[j].children[v] == undefined)
                  && card.children[i].children[j].children[v].classList.contains('cat__price'))
               {

                  number.push( Number(card.children[i].children[j].children[v].getAttribute('data-price') ))
                  console.log(number);

                  number.sort((a,b) => b - a )

               }

            }

         }

      }

   }

}

export default sorting;
