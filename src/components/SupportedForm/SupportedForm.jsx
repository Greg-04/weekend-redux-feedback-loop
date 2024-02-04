import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function SupportedForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How well are you being supported?</h2>
      <div>
        Support?
        <input type="number"></input>
      </div>
      <div>
        <button>
          <Link to="/commentsForm">NEXT</Link>
        </button>
      </div>
    </>
  );
}

export default SupportedForm;
