import React from 'react';

const PageTitleBar = (props) =>{
    return(
        <section className="page-title-bar">
            <div className="nav-grid">
                <h2>{props.pageTitle}</h2>
            </div>
        </section>
    )
}
export default PageTitleBar;