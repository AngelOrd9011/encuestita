import { Model } from 'survey-core';
import 'survey-core/i18n/spanish';
import { Survey } from 'survey-react-ui';
import { surveyJson } from '../utils/constants';

const SurveyApplication = () => {
  const survey = new Model(surveyJson);
  survey.locale = 'es';

  const onCompleteSurvey = (result) => {
    alert(JSON.stringify(result.data));
  };

  return (
    <div className="grid">
      <div className="col-12">
        <h1 className="animate__animated animate__bounce">¡Bienvenido!</h1>
      </div>
      <div className="col-12">
        <Survey model={survey} onComplete={onCompleteSurvey} />
      </div>
    </div>
  );
};

export default SurveyApplication;
