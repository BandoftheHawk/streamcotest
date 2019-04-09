import React, { Component } from 'react';
import PageTitleBar from '../Layout/PageTitleBar'

class Movies extends Component{
    constructor() {
        super();
        this.state = {
            movies: [],
            loading:true,
            error:false,
        }
    }

    componentDidMount() {
        let movies = [];
        fetch("assets/sample.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let unsortedseries = result.entries.filter((item)=>{
                        return item.releaseYear >= 2010 && item.programType ==="movie";
                    });
                     let sortedseries = unsortedseries.sort(function(a,b){
                        var x = a.title < b.title? -1:1;
                        return x;
                    });

                    movies = sortedseries.slice(0,21);
                    this.setState({
                        loading: false,
                        items: result.items,
                        movies
                    });
                },
                (error) => {
                    this.setState({
                        loading: false,
                        error:true
                    });
                }
            )
    }

    render() {
        return(
            <React.Fragment>
                <PageTitleBar pageTitle="Popular Movies"/>
                <div className="flex-grid">
                    {(this.state.loading === true && this.state.error === false) &&
                    <div >
                        <h3>Loading....</h3>
                    </div>
                    }
                    {(this.state.loading === false && this.state.movies.length > 0 && this.state.error === false) &&
                        this.state.movies.map((movie,i)=>{
                            return(
                                <div className="col" key={i}>
                                     <div className="programs">
                                        <img src={movie.images['Poster Art'].url}/>
                                    </div>
                                    <p>{movie.title}</p>
                                </div>
                            )
                        })
                    }
                    {(this.state.loading === false && this.state.movies.length === 0 && this.state.error === false)  &&
                    <div>
                        <h3>No Products Found...</h3>
                    </div>
                    }
                    {(this.state.error === true) &&
                    <div>
                        <h3>Oops, something went wrong...</h3>
                    </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default Movies;