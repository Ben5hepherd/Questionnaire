import { Params } from "../../node_modules/@angular/router";
import { Observable } from '../../node_modules/rxjs';
import QuestionnaireViewModel from './view_models/questionnaire-view-model';

export class ActivatedRouteStub {
    params: Observable<Params>;
}

export class QuestionnaireServiceStub {
    get(id: number): Observable<QuestionnaireViewModel>
    {
      return;
    }
}

export class QuestionServiceStub {
  post(): any {
    return;
  }
}

export class SectionServiceStub {
  post(): any {
    return;
  }
}

export class AuthenticationServiceStub {
  isUserAdmin: boolean;
}

export class MatDialogStub {
  open(): any
  {
    return;
  }
}

export class MatDialogRefStub {
  afterClosed(): any
  {
    return;
  }
}