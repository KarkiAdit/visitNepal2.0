import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Hint from "./components/Hint";

function App() {
  const data = [
    {buzz: "Do you know how far is Nepal's ancient history stretched??",
    fact: "Nepal’s ancient history began in the Kathmandu Valley and over the centuries its boundaries grew to include tracts of what today are neighboring countries such as India and China. It prospered as a crossroad resting place for two trade routes. As such, it became a cultural mixing pot.",
    difficulty: "hard",
    hint: "Something related to unification of Kathmandu valley into Nepal."},   
    {buzz: "Do you know why Nepal's flag is one of its own kind??",
    fact: "The national flag of Nepal (Nepali: नेपालको झण्डा) is the world's only non-rectangular flag that acts as both the state flag and civil flag of a sovereign country. The flag is a simplified combination of two single pennons (or pennants), known as a double-pennon.",
    difficulty: "medium",
    hint: "Nepal's flag has a unique superlative associated with it."},
    {buzz: "Do you know which lunar calender does Nepal follow??",
    fact: "During the 9th century a new lunar calendar, the Bikram Sambhat, was introduced that is still used today. It is approximately 67 years, eight and a half months ahead of the Gregorian calendar Americans use. On it Nepal’s New Year is in mid-April.",
    difficulty: "hard",
    hint: "It was introduced in the 9th century."},
    {buzz: "Why are Nepalese world renowned for bravery??",
    fact: "Nepal’s renowned Gurkha soldiers always successfully protected their country. Their motto is, “Better to die than be a coward.” The British wereso impressed with their fighting ability during the Indian wars; they have been an integral salaried part of the British Army since 1815.",
    difficulty: "easy",
    hint: "It's associated with the Gurkhas."},
    {buzz: "Why is Nepal called a biodiversed nation??",
    fact: "Nepal is a part of the world’s biodiversity hotspot and ranks the 49th in the world. Nepal inhibits a vast biodiversity reflected by its great altitude variations ranging from flatlands to the highest mountain in the world. Besides an extraordinary landscape, Nepal caters an impressive number of unique mammals such as rhinos, snow leopards, river dolphins, tigers, crocodiles and pangolins.", 
    difficulty: "medium",
    hint: "It's associated with the diversity in biological resources in Nepal."},
    {buzz: "Why is it that Himalayas are called the aura that defines Nepal??",
    fact: "The approximately 70 million-year-old Himalaya mountain range in Asia separates the Tibetan Plateau from the Indian subcontinent and is spread across five countries: Nepal, Bhutan, India, China, and Pakistan. It is the youngest mountain range in the world. The word “Himalaya” means “abode of snow” in Sanskrit. They are the home of the god Shiva, according to Hindu mythology.",
    difficulty: "easy",
    hint: "It is associated with many peaks present in Nepal."},
    {buzz: "Why is it that Nepal's beauty is not only Mt. Everest??",
    fact: "the highest lake on earth (Tilicho at 4,800 meters/3 miles) and the deepest lake on earth (Shey Phoksundo). They are also home to eight of the top ten tallest mountains on earth in addition to Mount Everest. The zone around it is the Sagarmantha National Park, established in 1976 as a protected area.",
    difficulty: "medium",
    hint: "It is associated with overall natural beauty of Nepal."},
    {buzz: "Why is Nepal called a nation of unity in diversity??",
    fact: "The main religion in Nepal is Hinduism practised by almost 82% population of the country. Nepal is the most religious Hindu country in the world, home to most of the important Hindu pilgrimage centres, the main being world-famous Pashupatinath Temple. The people of Nepal consider Lord Shiva as the guardian deity while cow is considered the national animal of Nepal. However, being a democracy, Nepal is a multi-ethnic and multi-lingual and multi-religious country. The other major religions followed in Nepal are Buddhism, Islam, Kiratism, Christianity, Sikhism, Bahá'í and some minority religion.",
    difficulty: "medium",
    hint: "It is related with the 100+ cultures and 100 languages spoken in Nepal."},
    {buzz: "Did you know, though being a peace loving nation, Nepal has always been a politically unstable nation??",
    fact: "Nepal’s president has dissolved the parliament for a second time in less than six months and scheduled snap elections, prompting court challenges and plunging the country into fresh political turmoil as it battles a “catastrophic” surge in coronavirus infections.",
    difficulty: "easy",
    hint: "It is related to instable politics caused by lack of vision in Nepal."},
    {buzz: "Did you know why Nepal doesn't have any independence day??",
    fact: "Nepal has always been soverign nation and has never been under the rule of any foreign nation.",
    difficulty: "easy",
    hint: "British never ruled Nepal only captured some places of it."}
];
  // keeps track of current content showed in the card
  const [currentData, setCurrentData] = useState(data[0]);
  // indicator to showing a buzz or fact
  const [showBuzz, setShowBuzz] = useState(true);
  // indicater to showing hint or not
  const [showHint, setShowHint] = useState(false);

  // reset to show buzz or fact
  const handleCardClick = () => setShowBuzz(!showBuzz);
  // reset to show hint or not
  const handleHintClick = () => setShowHint(!showHint);

  // select a random buzz from the data
  const randomBuzzSelector = () => {
    // keep on finding random data until its different than current card data 
    while (true) {
      let randomBuzz = data[Math.floor(Math.random() * data.length)];
      if (randomBuzz.buzz !== currentData.buzz) {
        // initialize current data in card with the new found random buzz
        setCurrentData(randomBuzz);
        break;
      }
    }
    // reset to show buzz 
    setShowBuzz(true);
    // reset to not show hint
    setShowHint(false);
  }

  return (<div className="App">
            <Header/>
            <p className="cards-count">Number of Cards: {data.length}</p>
            <div onClick={handleCardClick}><Card content={currentData} dataPicker={showBuzz}/></div>
            <div onClick={handleHintClick}><Hint currentHint={currentData.hint} dataPicker={showHint}/></div>
            <div className="app-buttons">
              <button onClick={handleHintClick}>Hint</button>
              <button onClick={randomBuzzSelector}>Next</button>
            </div>
          </div>
  )
}

export default App
