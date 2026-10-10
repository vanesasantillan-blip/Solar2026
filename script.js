function mostrar(seccion) {
  const resultado = document.getElementById("resultado");

  if (seccion === "proyecto") {
    resultado.innerHTML = `
      <h2>🌱 Nuestro proyecto</h2>
      <p>Vamos a reutilizar materiales que ya no usamos para convertirlos en juegos y objetos nuevos.</p>
    `;
  } else if (seccion === "actividades") {
    resultado.innerHTML = `
      <h2>🎨 ¿Qué vamos a crear?</h2>
      <p>🧩 Juegos de mesa con cartón.</p>
      <p>🎳 Bolos con botellas de plástico.</p>
      <p>🎯 Juegos con tapitas.</p>
      <p>✂️ Manualidades con materiales reutilizados.</p>
    `;
  } else if (seccion === "meses") {
    resultado.innerHTML = `
      <h2>📅 Las etapas del taller</h2>
      <p><strong>Mes 1:</strong> Investigamos y elegimos ideas.</p>
      <p><strong>Mes 2:</strong> Creamos nuestras manualidades.</p>
      <p><strong>Mes 3:</strong> Enseñamos y compartimos juegos.</p>
    `;
  }

  resultado.scrollIntoView({ behavior: "smooth", block: "center" });
}
