import QuestionViewModel from './question-view-model';

export default class AnswerViewModel {
    id: number;
    text: string;
    question: QuestionViewModel;
}