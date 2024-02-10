import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function UnderstandingForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <form>
        <div>
          Understanding?
          <input data-testid="input" type="number"/>
        </div>
        <div>
          <button data-testid="next">
            <Link to="/supportedForm">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default UnderstandingForm;
