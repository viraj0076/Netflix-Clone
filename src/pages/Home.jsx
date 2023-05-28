import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='NETFLIX ORIGINALS' fetchURL={requests.requestNetflixOriginals} />
        <Row rowID='3' title='NowPlaying' fetchURL={requests.requestNowPlaying} />
        <Row rowID='4' title='TopRated ' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Comedy' fetchURL={requests.requestComedy} />
        <Row rowID='6' title='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='7' title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowID='8' title='Romance' fetchURL={requests.requestRomance} />
        <Row rowID='9' title='Documentaries' fetchURL={requests.requestDocumentaries} />



    </>
  )
}

export default Home