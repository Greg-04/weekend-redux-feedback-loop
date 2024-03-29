import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeelingForm.css';

function FeelingForm() {
  //Setting up local state of feeling
  const [inputFeeling, setInputFeeling] = useState('');
  //Setting up useDispatch
  const dispatch = useDispatch();

  const handleAddFeeling = (event) => {
    dispatch({
      type: 'FEELING_ADD',
      payload: inputFeeling,
    });
    // clear form inputs
    setInputFeeling('');
  };
  //handle name input change
  const handleFeelingChange = (event) => {
    console.log(inputFeeling);
    setInputFeeling(event.target.value);
  };

  return (
    <>
      <main className="feeling">
      <h2>How are you feeling today?</h2>
      <form>
        <div>
          Feeling?
          <input
            data-testid="input"
            type="number"
            value={inputFeeling}
            onChange={handleFeelingChange}
          />
        </div>
        <div>
          <button data-testid="next" onClick={handleAddFeeling}>
            <Link to="/understandingForm">NEXT</Link>
          </button>
        </div>
      </form>
      </main>
    </>
  );
}

export default FeelingForm;
