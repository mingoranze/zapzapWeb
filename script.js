function enviar() {
    let input = document.querySelector('input').value;
    let link =  `https://wa.me/55${input}`;
    window.open(link);
    }