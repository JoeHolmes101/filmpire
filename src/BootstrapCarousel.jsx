import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import img1 from "./01.jpg";
import img2 from "./02.jpg";
import img3 from "./03.jpg";
import img4 from "./04.jpg";
import img5 from "./05.jpg";
import img6 from "./06.jpg";

export class BootstrapCarousel extends Component {
    render() {
        return (
            <div>

                <div className='container-fluid mt-5'>

                    <div className="row title" style={{marginBottom: "20px"}}>

                        <div className="col-sm-12 btn btn-warning">

                            Quick Picks By the Developer. خد بوسة &#128153;

                        </div>

                    </div>

                </div>

                <div className='container'>

                    <Carousel>
                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-spiderman-homecoming-hd-19743'}>
                            <img
                            className="d-block w-100"

                            src={img1} />
                            </a>

                            <Carousel.Caption>

                                <h3>Spider-Man: Homecoming </h3>

                            </Carousel.Caption>

                        </Carousel.Item>

                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-free-guy-hd-66987'}>

                            <img
                                className="d-block w-100"

                                src={img2} />
                            </a>


                            <Carousel.Caption>

                                <h3>Free Guy</h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-spiderman-into-the-spiderverse-hd-19847'}>

                            <img
                                className="d-block w-100"

                                src={img3} />
                            </a>


                            <Carousel.Caption>

                                <h3>Spider-Man: Into the Spider-Verse</h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-joker-hd-9766'}>

                            <img
                                className="d-block w-100"

                                src={img4} />
                            </a>

                            <Carousel.Caption>

                                <h3>Joker</h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-deadpool-hd-19694'}>

                            <img
                                className="d-block w-100"

                                src={img5} />
                            </a>

                            <Carousel.Caption>

                                <h3>Deadpool</h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <a href={'https://hdtoday.tv/movie/watch-avengers-endgame-hd-19722'}>

                            <img
                                className="d-block w-100"

                                src={img6} />
                            </a>
                            <Carousel.Caption>

                                <h3>Avengers: Endgame</h3>

                            </Carousel.Caption>

                        </Carousel.Item>

                    </Carousel>

                </div>

            </div>
        )
    }
}
export default BootstrapCarousel