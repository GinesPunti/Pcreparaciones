let titulo = document.getElementById("title");

let typewriter = new Typewriter(titulo, {
    loop: true
});

typewriter.typeString('PC Reparaciones!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Reparamos Nootebooks y computadoras de Escritorio')
    .pauseFor(1500)
    .deleteChars(7)
    .start();

