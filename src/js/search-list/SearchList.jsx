import React from 'react';

function replaceUrlTemplateVariables(template, width, height, size) {
  return template.replace('{width}', width).replace('{height}', height).replace('{size}', size);
}

function getThumbnailImageUrlFromTemplate(template) {
  return replaceUrlTemplateVariables(template, 71, 105, 'medium');
}

export default class SearchList extends React.Component {
  getListItemComponent(item) {
    return <div key={ item.id } className='item'>
             <div className='image'>
               <img src={ getThumbnailImageUrlFromTemplate(item.image) } />
             </div>
             <div className='id'>
               { item.id }
             </div>
             <div className='brand'>
               { item.brand }
             </div>
             <div className='name'>
               { item.name }
             </div>
             <div className={`pricing ${item.salePrice ? 'on-sale' : ''}`}>
               <div className='sale-price'>
                 { item.salePrice }
               </div>
               <div className='price'>
                 { item.price }
               </div>
             </div>
           </div>;
  }

  render() {
    const items = [];

    for (const item of this.props.items) {
      items.push(this.getListItemComponent(item));
    }

    return <div className='item-list'>
             { items }
           </div>;
  }
}
