
let words: string[] = [
    'AVESTRUZ',
    'GALAXIA',
    'LABERINTO',
    'UNICORNIO',
    'MURCIELAGO',
    'SOMBRILLA',
    'CANGURO',
    'FESTEJO',
    'LUCIERNAGA',
    'ADIVINANZA',
    'PERSONAJE',
    'PROFESIONAL',
    'CANGREJO',
    'ORQUIDEA',
    'OBSEQUIO',
];

export function getRandomWord() {
    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex]
}
