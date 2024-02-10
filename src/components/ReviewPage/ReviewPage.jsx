import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ReviewPage() {
  //Setting up global count state
  const feeling = useSelector((state) => state.feeling);
  const understanding = useSelector((state) => state.understanding);
  const supported = useSelector((state) => state.supported);
  const comments = useSelector((state) => state.comments);

  return (
    <>
      <div>
        <h2>Review Your Feedback</h2>
        <ul>
          <li>Feeling: {feeling}</li>
          <li>Understanding: {understanding}</li>
          <li>Support: {supported}</li>
          <li>Comments: {comments}</li>
          <button data-testid="next">
            <Link to="/submitFeedback">Submit</Link>
          </button>
        </ul>
      </div>
    </>
  );
}

export default ReviewPage;
