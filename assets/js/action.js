
    //EXPANDED CARDS//
    function expand(card) {
            card.classList.toggle('profile--expanded');

            // If card is not expanded after toggle, add 'unexpanded' class
            if (!card.classList.contains('profile--expanded')) card.classList.toggle('profile--unexpanded');
            // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
            else if (card.classList.contains('profile--expanded') && card.classList.contains('profile--unexpanded')) card.classList.toggle('profile--unexpanded');
        }



        //CAROUSEL//
            const carousel = document.querySelector(".carousel");
            
            const leftArrow = document.querySelector(".left-arrow");
            const rightArrow = document.querySelector(".right-arrow");

            let currentIndex = 0;
            let prevIndex;
            const images = document.querySelectorAll(".carousel-image");

            const totalImages = Object.keys(images).length;

            // Use this in your project, if you're doing it locally
            // const imageWidth = images[1].getBoundingClientRect().x;

            const imageWidth = 520;
            console.log("getbounding1", images[1].getBoundingClientRect());

            leftArrow.addEventListener("click", () => {
              prevIndex = currentIndex;
              currentIndex = (currentIndex - 1 + totalImages) % totalImages;
              carousel.style.transform = `translateX(-${imageWidth}px)`;
              carousel.insertBefore(images[currentIndex], carousel.firstChild);

              setTimeout(() => {
                carousel.style.transform = "";
                carousel.classList.add("sliding-transition");
                backgroundImage.src = images[currentIndex].src.slice(0, -3) + "1000";
              }, 10);

              setTimeout(() => {
                carousel.classList.remove("sliding-transition");
              }, 490);
            });

            rightArrow.addEventListener("click", () => {
              carousel.classList.add("sliding-transition");

              prevIndex = currentIndex;
              currentIndex = (currentIndex + 1) % totalImages;

              carousel.style.transform = `translateX(-${imageWidth}px)`;

              setTimeout(() => {
                carousel.appendChild(images[prevIndex]);
                carousel.classList.remove("sliding-transition");
                carousel.style.transform = "";
              }, 500);
            });



    