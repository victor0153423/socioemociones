function calcularResultado() {
  const respuestas = {
    p1: document.querySelector('input[name="p1"]:checked')?.value,
    p2: document.querySelector('input[name="p2"]:checked')?.value,
    p3: document.querySelector('input[name="p3"]:checked')?.value
  };

  if (!respuestas.p1 || !respuestas.p2 || !respuestas.p3) {
    alert("¡Por favor responde todas las preguntas!");
    return;
  }

  // Lógica de puntuación
  let puntuacion = 0;
  if (respuestas.p1 === "a") puntuacion += 3;
  if (respuestas.p2 === "a") puntuacion += 3;
  if (respuestas.p3 === "a") puntuacion += 3;

  // Mostrar resultado
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";

  if (puntuacion >= 7) {
    resultado.innerHTML = `
      <h3>¡Excelente! 🌟</h3>
      <p>Tienes habilidades socioemocionales muy desarrolladas. Sigue practicando la empatía, gratitud y respeto.</p>
    `;
  } else if (puntuacion >= 4) {
    resultado.innerHTML = `
      <h3>Vas por buen camino 😊</h3>
      <p>Reconoces las emociones, pero puedes mejorar. Intenta ser más consciente de los demás.</p>
    `;
  } else {
    resultado.innerHTML = `
      <h3>¡Opportunidad para crecer! 🌱</h3>
      <p>Revisa los videos y recursos de esta página para fortalecer tus socioemociones.</p>
    `;
  }
}