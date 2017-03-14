import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return <div className="search-form">
               <div className="filter">
                 <input type="text" id="search-filter" placeholder='Filter...'/>
               </div>
               <button id="search"></button>
           </div>;
  }
}
