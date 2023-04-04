function greet() {
  const nameInput = document.getElementById("nameInput");
  const greeting = document.getElementById("greeting");
  const name = nameInput.value;

  greeting.innerText = `Hello, ${name}!`;
}
