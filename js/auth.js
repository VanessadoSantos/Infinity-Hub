function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(email && senha){
    localStorage.setItem("user", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Preencha os dados");
  }
}