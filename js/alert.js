function modal() {
  if (window.showModalDialog) {
    window.showModalDialog(
      "http://pt.stackoverflow.com",
      [1, 4],
      "dialogwidth: 450; dialogheight: 300; resizable: yes"
    );
  } else {
    alert(" “— <i>Eu sou apenas eu — disse Linus, sem saber para onde a conversa se dirigia. — Não sei ser outra pessoa a não ser eu mesmo. Sempre fui assim. Não é muito, mas faço o melhor que posso com o que tenho. Arthur olhou para ele com tristeza. Estendeu a mão e apertou a de Linus brevemente antes de a soltar. — Suponho que o melhor é tudo o que se pode pedir.”</i> | TJ Klune - A Casa no Mar Cerúleo");
  }
}
