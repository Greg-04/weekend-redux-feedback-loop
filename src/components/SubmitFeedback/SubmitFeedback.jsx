import { useHistory } from 'react-router-dom';

function SubmitFeedback() {
  const history = useHistory();

  const handleClickNewFeedback = () => {
    history.push('/');
  };

  return (
    <>
      <div>
        <h2>Feedback!</h2>
      </div>
      <main>
        <h2>Thank You!</h2>
        <button onClick={handleClickNewFeedback} data-testid="next">Leave New Feedback</button>
      </main>
    </>
  );
}

export default SubmitFeedback;
