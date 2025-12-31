
// Fix: Defined and exported the shared types to resolve "not a module" errors in components.

/**
 * Enumeration of available question types in the quiz.
 */
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
}

/**
 * Interface representing a quiz question structure.
 */
export interface Question {
  id: number;
  type: QuestionType;
  questionText: string;
  correctAnswer: string;
  explanation: string;
  audioUrl?: string;
  options?: string[];
}

/**
 * Interface for storing user's answer results.
 */
export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}
