import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SurveyApplication from './components/Survey';

function App() {
  return (
    <main className="grid">
      <div className="col-12 md:col-10 md:col-offset-1">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SurveyApplication />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
