const item = document.querySelector(".img2");
const item1 = document.querySelector(".img2-1");
const item2 = document.querySelector(".cute-ghots");
const item3 = document.querySelector(".beedril");
const item4 = document.querySelector(".beedril2");

item.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item1.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item2.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.3rem)" }],
  {
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item3.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(-0.4rem)" }],
  {
    duration: 1500,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item4.animate(
  [{ transform: "translateX(0)" }, { transform: "translateY(0.4rem)" }],
  {
    duration: 2500,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
