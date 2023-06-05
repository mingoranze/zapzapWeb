function enviar() {
    let input = document.querySelector('input').value;
    let inputVazio = document.querySelector('input');
    let link =  `https://web.whatsapp.com/send?phone=55${input}`;
    window.open(link);
    inputVazio.value = '';
    }