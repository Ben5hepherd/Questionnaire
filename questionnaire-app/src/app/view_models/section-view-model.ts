import QuestionViewModel from './question-view-model';

export default class SectionViewModel {
    id: number;
    ordinal: number;
    name: string;
    questions: QuestionViewModel[];
}