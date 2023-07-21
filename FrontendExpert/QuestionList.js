import React from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  const [questions, submissions] = useQuestionsAndSubmissons();
  
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestions = getSubmissionsByQuestions(submissions);
  const categories = Object.keys(questionsByCategory);
  
  return (
    <>
      {categories.map(category => (
        <Category
          key={category}
          category={category}
          questions={questionsByCategory[category]}
          submissionsByQuestions={submissionsByQuestions}
        />
      ))}
    </>
  ); 
}

function Category({ category, questions, submissionsByQuestions }) {
  const totalQuestions = questions.length;
  const numQuestionsCorrect = questions.reduce((sum, question) => {
    return submissionsByQuestions[question.id] === 'CORRECT' ? sum + 1 : sum;
  }, 0);
  return (
    <div className="category">
      <h2>
        {category} - {numQuestionsCorrect} / {totalQuestions}
      </h2>
      {questions.map(question => (
        <Question
          key={question.id}
          question={question}
          submissionsByQuestions={submissionsByQuestions}
        />
      ))}
    </div>
  );
}

function Question({question, submissionsByQuestions}) {
  const submissionStatus = submissionsByQuestions[question.id];
  const statusClass =
    submissionStatus == null
    ? 'unattempted'
    : submissionStatus.toLowerCase().replace('_', '-');
  return (
    <div className="question">
      <div className={`status ${statusClass}`}/>
      <h3>{question.name}</h3>
    </div>
  )
}

function useQuestionsAndSubmissons() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [questionResponse, submissionResponse] =await Promise.all( [
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL),
      ]);

      const [questions, submissions] = await Promise.all([
        questionResponse.json(),
        submissionResponse.json()
      ])
      setQuestions(questions);
      setSubmissions(submissions);
    };
    fetchData();
  }, [])
  
  return [questions, submissions];
}

function getQuestionsByCategory(questions) {
  const questionsByCategory = {};
  questions.forEach(({category, ...question}) => {
    if(!questionsByCategory.hasOwnProperty(category)) {
      questionsByCategory[category] = [];
    }
    questionsByCategory[category].push(question);
  });
  return questionsByCategory;
}

function getSubmissionsByQuestions(submissions) {
  const submissionsByQuestions = {};
  submissions.forEach(({questionId, status}) => {
    submissionsByQuestions[questionId] = status;
  });
  return submissionsByQuestions;
}


