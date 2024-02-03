import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import ReviewPage from '../ReviewPage/ReviewPage';

function App() {
  return (
    <>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
        </div>
        <main>
          <FeelingForm/>
          <UnderstandingForm/>
          <SupportedForm/>
          <CommentsForm/>
          <ReviewPage/>
        </main>
    </>
  );
}

export default App;
