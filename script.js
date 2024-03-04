let typed = new Typed('#change', {
  strings: ['Front-end Developer','Designer', 'Youtuber', 'Editor'],
  typeSpeed: 100,    
  backSpeed: 100,    
  loop: true,       
});



 function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "outerdiv") {
                x.className += " responsive";
            } else {
                x.className = "outerdiv";
            }
        }
            const sendButton = document.querySelector('.button');
            const messageConfirmation = document.getElementById('messageConfirmation');

            sendButton.addEventListener('click', () => {
                messageConfirmation.classList.remove('hidden');
            });
