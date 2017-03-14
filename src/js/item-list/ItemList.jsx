import React from 'react';
import ListItem from './Item.jsx';

export default class ItemhList extends React.Component {
  render() {
    const items = [];

    for (const item of this.props.items) {
      items.push(<ListItem key={item.id} {...item}/>);
    }

    return <div className='item-list'>
             { items }
           </div>;
  }
}
