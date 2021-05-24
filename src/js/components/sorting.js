const sorting = () => {
   const buttonSort1 = document.getElementById('buttonSort1')
   const buttonSort2 = document.getElementById('buttonSort2')
   const card = document.querySelector('.cat__wrapper')

   let replacedNode;

   const insertAfter = (elem, refElem) => {
      refElem.parentNode.insertBefore(elem, refElem.nextSibling)
   }

   buttonSort1.addEventListener('click', () => {
      const price = document.querySelectorAll('.cat__price')

      for (let i = 0; i < price.length; i++) {
         for (let j = i; j < price.length; j++) {

            if (+(price[i].getAttribute('data-price')) > +(price[j].getAttribute('data-price'))) {

					replacedNode = card.replaceChild(card.children[j], card.children[i]);
               insertAfter(replacedNode, card.children[i])

            }
         }
      }

   })

   buttonSort2.addEventListener('click', () => {
      const price = document.querySelectorAll('.cat__price')

      for (let i = 0; i < price.length; i++) {
         for (let j = i; j < price.length; j++) {

            if (+(price[i].getAttribute('data-price')) < +(price[j].getAttribute('data-price'))) {

               replacedNode = card.replaceChild(card.children[j], card.children[i]);
               insertAfter(replacedNode, card.children[i])

            }
         }
      }

   })





}

export default sorting;
