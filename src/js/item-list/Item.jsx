import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return <div className='item'>
             <div className='image'>
               <img src={ this.props.image } />
             </div>
             <div className='id' title={ this.props.id }>
               { this.props.id }
             </div>
             <div className='brand' title={ this.props.brand }>
               { this.props.brand }
             </div>
             <div className='name' title={ this.props.name }>
               { this.props.name }
             </div>
             <div className={ `pricing ${this.props.salePrice ? 'on-sale' : ''}` }>
               <div className='sale-price'>
                 { this.props.salePrice }
               </div>
               <div className='price'>
                 { this.props.price }
               </div>
             </div>
           </div>;
  }
}
