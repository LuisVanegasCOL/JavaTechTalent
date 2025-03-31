"use strict";
// Lista de preguntas y opciones con la respuesta correcta
const questions = [
    { question: "¿Qué significa HTML?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Hyper Transfer Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "¿Cuál de las siguientes etiquetas se usa para definir un enlace en HTML?", options: ["<a>", "<link>", "<href>", "<connect>"], answer: "<a>" },
    { question: "¿Qué propiedad de CSS se usa para cambiar el color del texto?", options: ["text-color", "color", "font-color", "background-color"], answer: "color" },
    { question: "¿Cuál de las siguientes es una ventaja de SCSS sobre CSS?", options: ["Uso de variables", "Mayor compatibilidad con navegadores antiguos", "No permite anidamiento de reglas", "No admite mixins"], answer: "Uso de variables" },
    { question: "¿Cómo se define una variable en SCSS?", options: ["$color: red;", "var color = red;", "--color: red;", "let color = red;"], answer: "$color: red;" },
    { question: "¿Qué método en JavaScript convierte un string en un número entero?", options: ["toInt()", "parseInt()", "Number.parseString()", "int()"], answer: "parseInt()" },
    { question: "¿Qué tipo de datos NO existe en TypeScript?", options: ["string", "any", "boolean", "variable"], answer: "variable" },
    { question: "¿Cómo se define un tipo de dato en TypeScript?", options: ["let edad: number = 25;", "number edad = 25;", "edad: number = 25;", "let edad = number 25;"], answer: "let edad: number = 25;" },
    { question: "¿Qué comando en Git se usa para ver el historial de commits?", options: ["git log", "git history", "git commit --list", "git status"], answer: "git log" },
    { question: "¿Cuál es el comando correcto para clonar un repositorio en Git?", options: ["git clone <URL>", "git pull <URL>", "git fork <URL>", "git checkout <URL>"], answer: "git clone <URL>" },
    { question: "¿Qué atajo de teclado en Visual Studio Code abre la terminal integrada?", options: ["Ctrl + Shift + T", "Ctrl + J", "Ctrl + Alt + T", "Shift + T"], answer: "Ctrl + J" },
    { question: "¿Qué extensión en Visual Studio Code es recomendada para trabajar con TypeScript?", options: ["ESLint", "Prettier", "TSLint", "Live Server"], answer: "TSLint" },
    { question: "¿Cuál de los siguientes NO es un lenguaje de programación?", options: ["Python", "HTML", "JavaScript", "C++"], answer: "HTML" },
    { question: "¿Cuál es el propósito de Git?", options: ["Crear sitios web", "Gestionar bases de datos", "Control de versiones", "Diseñar gráficos"], answer: "Control de versiones" },
    { question: "¿Cuál de los siguientes es un framework de JavaScript?", options: ["Django", "Laravel", "React", "Spring"], answer: "React" }
];
// Variables para controlar el puntaje y el índice de la pregunta actual
let currentQuestionIndex = 0;
let score = 0;
let answers = []; // Array para almacenar preguntas con sus respuestas correctas y las seleccionadas
// Elementos del DOM para mostrar el quiz y el puntaje
const quizContainer = document.getElementById("quiz-container");
const scoreText = document.getElementById("score");
// Función que carga la pregunta actual y las opciones de respuesta
function loadQuestion() {
    // Limpiar el contenedor antes de cargar una nueva pregunta
    quizContainer.innerHTML = "";
    // Si todas las preguntas han sido respondidas, mostrar el puntaje final y las respuestas correctas/incorrectas
    if (currentQuestionIndex >= questions.length) {
        quizContainer.innerHTML = `<h2>Quiz Terminado</h2><p>Tu puntaje final es: ${score}</p>`;
        // Mostrar las respuestas solo si se respondió incorrectamente
        quizContainer.innerHTML += `<h3>Respuestas:</h3><ul>`;
        answers.forEach(answer => {
            if (answer.selectedAnswer !== answer.correctAnswer) { // Solo mostrar las respuestas incorrectas
                quizContainer.innerHTML += `<li><strong>Pregunta:</strong> ${answer.question} <br> 
                    <strong>Tu respuesta:</strong> ${answer.selectedAnswer} <br>
                    <strong>Respuesta correcta:</strong> ${answer.correctAnswer}</li>`;
            }
        });
        return;
    }
    // Obtener la pregunta actual
    const questionData = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<p>${questionData.question}</p>`;
    // Crear botones para cada opción de respuesta
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "quiz-button";
        button.addEventListener("click", () => checkAnswer(option, questionData.answer, questionData.question));
        quizContainer.appendChild(button);
    });
}
// Función que verifica si la respuesta seleccionada es correcta o incorrecta
function checkAnswer(selected, correct, question) {
    // Si la respuesta es correcta, aumentar el puntaje
    if (selected === correct) {
        score++;
        scoreText.innerText = `Puntaje: ${score}`;
    }
    // Almacenar la pregunta, la respuesta correcta y la seleccionada
    answers.push({
        question,
        correctAnswer: correct,
        selectedAnswer: selected
    });
    currentQuestionIndex++; // Avanzar a la siguiente pregunta
    loadQuestion(); // Cargar la siguiente pregunta
}
// Cargar la primera pregunta
loadQuestion();
