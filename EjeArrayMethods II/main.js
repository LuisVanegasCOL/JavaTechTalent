// 1 reclamacion
const dinner =[];
dinner.push("🍔", "🌭");
console.log(dinner);

//2  reclamacion 

dinner.push("🍟", "🍟");
console.log(dinner);
// 3 reclamacion 

dinner.push("🧋", "🧋");
console.log(dinner);

// 4 reclamacion

// reverse
dinner.reverse();
console.log(dinner);
// agregar coctel

dinner.unshift("🍸");
console.log(dinner);

// 5 reclamacion

const ticket01 = ["🍺", "🍺", "🥜"]; 
const ticket02 = ["🍺", "🥪", "🥙"]; 

const combinedTicket = ticket01.concat(ticket02);
console.log(combinedTicket);


// arreglarcuenta  que elimines la primera 🍺 elemento con shift() y el último con pop()
combinedTicket.shift("🍺")
console.log(combinedTicket);

combinedTicket.pop("🥙");
console.log(combinedTicket);
