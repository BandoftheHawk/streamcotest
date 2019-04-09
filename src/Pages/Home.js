import React from 'react';
import { Link } from 'react-router-dom';

import PageTitleBar from '../Layout/PageTitleBar'
const Home = () => {
    return(
        <React.Fragment>
            <PageTitleBar pageTitle="Popular Titles"/>
            <div className="flex-grid">
                <div className="col">
                    <Link to="/series">
                        <div className="programs types">
                            <img src="assets/images/placeholder.png"/>
                            <div className="type">Series</div>
                        </div>
                    </Link>
                    <p>Popular Series</p>
                </div>
                <div className="col">
                    <Link to="/movies">
                        <div className="programs types">
                            <img src="assets/images/placeholder.png"/>
                            <div className="type">Movies</div>
                        </div>
                    </Link>
                    <p>Popular Movies</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;