let users = [];

function registerUser() {
    const firstName = document.getElementById("firstnare").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Confirmepassword").value;
    const dob = document.getElementById("txtData").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Cria um objeto de usuário
    const user = {
        firstName,
        lastName,
        email,
        number,
        password,
        dob,
        gender
    };

    // Adiciona o usuário ao array de usuários
    users.push(user);

    // Limpa os campos do formulário
    document.getElementById("user-form").reset();

    // Você pode fazer o que quiser com os dados do usuário aqui, como enviar para um servidor ou armazenar em localStorage
    console.log("Usuário registrado:", user);
}