// Variables para almacenar el usuario y contraseña correctos
const correctUsername = "Wilson";
const correctPassword = "parraga1";

// Obtener elementos del DOM
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loginContainer = document.getElementById("loginContainer");
const forumContainer = document.getElementById("forumContainer");
const commentForm = document.getElementById("commentForm");
const commentsSection = document.getElementById("commentsSection");

// Manejo del formulario de login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim(); // Eliminar espacios en blanco
  const password = document.getElementById("password").value.trim();

  // Validar usuario y contraseña
  if (username === correctUsername && password === correctPassword) {
    // Si los datos son correctos, mostrar el foro y ocultar el formulario de inicio de sesión
    loginContainer.style.display = "none";
    forumContainer.style.display = "block";
  } else {
    // Mostrar mensaje de error si los datos no coinciden
    errorMessage.innerText = "Usuario o contraseña incorrectos.";
  }
});

// Manejo del formulario de comentario
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const commentText = document.getElementById("commentText").value;

  if (commentText.trim() !== "") {
    addComment(commentText);
    document.getElementById("commentText").value = ""; // Limpiar campo de comentario
  }
});

// Función para agregar un comentario
function addComment(text) {
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  
  const commentContent = document.createElement("p");
  commentContent.innerText = text;
  commentDiv.appendChild(commentContent);
  
  // Botones de editar y eliminar
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("comment-buttons");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Eliminar";
  deleteButton.addEventListener("click", function () {
    commentDiv.remove();
  });

  const editButton = document.createElement("button");
  editButton.classList.add('edit-btn');
  editButton.innerText = "Editar";
  editButton.addEventListener("click", function () {
    const newText = prompt("Editar comentario:", commentContent.innerText);
    if (newText) {
      commentContent.innerText = newText;
    }
  });

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);
  commentDiv.appendChild(buttonsDiv);

  commentsSection.appendChild(commentDiv);
}