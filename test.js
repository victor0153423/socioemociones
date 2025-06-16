function calcularResultado() {
    // Calcular puntaje
    let puntaje = 0;
    
    // Preguntas 1-10
    for (let i = 1; i <= 10; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        
        if (!respuesta) {
            alert("¡Por favor responde todas las preguntas!");
            return;
        }
        
        if (respuesta.value === "a") puntaje += 3;
        else if (respuesta.value === "b") puntaje += 1;
    }

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";

    if (puntaje >= 25) {
        resultado.innerHTML = `
            <h3>¡Excelente desarrollo socioemocional! 🌟</h3>
            <p>Tu puntuación: ${puntaje}/30</p>
            <p>Demuestras alta empatía, gratitud y respeto. Sigue siendo un ejemplo para los demás.</p>
        `;
    } else if (puntaje >= 15) {
        resultado.innerHTML = `
            <h3>Buenas habilidades 😊</h3>
            <p>Tu puntuación: ${puntaje}/30</p>
            <p>Tienes bases sólidas pero puedes profundizar en la conciencia emocional.</p>
        `;
    } else {
        resultado.innerHTML = `
            <h3>Área de oportunidad 🌱</h3>
            <p>Tu puntuación: ${puntaje}/30</p>
            <p>Revisa los recursos sobre empatía, gratitud y respeto para mejorar tus relaciones.</p>
        `;
    }
}