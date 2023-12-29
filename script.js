const container = document.getElementById("imagesContainer");
const getImages = () => {
  for (let i = 0; i < 15; i++) {
    container.innerHTML += `
    <div class="card my-3"><img class="w-100" onload="this.parentElement.style.opacity = 1" src="https://source.unsplash.com/random/500x${
      Math.floor(Math.random() * 301) + 500
    }?sig=${Math.random()}"></div>
   `;
  }
};

getImages();
