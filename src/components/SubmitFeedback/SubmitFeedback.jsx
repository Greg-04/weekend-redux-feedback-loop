import { useHistory } from 'react-router-dom';
import './SubmitFeedback.css';

function SubmitFeedback() {
  const history = useHistory();

  const handleClickNewFeedback = () => {
    history.push('/');
  };

  return (
    <>
      <main className="feedback">
        <div>
          <h2>Feedback!</h2>
        </div>
        <h2>Thank You!</h2>
        <button onClick={handleClickNewFeedback} data-testid="next">
          Leave New Feedback
        </button>
      </main>
    </>
  );
}

export default SubmitFeedback;
