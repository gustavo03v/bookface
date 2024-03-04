function showCreateAccountForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("resetPasswordForm").style.display = "none";
    document.getElementById("createAccountForm").style.display = "block";
}

function showResetPasswordForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createAccountForm").style.display = "none";
    document.getElementById("resetPasswordForm").style.display = "block";
}

function login() {
    // Lógica de login
}

function createAccount() {
    // Lógica para criar uma conta
    alert("Account created successfully!");
}

function resetPassword() {
    // Lógica para redefinir senha
}
