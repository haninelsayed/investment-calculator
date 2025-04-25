import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.initialInvestment >= 0 && userInput.annualInvestment >= 0 && userInput.expectedReturn >= 0 && userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange = {handleChange}/>
      {!inputIsValid && <p className="center">Please enter valid input data (duration must not be 0) </p>}
      {inputIsValid && <Results input={userInput} />}
    </>
    
  )
}

export default App
