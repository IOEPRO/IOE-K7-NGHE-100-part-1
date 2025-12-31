
import { Question, QuestionType } from './types';

// Fix: Populating and exporting QUIZ_DATA to resolve the module error in ResultScreen.
// Data for IOE K6 - Set 07.
export const QUIZ_DATA: Question[] = [
  {
    id: 1,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Choose the word whose underlined part is pronounced differently: A. face B. take C. fan D. name",
    correctAnswer: "fan",
    options: ["face", "take", "fan", "name"],
    explanation: "In 'fan', the 'a' is pronounced /æ/, while in others (face, take, name) it is /eɪ/.",
  },
  {
    id: 2,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "My father is a doctor. He works in a h_sp_t_l.",
    correctAnswer: "hospital",
    explanation: "A doctor works in a hospital.",
  },
  {
    id: 3,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "How many ____ are there in your classroom? - There are thirty.",
    correctAnswer: "students",
    options: ["student", "students", "a student", "the student"],
    explanation: "'How many' is used with plural countable nouns.",
  },
  {
    id: 4,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "I usually go to school ____ foot.",
    correctAnswer: "on",
    explanation: "The correct preposition is 'on' in the fixed phrase 'on foot' (meaning walking).",
  },
  {
    id: 5,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "What do you do ____ your free time?",
    correctAnswer: "in",
    options: ["on", "at", "in", "for"],
    explanation: "The fixed expression is 'in your free time'.",
  },
  {
    id: 6,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Odd one out: A. Apple B. Banana C. Carrot D. Orange",
    correctAnswer: "Carrot",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    explanation: "Carrot is a vegetable, whereas Apple, Banana, and Orange are fruits.",
  },
  {
    id: 7,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "We have English on Monday and W_dn_sd_y.",
    correctAnswer: "Wednesday",
    explanation: "The spelling for the day after Tuesday is Wednesday.",
  },
  {
    id: 8,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Look! The students ____ soccer in the school yard.",
    correctAnswer: "are playing",
    options: ["play", "plays", "is playing", "are playing"],
    explanation: "Present continuous 'are playing' is used for an action in progress triggered by 'Look!'.",
  },
  {
    id: 9,
    type: QuestionType.FILL_IN_BLANK,
    questionText: "There are four ____ in a year: spring, summer, autumn, and winter.",
    correctAnswer: "seasons",
    explanation: "Spring, summer, autumn, and winter are the four seasons of the year.",
  },
  {
    id: 10,
    type: QuestionType.MULTIPLE_CHOICE,
    questionText: "Which is the longest river in the world?",
    correctAnswer: "The Nile",
    options: ["The Amazon", "The Nile", "The Mekong", "The Red River"],
    explanation: "The Nile is traditionally considered the longest river in the world.",
  }
];
