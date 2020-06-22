import QuestionViewModel from './question-view-model';
import AnswerViewModel from './answer-view-model';
import UserViewModel from './user-view-model';
import ResponseSectionViewModel from './response-section-view-model';

export default class ResponseViewModel {
    id: number;
    completedByUser: UserViewModel;
    sections: ResponseSectionViewModel[];
}