import React, { Component } from 'react';
import PageTitleBar from '../Layout/PageTitleBar'

class Movies extends Component{
    constructor() {
        super();
        this.state = {
            series: [],
            loading:true,
            error:false,
        }
    }

    componentDidMount() {
        let series = [];
        fetch("assets/sample.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let unsortedseries = result.entries.filter((item)=>{
                        return item.releaseYear >= 2010 && item.programType ==="series";
                    });
                    let sortedseries = unsortedseries.sort(function(a,b){
                        var x = a.title < b.title? -1:1;
                        return x;
                    });
                    series = sortedseries.slice(0,21);
                    this.setState({
                        loading: false,
                        items: result.items,
                        series
                    });
                }, (error) => {
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
                <PageTitleBar pageTitle="Popular Series"/>
                <div className="flex-grid">
                    {(this.state.loading === true && this.state.error === false) &&
                    <div >
                        <h3>Loading....</h3>
                    </div>
                    }
                    {(this.state.loading === false && this.state.series.length > 0 && this.state.error === false) &&
                    this.state.series.map((series,i)=>{
                        return(
                            <div className="col" key={i}>
                                <div className="programs">
                                    <img src={series.images['Poster Art'].url}/>
                                </div>
                                <p>{series.title}</p>
                            </div>
                        )
                    })
                    }
                    {(this.state.loading === false && this.state.series.length === 0 && this.state.error === false)  &&
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