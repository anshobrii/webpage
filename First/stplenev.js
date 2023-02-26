 window.addEventListener('scroll', function() {
                    // Calculate the offset value based on the current scroll position
                    var offset = window.pageYOffset;
                    // Apply the offset value to the content section using CSS transforms
                    document.querySelector('main').style.transform = 'translateY(' + offset + 'px)';
                  });
            const letters = document.querySelectorAll(".letter");
            let delay = 0;
            letters.forEach(letter => {
                const img = letter.querySelector("img");
                const imgHeight = img.height;
        
                letter.addEventListener("mouseenter", () => {
                    img.style.transform = `translateY(-${imgHeight/4}px)`;
                    img.style.transition = "transform 0.5s ease";
                    letter.style.boxShadow = "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff";
                    setTimeout(() => {
                        img.style.transform = `translateY(0px)`;
                        img.style.transition = "transform 0.5s ease";
                    }, 500);
                });
        
                letter.addEventListener("mouseleave", () => {
                    img.style.transform = `translateY(0px)`;
                    img.style.transition = "transform 0.5s 
                    ease";
                    letter.style.boxShadow = "none";
                    });
                    letter.style.animationDelay = `${delay}s`;
                    delay += 0.3;
                });
                const letters = document.querySelectorAll('.slider li a');
                const letterButtons = document.querySelector('.letter-buttons');
                
                letters.forEach(letter => {
                  const button = document.createElement('button');
                  button.innerText = letter.innerText.charAt(0);
                  button.addEventListener('click', () => {
                    letter.click();
                  });
                  letterButtons.appendChild(button);
                });
                
                const buttonList = document.querySelectorAll('.letter-buttons button');
                buttonList[0].classList.add('active');
                
                buttonList.forEach(button => {
                  button.addEventListener('click', () => {
                    buttonList.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                  });
                });
                                
