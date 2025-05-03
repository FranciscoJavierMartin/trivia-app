export type Category = keyof typeof mockQuestions;
export type Difficulty = keyof (typeof mockQuestions)[Category];

export const mockQuestions = {
  general: {
    easy: {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    medium: {
      question: "Which element has the chemical symbol 'Au'?",
      answers: ['Silver', 'Gold', 'Copper', 'Iron'],
      correctAnswer: 'Gold',
    },
    hard: {
      question: "Who wrote 'The Canterbury Tales'?",
      answers: [
        'William Shakespeare',
        'Geoffrey Chaucer',
        'John Milton',
        'Charles Dickens',
      ],
      correctAnswer: 'Geoffrey Chaucer',
    },
  },
  science: {
    easy: {
      question: 'What is the closest planet to the Sun?',
      answers: ['Venus', 'Mars', 'Mercury', 'Earth'],
      correctAnswer: 'Mercury',
    },
    medium: {
      question: 'What is the hardest natural substance on Earth?',
      answers: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correctAnswer: 'Diamond',
    },
    hard: {
      question: 'What is the atomic number of Uranium?',
      answers: ['92', '88', '96', '90'],
      correctAnswer: '92',
    },
  },
  history: {
    easy: {
      question: 'In which year did World War II end?',
      answers: ['1945', '1944', '1946', '1943'],
      correctAnswer: '1945',
    },
    medium: {
      question: 'Who was the first Emperor of Rome?',
      answers: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
      correctAnswer: 'Augustus',
    },
    hard: {
      question: 'In which year was the Magna Carta signed?',
      answers: ['1215', '1225', '1205', '1235'],
      correctAnswer: '1215',
    },
  },
  sports: {
    easy: {
      question: 'Which sport uses a shuttlecock?',
      answers: ['Tennis', 'Badminton', 'Table Tennis', 'Squash'],
      correctAnswer: 'Badminton',
    },
    medium: {
      question: 'How many players are there in a standard cricket team?',
      answers: ['9', '10', '11', '12'],
      correctAnswer: '11',
    },
    hard: {
      question: 'Who won the first FIFA World Cup in 1930?',
      answers: ['Brazil', 'Argentina', 'Uruguay', 'Italy'],
      correctAnswer: 'Uruguay',
    },
  },
};
