import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Hint from "./components/Hint";
import Form from './components/Form';
import SubmitInfo from './components/SubmitInfo';
import MasteredInfo from './components/MasteredInfo';

function App() {
   // nepal quiz questionaire data
   const [data, setData] = useState([
    {buzz: "What is the capital of Nepal?",
    fact: "Kathmandu",
    difficulty: "easy",
    hint: "Something related to unification of Kathmandu valley into Nepal",
    mastered: false,
    correctedAns: false},   
    {buzz: "What is a famous pilgrimage site in Nepal Himalayas, both for Buddhist and Hindu pilgrims?",
    fact: "Muktinath",
    difficulty: "medium",
    hint: "It is the temple located at the highest altitude in the world",
    mastered: false,
    correctedAns: false},
    {buzz: "Do you know which lunar calender does Nepal follow?",
    fact: "Bikram Sambat",
    difficulty: "hard",
    hint: "It was introduced in the 9th century",
    mastered: false,
    correctedAns: false},
    {buzz: "What's the name of the people living in the valleys of Khumbu, Eastern Nepal, who provide most of the porters for trekkers?",
    fact: "Sherpa",
    difficulty: "easy",
    hint: "They are tibetan ethnic groups native to the most mountainous regions of Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the name of the beautiful lake by which Pokhara lies?",
    fact: "Phewa", 
    difficulty: "medium",
    hint: "It is the biggest lake in Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the main religion in Nepal?",
    fact: "Hinduism",
    difficulty: "easy",
    hint: "It covers 90% of Nepal's population",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the lake located at highest altitude in Nepal?",
    fact: "Tilicho",
    difficulty: "medium",
    hint: "It is the lake located at the highest altitude in the world",
    mastered: false,
    correctedAns: false},
    {buzz: "Why is the most spoken language in Nepal?",
    fact: "Nepali",
    difficulty: "medium",
    hint: "It is not spoken as the main language anywhere in the world",
    mastered: false,
    correctedAns: false},
    {buzz: "Who is the first elected prime minister of Nepal?",
    fact: "BP Koirala",
    difficulty: "easy",
    hint: "He is also the founder of Nepali Congress",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the longest river in Nepal?",
    fact: "Karnali",
    difficulty: "easy",
    hint: "It lies in one of the western states in Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the national animal of Nepal?",
    fact: "Cow",
    difficulty: "easy",
    hint: "It is worshipped as an incarnation of god in most parts of Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is Nepali name for Mt. Everest?",
    fact: "Sagarmatha",
    difficulty: "hard",
    hint: "It's literal meaning is Peak of Heaven",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the biggest festival in Nepal?",
    fact: "Dashain",
    difficulty: "medium",
    hint: "During this festival, there is almost 1 month of holiday in Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the national flower of Nepal?",
    fact: "Rhododendron",
    difficulty: "hard",
    hint: "It is red in color and mostly found in mountaneous regions of Nepal",
    mastered: false,
    correctedAns: false},
    {buzz: "What is the time gap of Nepal and India?",
    fact: "15 minutes",
    difficulty: "hard",
    hint: "Nepal's time is faster than India's but lesser than 1 hour",
    mastered: false,
    correctedAns: false},
]);
  // intial user stats data
  const initialUserStats = {
    presentCorrectStreak: 0,
    longestCorrectStreak: 0,
    unmasteredCards: data.length,
  }
  // stores pattern to show questions in the quiz questionaire (initialized as qn.1 to qn.15)
  const [qnsPattern, setQnsPattern] = useState(Array.from({length: data.length}, (_, i) => i));
  // keeps track of the current question's index in the question pattern (initialized as first question)
  const [qnIndex, setQnIndex] = useState(0);
  // keeps track of the data of content showed in the card
  const [currentData, setCurrentData] = useState(data[qnsPattern[qnIndex]]);
  // indicator to showing a buzz or fact
  const [showBuzz, setShowBuzz] = useState(true);
  // indicater to showing hint or not
  const [showHint, setShowHint] = useState(false);
  // indicator to showing submit info or not
  const [showSubmitInfo, setShowSubmitInfo] = useState(false);
  // indicator to showing mastered info or not
  const [showMasteredInfo, setShowMasteredInfo] = useState(false);
  // keeps track of current user input 
  const [userInput, setUserInput] = useState("");
  // keeps track of current user stats about their streaks and mastered cards
  const [userStats, setUserStats] = useState(initialUserStats);

  // helper function that checks whether submitted answer by a user is correct or not
  function answerChecker () {
    // load current streak and highest streak values
    let currentStreak = userStats.presentCorrectStreak;
    let highestStreak = userStats.longestCorrectStreak;
    // increase current streak by one until correct answer is given
    if (userInput.toLowerCase().indexOf(currentData.fact.toLowerCase()) >= 0){
      currentStreak += 1;
      setCurrentData({...currentData, correctedAns: true});
    } else {
      // reset current streak if wrong answer is given
      currentStreak = 0;
      setCurrentData({...currentData, correctedAns: false});
    }
    // update highest streak if current streak > currentHighest
    highestStreak = currentStreak > highestStreak ? currentStreak: highestStreak;
    // update a new object corresponding to user data
    setUserStats({...userStats, presentCorrectStreak: currentStreak, longestCorrectStreak: highestStreak});
  }

  // helper function that resets hint and answer blocks
  function resetDefault () {
    setShowBuzz(true);
    setShowHint(false);
  }
  // helper function that updates current question pattern without changing it
  function updateQnsPattern (){
    if (qnsPattern.length > 0){
      let prevIdx = qnIndex;
      // remove the mastered question from the questions pattern
      setQnsPattern(qnsPattern.filter((idx) => idx !== qnsPattern[qnIndex]));
      // reset the current question to next question in the new pattern
      if (qnIndex < qnsPattern.length - 1){
        handleForwardClick()
        setQnIndex(prevIdx);
      } else if (qnIndex > 0 && qnIndex == qnsPattern.length - 1){
        handleBackwardClick()
      } else {
        setCurrentData({buzz: "Congrats, You have mastered every questions of this quiz!!!",
        fact: "Hurray!!!!!!!!",
        difficulty: "easy",
        hint: "",
        mastered: false,
        correctedAns: false})
      }
    }
  }

  // reset to show buzz or fact
  const handleCardClick = () => setShowBuzz(!showBuzz);

  // reset to show hint or not
  const handleHintClick = () => setShowHint(!showHint);

  // form button click handler
  const handleFormButtonClick = (e) => {
    e.preventDefault()
    // check if submitted answer is correct or wrong and make needed updates
    answerChecker();
    // show submit overlay
    setShowSubmitInfo(true)
    // reset input text
    setUserInput("");
  }

  // previous question button handler
  const handleBackwardClick = () =>{
    if (qnIndex > 0){
      // hide hint and answer blocks
      resetDefault()
      // update the current question data showed in card
      setCurrentData(data[qnsPattern[qnIndex - 1]])
      setQnIndex(qnIndex - 1)
    }
  }

  // next question button handler 
  const handleForwardClick = () =>{
    if (qnIndex < qnsPattern.length - 1){
      // hide hint and answer blocks
      resetDefault()
      // update the current question data showed in card
      setCurrentData(data[qnsPattern[qnIndex + 1]])
      setQnIndex(qnIndex + 1)
    }
  }
  
  // shuffle the pattern in which questions are asked
  const shuffleQuestions = () => {
    // hide hint and answer blocks
    resetDefault();
    // load the current questions pattern
    let currentPattern = qnsPattern;
    // applying Fisher-Yates shuffle algorithm
    for (let i = currentPattern.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentPattern[i], currentPattern[j]] = [currentPattern[j], currentPattern[i]];
    }
    // reset the current questions pattern
    setQnsPattern(currentPattern);
    // reset current index and point to the first question in the new pattern
    setQnIndex(0);
    // reset the current question to first card in the new pattern
    setCurrentData(data[qnsPattern[qnIndex]]);
  }

  const updateMasteredInfo = () => {
    // load the current info
    let currentInfo = data;
    currentInfo[qnsPattern[qnIndex]].mastered = true
    // reset the question info
    setData(currentInfo)
    // update the questions pattern
    updateQnsPattern()
    setShowSubmitInfo(false)
  }

  return (<div className="App">
            <SubmitInfo currentData={currentData} updateMasteredInfo={updateMasteredInfo} setShowSubmitInfo={setShowSubmitInfo} showSubmitInfo={showSubmitInfo} />
            <MasteredInfo data={data} setShowMasteredInfo={setShowMasteredInfo} showMasteredInfo={showMasteredInfo} />
            <Header/>
            <p className="cards-count">Current Streak: {userStats.presentCorrectStreak}, Longest Streak: {userStats.longestCorrectStreak}</p>
            <div onClick={handleCardClick}><Card qnNumber={qnIndex} content={currentData} dataPicker={showBuzz}/></div>
            <Form handleInputChange={(e) => setUserInput(e.target.value)} handleFormButtonClick={handleFormButtonClick} userInput={userInput}/>
            <div><Hint currentHint={currentData.hint} dataPicker={showHint}/></div>
            <div className="app-buttons">
              <button onClick={handleHintClick}>Hint</button>
              <button onClick={handleBackwardClick}>⭠</button>
              <button onClick={handleForwardClick}>⭢</button>
              <button onClick={shuffleQuestions}>Shuffle</button>
              <button onClick={() => setShowMasteredInfo(true)}>Mastered</button>
            </div>
          </div>
  )
}

export default App
