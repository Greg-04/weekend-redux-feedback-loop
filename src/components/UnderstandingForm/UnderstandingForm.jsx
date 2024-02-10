import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UnderstandingForm() {
  //Setting up local state of understanding
  const [inputUnderstanding, setInputUnderstanding] = useState('');
  //setting up dispatch
  const dispatch = useDispatch();

  //add passenger handle
  const handleAddUnderstanding = (event) => {
    dispatch({
      type: 'UNDERSTANDING_ADD',
      payload: inputUnderstanding,
    });

    //clear form field
    setInputUnderstanding('');
  };

  //handle name input change
  const handleChangeUnderstanding = (event) => {
    console.log(inputUnderstanding);
    setInputUnderstanding(event.target.value);
  };

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <form>
        <div>
          Understanding?
          <input
            data-testid="input"
            type="number"
            onChange={handleChangeUnderstanding}
            value={inputUnderstanding}
          />
        </div>
        <div>
          <button onClick={handleAddUnderstanding} data-testid="next">
            <Link to="/supportedForm">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default UnderstandingForm;
