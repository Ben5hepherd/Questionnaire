import SectionViewModel from './section-view-model';

export default class QuestionnaireViewModel {
    id: number;
    ordinal: number;
    name: string;
    sections: SectionViewModel[];
}