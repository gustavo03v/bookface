function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de lógica de autenticação
    if (username === "user" && password === "pass") {
        alert("Login successful!");
        // Redirecionar para a página principal ou realizar outras ações após o login
    } else {
        alert("Invalid username or password");
    }
}
