import { Model } from 'survey-core';
import 'survey-core/i18n/spanish';
import { Survey } from 'survey-react-ui';
import useLocalStorage from '../hooks/useLocalStorage';

const SurveyApplication = ({ encuesta }) => {
  const survey = new Model(encuesta);
  survey.locale = 'es';
  const [answers, setAnswers] = useLocalStorage('answers', {});
  const [anwered, setAnswered] = useLocalStorage('anwered', false);
  survey.data = answers;

  const onCompleteSurvey = (result) => {
    alert(JSON.stringify(result.data));
  };

  const onChange = (result) => {
    setAnswers(result.data);
  };

  return (
    <div className="grid">
      <div className="col-12">
        {anwered ? (
          <div className="flex"></div>
        ) : (
          <Survey model={survey} onComplete={onCompleteSurvey} onValueChanged={onChange} />
        )}
      </div>
    </div>
  );
};

export default SurveyApplication;
