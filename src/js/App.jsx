import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search-form/SearchForm.jsx';
import ItemList from './item-list/ItemList.jsx';

class App extends React.Component {
  render() {
    return <div className='container'>
             <div id="controls">
               <SearchForm {...this.props.searchForm}/>
               <div className="promoted-items-controls"></div>
             </div>
             <div id="main-content">
               <ItemList {...this.props.searchResults} role='search' />
               <ItemList {...this.props.promotedItems} role='promoted' />
             </div>
           </div>;
  }
}

function mapStateToProps(state) {
  return {
    searchResults: {
      items: [
        {
          "id": "1884917",
          "url": "https://www.nordstromrack.com/shop/product/1884917/house-of-harlow-1960-sunburst-button-earrings?color=SILVER-ICE%20BLUE",
          "brand": "House of Harlow 1960",
          "name": "Sunburst Button Earrings",
          "salePrice": "14.97",
          "price": "35.00",
          "color": "SILVER-ICE BLUE",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/C000774WBL/large/6310630.jpg"
        },
        {
          "id": "1892693",
          "url": "https://www.nordstromrack.com/shop/product/1892693/marc-jacobs-palm-stud-earrings?color=INFRA%20RED",
          "brand": "Marc Jacobs",
          "name": "Palm Stud Earrings",
          "salePrice": "19.97",
          "price": "48.00",
          "color": "INFRA RED",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/M0003543/large/6177516.jpg"
        },
        {
          "id": "1265524",
          "url": "https://www.nordstromrack.com/shop/product/1265524/marc-jacobs-locked-in-orbit-hoop-earrings?color=ORO",
          "brand": "Marc Jacobs",
          "name": "Locked In Orbit Hoop Earrings",
          "salePrice": "24.97",
          "price": "52.00",
          "color": "ORO",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/M0004914/large/4936163.jpg"
        },
        {
          "id": "1926262",
          "url": "https://www.nordstromrack.com/shop/product/1926262/nordstrom-rack-8-mm-imitation-pearl-12-mm-imitation-pearl-stud-earring-set?color=WHITE-SILVER",
          "brand": "Nordstrom Rack",
          "name": "8mm Imitation Pearl & 12mm Imitation Pearl Stud Earring Set",
          "salePrice": null,
          "price": "12.97",
          "color": "WHITE-SILVER",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/NR755RP16/large/6263028.jpg"
        },
        {
          "id": "1949683",
          "url": "https://www.nordstromrack.com/shop/product/1949683/nordstrom-rack-sterling-silver-bezel-set-cz-hexagon-stud-earrings?color=CLEAR-SILVER",
          "brand": "Nordstrom Rack",
          "name": "Sterling Silver Bezel Set CZ Hexagon Stud Earrings",
          "salePrice": null,
          "price": "12.97",
          "color": "CLEAR-SILVER",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/NR7030RE16/large/6387842.jpg"
        },
        {
          "id": "1232524",
          "url": "https://www.nordstromrack.com/shop/product/1265524/marc-jacobs-locked-in-orbit-hoop-earrings?color=ORO",
          "brand": "Marc Jacobs",
          "name": "Locked In Orbit Hoop Earrings",
          "salePrice": "24.97",
          "price": "52.00",
          "color": "ORO",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/M0004914/large/4936163.jpg"
        },
        {
          "id": "1976262",
          "url": "https://www.nordstromrack.com/shop/product/1926262/nordstrom-rack-8-mm-imitation-pearl-12-mm-imitation-pearl-stud-earring-set?color=WHITE-SILVER",
          "brand": "Nordstrom Rack",
          "name": "8mm Imitation Pearl & 12mm Imitation Pearl Stud Earring Set",
          "salePrice": null,
          "price": "12.97",
          "color": "WHITE-SILVER",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/NR755RP16/large/6263028.jpg"
        },
        {
          "id": "1265454",
          "url": "https://www.nordstromrack.com/shop/product/1265524/marc-jacobs-locked-in-orbit-hoop-earrings?color=ORO",
          "brand": "Marc Jacobs",
          "name": "Locked In Orbit Hoop Earrings",
          "salePrice": "24.97",
          "price": "52.00",
          "color": "ORO",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/M0004914/large/4936163.jpg"
        },
        {
          "id": "192623s2",
          "url": "https://www.nordstromrack.com/shop/product/1926262/nordstrom-rack-8-mm-imitation-pearl-12-mm-imitation-pearl-stud-earring-set?color=WHITE-SILVER",
          "brand": "Nordstrom Rack",
          "name": "8mm Imitation Pearl & 12mm Imitation Pearl Stud Earring Set",
          "salePrice": null,
          "price": "12.97",
          "color": "WHITE-SILVER",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/NR755RP16/large/6263028.jpg"
        }]
    },
    promotedItems: {
      items: [
        {
          "id": "1935812",
          "url": "https://www.nordstromrack.com/shop/product/1935812/betsey-johnson-black-patina-skull-drop-earrings?color=BLACK",
          "brand": "Betsey Johnson",
          "name": "Black Patina Skull Drop Earrings",
          "salePrice": "14.97",
          "price": "35.00",
          "color": "BLACK",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/B11574-E01/large/6401136.jpg"
        },
        {
          "id": "1935804",
          "url": "https://www.nordstromrack.com/shop/product/1935804/betsey-johnson-coiled-snake-hoop-earrings?color=GOLD",
          "brand": "Betsey Johnson",
          "name": "Coiled Snake Hoop Earrings",
          "salePrice": null,
          "price": "35.00",
          "color": "GOLD",
          "image": "https://www.hautelookcdn.com/resizer/396x594/products/B11773-E01/large/6401144.jpg"
        }]
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
