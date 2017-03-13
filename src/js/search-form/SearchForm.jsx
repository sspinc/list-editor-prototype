import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return <div className="search-form">
             <div className="heading">Filters</div>
             <div className="filters">
               <div className="filter">
                 <label htmlFor="<filter-id></filter-id>">ID</label>
                 <input type="text" id="filter-id" />
               </div>
               <div className="filter">
                 <label htmlFor="filter-name">Brand</label>
                 <input type="text" id="filter-brand" />
               </div>
               <div className="filter">
                 <label htmlFor="filter-name">Name</label>
                 <input type="text" id="filter-name" />
               </div>
             </div>
           </div>;
  }
}
