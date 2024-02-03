import { useDispatch } from 'react-redux';

function UnderstandingForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <div>
        Understanding?
        <input type="number"></input>
      </div>
      <div>
        <button>NEXT</button>
      </div>
    </>
  );
}

export default UnderstandingForm;
