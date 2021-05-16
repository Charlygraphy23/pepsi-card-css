const card = document.querySelector(".card");
const container = document.querySelector(".container");
const pepsiImage = document.getElementById("pepsi");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  card.style.transition = `none`;
  //   pepsiImage.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `0.5s all ease-in-out`;
  //   pepsiImage.style.transform = "translateZ(100px)";
});
