const carrosFavoritos = [
    "Ferrari 488", 
    "Lamborghini Urus", 
    "Bmw M5", 
    "Porsche GT3 RS", 
    "Mustang",
]

console.log(carrosFavoritos) // Pode-se perceber que está em ordem "aleátoria", na ordem que eu mesmo coloquei, não obedecendo nenhuma forma de ordem alfábetica

carrosFavoritos.sort();

console.log(carrosFavoritos);

// Agora, logo após o comando .sort, ele vai colocar em ordem alfábetica.

// A    Bmw    C D E      Ferrari       G H I J K       Lamborghini   Mustang   N O     Porsche