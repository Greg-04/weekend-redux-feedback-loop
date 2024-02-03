import { useDispatch } from 'react-redux';

function SupportedForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How well are you being supported?</h2>
      <div>
        Support?
        <input></input>
      </div>
      <div>
        <button>NEXT</button>
      </div>
    </>
  );
}

export default SupportedForm;
