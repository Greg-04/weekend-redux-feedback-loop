import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function SupportedForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How well are you being supported?</h2>
      <form>
        <div>
          Support?
          <input data-testid="input" type="number" />
        </div>
        <div>
          <button data-testid="next">
            <Link to="/commentsForm">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default SupportedForm;
