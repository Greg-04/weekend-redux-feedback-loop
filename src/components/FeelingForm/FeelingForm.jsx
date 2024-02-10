import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function FeelingForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form>
        <div>
          Feeling?
          <input data-testid="input" type="number"/>
        </div>
        <div>
          <button data-testid="next">
            <Link to="/understandingForm">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default FeelingForm;
