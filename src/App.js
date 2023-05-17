import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import pfp from './pfp.png'
import img1 from './01.jpg'
import img4 from './04.jpg'
import img5 from './05.jpg'
import img6 from './06.jpg'
import img2 from './02.jpg'
import img3 from './03.jpg'
import BootstrapCarousel from './BootstrapCarousel'
import MovieCard from "./MovieCard";


// 4038db44

const apiLInk = 'http://www.omdbapi.com/?i=tt3896198&apikey=4038db44';
function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${apiLInk}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search)
    };
    useEffect(() => {
        searchMovies('spider man');
    }, []);

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            searchMovies(searchTerm)
        }
    }

    let output = searchTerm.replace(/\s+/g, '');

    let input = document.getElementsByClassName('search');

    return (
    <div className="App">
      <nav className="navbar navbaar sticky-top">
        <div className="container-fluid ms-3">
          <a className="navbar-brand" href="#">
              <div className="logo">Filmpire <span className={'shaker'}>.</span></div>
          </a>
            <div className={'joe  pe-3'}>
                <a href={'https://youssefgameel.netlify.app/'} className={'text-decoration-none'} target={'about-blank'}>
            {/*<span className={'me-2 text-black-50'}>Developed With &#128153; By</span>*/}
                <img className={'pfp'} src={pfp} />
                <span className={'ms-3 text-black-50    '} >Joe Holmes</span>
                </a>
            </div>
        </div>
      </nav>
        <div className={'container mt-5 me-5'}>
            <div className="search-container mt-3">
                <input placeholder={'Search...'} className={'search'}
                value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       onKeyPress={handleKeyPress}
                       defaultValue={''}

                />
            </div>
        </div>
        <div className={'container'}>
            <BootstrapCarousel></BootstrapCarousel>
        </div>
        {movies?.length > 0 ? (
            <div className=" container-fluid con">
                {movies.map((movie) => (
                <a href={ output.length > 0 ? 'https://hdtoday.tv/search/'+ output  :'https://hdtoday.tv/search/spiderman' }>
                    <MovieCard movie={movie} />
                    </a>
                ))}
            </div>
        ) : (
            <div>
                <h2>No Movies Found</h2>
            </div>
        )}
    </div>
  );
}

export default App;
