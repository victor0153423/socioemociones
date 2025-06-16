function calcularResultado() {
    // Obtener respuestas
    const p1 = document.querySelector('input[name="p1"]:checked')?.value;
    const p2 = document.querySelector('input[name="p2"]:checked')?.value;
    const p3 = document.querySelector('input[name="p3"]:checked')?.value;

    // Validar respuestas
    if (!p1 || !p2 || !p3) {
        alert("¡Por favor responde todas las preguntas!");
        return;
    }

    // Calcular puntuación
    let puntuacion = 0;
    if (p1 === "a") puntuacion += 3;
    if (p2 === "a") puntuacion += 3;
    if (p3 === "a") puntuacion += 3;

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";

    if (puntuacion >= 7) {
        resultado.innerHTML = `
            <h3>¡Excelente! 🌟</h3>
            <p>Tienes habilidades socioemocionales muy desarrolladas.</p>
        `;
    } else if (puntuacion >= 4) {
        resultado.innerHTML = `
            <h3>Vas por buen camino 😊</h3>
            <p>Reconoces las emociones, pero puedes mejorar.</p>
        `;
    } else {
        resultado.innerHTML = `
            <h3>¡Opportunidad para crecer! 🌱</h3>
            <p>Revisa los recursos de esta página para mejorar.</p>
        `;
    }
}