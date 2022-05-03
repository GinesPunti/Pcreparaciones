let titulo = document.getElementById("title");

let typewriter = new Typewriter(titulo, {
    loop: true
});

typewriter.typeString('PC Reparaciones!')
    .pauseFor(500)
    .deleteAll()
    .typeString('Reparamos Notebooks y computadoras de Escritorio')
    .pauseFor(500)
    .deleteChars(7)
    .start();





    