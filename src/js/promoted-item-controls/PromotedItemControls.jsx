import React from 'react';

export default class PromotedItemControls extends React.Component {
  render() {
    return <div className="promoted-item-controls">
      <button id="remove-sold-out">Remove sold out</button>
      <button id="remove-all">Remove all</button>
    </div>;
  }
}
