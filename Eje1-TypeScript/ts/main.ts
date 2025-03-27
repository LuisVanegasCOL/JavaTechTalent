function saludar(nombre: string): string {
    return "Hola, " + nombre;
}

console.log(saludar("luis")); // ❌ Error antes de ejecutar: "nombre debe ser un string"
