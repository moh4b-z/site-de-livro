// Verifique se o usuário está logado ou não
// Por simplicidade, definimos um estado de login como uma variável booleana
// Aqui, estamos supondo que o usuário está deslogado
const usuarioLogado = false;

// Se o usuário estiver logado, oculte os itens de login e inscrição e mostre o item de logout
if (usuarioLogado) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
}
