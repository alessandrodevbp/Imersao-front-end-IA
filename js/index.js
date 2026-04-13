 document.querySelectorAll('.profiles .profile a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var figure = this.querySelector('figure');
    var nome = figure.querySelector('figcaption').textContent;
    var imagem = figure.querySelector('img').src;
    localStorage.setItem('perfilAtivo', JSON.stringify({ nome: nome, imagem: imagem }));
    window.location.href = this.getAttribute('href');
    
  });
});
 // Recuperar perfil ativo do localStorage e exibir no catálogo
const perfil = JSON.parse(localStorage.getItem('perfilAtivo'));

if (perfil) {
  document.querySelector('.perfil-nome').textContent = perfil.nome;
  document.querySelector('.perfil-img').src = perfil.imagem;
}





