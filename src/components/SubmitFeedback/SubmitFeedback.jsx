import { useHistory } from 'react-router-dom';

function SubmitFeedback() {
  const history = useHistory();

  // axios
  // .post('/api/feedback', { feeling })
  // .then((response) => {
  //   console.log('feeling added successfully');
  // })
  // .catch((error) => {
  //   console.log('ERROR:', error);
  // });

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
        <button onClick={handleClickNewFeedback} data-testid="next">
          Leave New Feedback
        </button>
      </main>
    </>
  );
}

export default SubmitFeedback;
