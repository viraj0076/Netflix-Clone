import React, { useState } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  const [selectMood, setSelectMood] = useState("Filmy 😎");
  const Moods = ["Filmy 😎", "Love ❤️", "Crazy 😉", "Sad 😣", "Angry 😤", "Happy 😃"];
  const handleMoodChange = (e) => {
    e.preventDefault();
    setSelectMood(e.target.value);
  };

  const getFilterByMood = () => {
    if (selectMood === "Filmy 😎") {
      return [
        <Row
          rowID="1"
          title="NETFLIX ORIGINALS"
          fetchURL={requests.requestNetflixOriginals}
        />,
        <Row
          rowID="3"
          title="NowPlaying"
          fetchURL={requests.requestNowPlaying}
        />,
        <Row rowID="4" title="TopRated " fetchURL={requests.requestTopRated} />,
        <Row rowID="5" title="Comedy" fetchURL={requests.requestComedy} />,
        <Row rowID="6" title="Horror" fetchURL={requests.requestHorror} />,
        <Row rowID="7" title="Upcoming" fetchURL={requests.requestUpcoming} />,
        <Row rowID="8" title="Romance" fetchURL={requests.requestRomance} />,
        <Row
          rowID="9"
          title="Documentaries"
          fetchURL={requests.requestDocumentaries}
        />,
      ];
    } else if (selectMood === "Love ❤️") {
      return [
        <Row rowID="8" title="Romance" fetchURL={requests.requestRomance} />,
        <Row
          rowID="9"
          title="Documentaries"
          fetchURL={requests.requestDocumentaries}
        />,
      ];
    } else if (selectMood === "Crazy 😉") {
      return [
        <Row
          rowID="3"
          title="NowPlaying"
          fetchURL={requests.requestNowPlaying}
        />,
        <Row rowID="4" title="TopRated " fetchURL={requests.requestTopRated} />,
      ];
    } else if (selectMood === "Sad 😣") {
      return [
        <Row rowID="5" title="Comedy" fetchURL={requests.requestComedy} />,
        <Row
          rowID="3"
          title="NowPlaying"
          fetchURL={requests.requestNowPlaying}
        />,
      ];
    } else if (selectMood === "Happy 😃") {
      return [
        <Row
        rowID="1"
        title="NETFLIX ORIGINALS"
        fetchURL={requests.requestNetflixOriginals}
        />,
        <Row
        rowID="3"
        title="NowPlaying"
        fetchURL={requests.requestNowPlaying}
        />,
        <Row rowID="4" title="TopRated " fetchURL={requests.requestTopRated} />,
        <Row rowID="6" title="Horror" fetchURL={requests.requestHorror} />,
      ];
    }
    else if (selectMood === "Angry 😤") {
      return [
        <Row rowID="5" title="Comedy" fetchURL={requests.requestComedy} />,
        <Row
          rowID="1"
          title="NETFLIX ORIGINALS"
          fetchURL={requests.requestNetflixOriginals}
        />,
        <Row rowID="3"  title="NowPlaying" fetchURL={requests.requestNowPlaying} />,
        <Row rowID="4" title="TopRated " fetchURL={requests.requestTopRated} />,
      ];
    }
  };




  return (
    <>
      <Main />
      <div className="text-left mx-[15px] text-white font-bold md:text-xl lg:text-4xl py-2">
        What's Your Mood
        <div className="text-black text-xl w-[400px] my-3">
          <select className="w-[200px]" value={selectMood} onChange={handleMoodChange}>
            {Moods.map((currMood) => {
              return (
                <option key={currMood} value={currMood}>
                  {currMood}
                </option>
              );
            })}
          </select>
          <div className="text-white md:text-xl lg:text-2xl my-4">
            Suggested Movie Based on Your Mood {selectMood}
          </div>
        </div>
      </div>

      {getFilterByMood()}
    </>
  );
};

export default Home;
