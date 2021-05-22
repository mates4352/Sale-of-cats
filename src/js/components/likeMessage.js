const likeMessage = () => {
   const message = document.querySelectorAll('.message')
   const like = document.querySelectorAll('.cat__like')

   like.forEach((event) => {

      event.addEventListener('click', () => {

         event.classList.toggle('active')

         message.forEach((e) => {

            if (event.classList.contains('active')) {

               if (e.hasAttribute('data-message-1')) {
                  e.classList.add('active')
               }

            } else {

               e.classList.add('active')

            }

            setTimeout(() => {

               e.classList.remove('active')

           }, 800)

         });

      })

   });



}

export default likeMessage;
