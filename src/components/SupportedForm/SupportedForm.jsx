import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SupportedForm() {
  //Setting up local state of understanding
  const [inputSupport, setInputSupport] = useState('');
  //setting up dispatch
  const dispatch = useDispatch();

  //add passenger handle
  const handleAddSupport = (event) => {
    dispatch({
      type: 'SUPPORT_ADD',
      payload: inputSupport,
    });

    //clear form field
    setInputSupport('');
  };

  //handle name input change
  const handleChangeSupport = (event) => {
    console.log(inputSupport);
    setInputSupport(event.target.value);
  };

  return (
    <>
      <h2>How well are you being supported?</h2>
      <form>
        <div>
          Support?
          <input
            data-testid="input"
            type="number"
            onChange={handleChangeSupport}
            value={inputSupport}
          />
        </div>
        <div>
          <button onClick={handleAddSupport} data-testid="next">
            <Link to="/commentsForm">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default SupportedForm;
