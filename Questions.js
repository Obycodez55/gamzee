// Define an array of question objects
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
    correctAnswer: "Brasilia"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    correctAnswer: "Ottawa"
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
    correctAnswer: "Beijing"
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Luxor", "Aswan"],
    correctAnswer: "Cairo"
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    correctAnswer: "Berlin"
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    question: "What is the capital of Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    correctAnswer: "Jakarta"
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    correctAnswer: "Rome"
  },
  {
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Kazan"],
    correctAnswer: "Moscow"
  },
  {
    question: "Who discovered gravity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctAnswer: "Isaac Newton"
  },
  {
    question: "What year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: "1945"
  },
  {
    question: "Who is the current President of the United States?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
    correctAnswer: "Joe Biden"
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile"
  },
  {
    question: "Who wrote the book '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "J.R.R. Tolkien"
    ],
    correctAnswer: "George Orwell"
  },
  {
    question: "What is the largest country in the world by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    correctAnswer: "Russia"
  },
  {
    question: "Who is the current Prime Minister of the United Kingdom?",
    options: ["Boris Johnson", "Theresa May", "David Cameron", "Tony Blair"],
    correctAnswer: "Boris Johnson"
  },
  {
    question: "What is the capital of South Africa?",
    options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo"
    ],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Kalahari Desert"
    ],
    correctAnswer: "Sahara Desert"
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
      "Abraham Lincoln"
    ],
    correctAnswer: "George Washington"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "F. Scott Fitzgerald",
      "Mark Twain",
      "J.D. Salinger"
    ],
    correctAnswer: "Harper Lee"
  },
  {
    question: "Who is the current Chancellor of Germany?",
    options: [
      "Angela Merkel",
      "Olaf Scholz",
      "Frank-Walter Steinmeier",
      "Helmut Kohl"
    ],
    correctAnswer: "Olaf Scholz"
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: [
      "Jane Austen",
      "Emily Bronte",
      "Charlotte Bronte",
      "Virginia Woolf"
    ],
    correctAnswer: "Jane Austen"
  },
  {
    question: "Who is the current President of Russia?",
    options: [
      "Vladimir Putin",
      "Dmitry Medvedev",
      "Boris Yeltsin",
      "Mikhail Gorbachev"
    ],
    correctAnswer: "Vladimir Putin"
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner"
    ],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    question: "Who is the current President of China?",
    options: ["Xi Jinping", "Hu Jintao", "Jiang Zemin", "Deng Xiaoping"],
    correctAnswer: "Xi Jinping"
  },
  {
    question: "Who is the author of 'The Catcher in the Rye'?",
    options: [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Mark Twain",
      "Harper Lee"
    ],
    correctAnswer: "J.D. Salinger"
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: [
      "Narendra Modi",
      "Manmohan Singh",
      "Rahul Gandhi",
      "Indira Gandhi"
    ],
    correctAnswer: "Narendra Modi"
  },
  {
    question: "Who is the author of 'The Lord of the Rings'?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "George R.R. Martin",
      "J.K. Rowling"
    ],
    correctAnswer: "J.R.R. Tolkien"
  },
  {
    question: "Who is the author of 'The Odyssey'?",
    options: ["Homer", "Virgil", "Sophocles", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    question: "Who is the current President of Mexico?",
    options: [
      "Andrés Manuel López Obrador",
      "Enrique Peña Nieto",
      "Felipe Calderón",
      "Vicente Fox"
    ],
    correctAnswer: "Andrés Manuel López Obrador"
  },
  {
    question: "Who is the author of 'Great Expectations'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "Emily Bronte",
      "Charlotte Bronte"
    ],
    correctAnswer: "Charles Dickens"
  },
  {
    question: "Who is the author of 'The Adventures of Tom Sawyer'?",
    options: [
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "William Faulkner"
    ],
    correctAnswer: "Mark Twain"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "H2", "HO2"],
    correctAnswer: "H2O"
  },
  {
    question: "Which country is the largest by land area?",
    options: ["Canada", "China", "United States", "Russia"],
    correctAnswer: "Russia"
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams"
    ],
    correctAnswer: "George Washington"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correctAnswer: "Mitochondria"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain"
    ],
    correctAnswer: "William Shakespeare"
  },
  {
    question:
      "How many players are on a soccer team on the field at the same time?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11"
  },
  {
    question: "Who is known as the 'Father of Modern Physics'?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctAnswer: "Albert Einstein"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
    correctAnswer: "Blue Whale"
  }
];

// Export the array of question objects
export default questions;
