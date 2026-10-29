// Troque pelo número real, com código do país e DDD, só dígitos. Ex.: 5555999990000
const WHATSAPP = 'SEUNUMERO';

// Menu mobile
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// Abas "Onde servir", com setas do teclado
const abas = [...document.querySelectorAll('[role=tab]')];
function abrir(aba) {
  abas.forEach(a => {
    const ativa = a === aba;
    a.setAttribute('aria-selected', ativa);
    a.tabIndex = ativa ? 0 : -1;
    document.getElementById(a.getAttribute('aria-controls')).hidden = !ativa;
  });
  aba.focus();
}
abas.forEach((aba, i) => {
  aba.addEventListener('click', () => abrir(aba));
  aba.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') abrir(abas[(i + 1) % abas.length]);
    if (e.key === 'ArrowLeft') abrir(abas[(i - 1 + abas.length) % abas.length]);
  });
});

// Formulário: monta a mensagem e abre o WhatsApp
const form = document.getElementById('pedido');
const status = document.getElementById('status');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  let ok = true;
  ['nome', 'cidade'].forEach(c => {
    const vazio = !d[c].trim();
    form.elements[c].classList.toggle('erro', vazio);
    if (vazio) ok = false;
  });
  status.className = '';
  if (!ok) {
    status.textContent = 'Preencha seu nome e sua cidade para continuar.';
    status.className = 'erro';
    return;
  }
  if (!/^\d{10,15}$/.test(WHATSAPP)) {
    status.textContent = 'Configure o número do WhatsApp em js/script.js.';
    status.className = 'erro';
    return;
  }
  const texto = `Olá! Sou ${d.nome.trim()} (${d.negocio}, ${d.cidade.trim()}). ` +
    `Quero a tabela de atacado: ${d.interesse}.` + (d.msg.trim() ? ` ${d.msg.trim()}` : '');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  status.textContent = 'Abrimos o WhatsApp com a sua mensagem pronta.';
  status.className = 'ok';
});

document.getElementById('ano').textContent = new Date().getFullYear();
