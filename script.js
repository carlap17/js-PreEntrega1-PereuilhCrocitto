function obtenerNotaValida(materia) {
    let nota;
    do {
        nota = parseFloat(prompt(`Ingrese la nota de ${materia} (1 al 10):`));
        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("El valor ingresado es incorrecto. Por favor ingrese una nota válida entre 1 y 10.");
        }
    } while (isNaN(nota) || nota < 1 || nota > 10);
    return nota;
}

function aproboMateria(nota) {
    return nota >= 7;
}

function calcularPromedio(notas) {
    const total = notas.reduce((sum, nota) => sum + nota, 0);
    return total / notas.length;
}

function calcularPromedioNotas() {
    const numAlumnos = parseInt(prompt("Por favor ingrese la cantidad de alumnos:"));

    for (let i = 1; i <= numAlumnos; i++) {
        let resultados = `\nAlumno ${i}:\n\n`;

        const lengua = obtenerNotaValida("Lengua");
        const matematicas = obtenerNotaValida("Matemáticas");
        const cienciasNaturales = obtenerNotaValida("Ciencias Naturales");
        const cienciasSociales = obtenerNotaValida("Ciencias Sociales");

        const promedio = calcularPromedio([lengua, matematicas, cienciasNaturales, cienciasSociales]);

        resultados += `Promedio del alumno ${i}: ${promedio.toFixed(2)}\n\n`;

        resultados += `Lengua: ${aproboMateria(lengua) ? "Aprobado" : "Desaprobado"}\n`;
        resultados += `Matemáticas: ${aproboMateria(matematicas) ? "Aprobado" : "Desaprobado"}\n`;
        resultados += `Lengua: ${aproboMateria(cienciasNaturales) ? "Aprobado" : "Desaprobado"}\n`;
        resultados += `Lengua: ${aproboMateria(cienciasSociales) ? "Aprobado" : "Desaprobado"}\n`;
        alert(resultados);        
    }
}

calcularPromedioNotas();
