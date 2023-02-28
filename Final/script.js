const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  const id = letter.id;
  const letterTitle = letter.querySelector("h2");
  const letterImg = letter.querySelector("img");
  const letterDesc = letter.querySelector("p");

  letter.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    letterTitle.style.transform = `translate(-50%, -50%) rotateX(${y / 5}deg) rotateY(${x / 5}deg)`;
    letterImg.style.transform = `translate(-50%, -50%) rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
    letterDesc.style.transform = `translate(-50%, -50%) rotateX(${y / 5}deg) rotateY(${x / 5}deg)`;
  });

  letter.addEventListener("mouseleave", (e) => {
    letterTitle.style.transform = "translate(-50%, -50%) rotate (0deg) rotateY(0deg)";
    letterImg.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
    letterDesc.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
    });
    });