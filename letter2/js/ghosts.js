const item = document.querySelector(".g1");
const item2 = document.querySelector(".g2");
const item3 = document.querySelector(".kiki");

item.animate(
  [{ transform: "translateX(0rem)" }, { transform: "translateY(-0.2rem)" }],
  {
    duration: 2100,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item2.animate(
  [{ transform: "translateX(0rem)" }, { transform: "translateY(-0.2rem)" }],
  {
    duration: 2300,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item3.animate(
  [{ transform: "translateX(0.2rem)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
