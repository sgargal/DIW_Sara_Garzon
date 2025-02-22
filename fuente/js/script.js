document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.imagen-oculta');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log("🧐 Observando:", entry.target); // Ver qué está detectando

            if (entry.isIntersecting) {
                console.log("✅ Imagen visible:", entry.target);
                entry.target.classList.add('paricionImg');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    imagenes.forEach(imagen => {
        observer.observe(imagen);
    });
});