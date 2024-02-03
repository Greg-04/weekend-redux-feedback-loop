import { useDispatch } from 'react-redux';

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
        <button>NEXT</button>
      </div>
    </>
  );
}

export default FeelingForm;
