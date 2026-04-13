 document.querySelectorAll('.profiles .profile a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var figure = this.querySelector('figure');
    var nome = figure.querySelector('figcaption').textContent;
    var imagem = figure.querySelector('img').getAttribute('src');
    localStorage.setItem('perfilAtivo', JSON.stringify({ nome: nome, imagem: imagem }));
    window.location.href = this.getAttribute('href');
    
  });
});
 // Recuperar perfil ativo do localStorage e exibir no catálogo
var perfil = JSON.parse(localStorage.getItem('perfilAtivo'));
if (perfil) {
  // Atualiza o nome no navbar
  var nomeLink = document.querySelector('.kids-link');
  if (nomeLink) nomeLink.textContent = perfil.nome;

  // Atualiza a imagem do perfil no navbar
  var profileIcon = document.querySelector('.profile-icon');
  if (profileIcon) profileIcon.setAttribute('src', perfil.imagem);
} 




