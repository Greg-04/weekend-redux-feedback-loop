import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ReviewPage() {
  //Setting up global count state
  let feeling = useSelector((state) => Number(state.feeling));
  let understanding = useSelector((state) => Number(state.understanding));
  let support = useSelector((state) => Number(state.support));
  let comments = useSelector((state) => state.comments);
  //setting up dispatch
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log('Adding inputs', feeling, understanding, support, comments);
    axios
      .post('/api/feedback', {
        feeling,
        understanding,
        support,
        comments,
      })
      .then((response) => {
        dispatch({
          type: 'RESET_FEEDBACK',
        });
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <div>
        <h2>Review Your Feedback</h2>
        <ul>
          <li>Feeling: {feeling}</li>
          <li>Understanding: {understanding}</li>
          <li>Support: {support}</li>
          <li>Comments: {comments}</li>
          <button data-testid="next" onClick={handleSubmit}>
            <Link to="/submitFeedback">Submit</Link>
          </button>
        </ul>
      </div>
    </>
  );
}

export default ReviewPage;
