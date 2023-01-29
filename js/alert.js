function modal() {
  if (window.showModalDialog) {
    window.showModalDialog(
      "http://pt.stackoverflow.com",
      [1, 4],
      "dialogwidth: 450; dialogheight: 300; resizable: yes"
    );
  } else {
    alert(
      " “- Tenha coragem. Seja ousada. Faça barulho. Nunca mude por ninguém exceto por si mesma…” | Erin Morgenstern - O Mar Sem Estrelas"
    );
  }
}
