import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function FeelingForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How are you feeling today?</h2>
      <div>
        Feeling?
        <input type="number"></input>
      </div>
      <div>
        <button><Link to="/understandingForm">NEXT</Link></button>
      </div>
    </>
  );
}

export default FeelingForm;
