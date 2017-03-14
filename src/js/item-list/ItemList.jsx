import React from 'react';
import ListItem from './Item.jsx';

export default class ItemhList extends React.Component {
  render() {
    const items = [];

    for (const item of this.props.items) {
      items.push(<ListItem key={ item.id } {...item}/>);
    }

    return <div className='item-list'>
             <div className='header'>
               { `${this.props.title} (${this.props.items.length})` }
             </div>
             <div className='item-container'>
                { items }
             </div>
           </div>;
  }
}
