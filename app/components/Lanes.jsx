import React from 'react';
import Lane from './Lane.jsx';

export default class Lanes extends React.Component {
  render() {
    return (
      <div className="lanes">
        {this.props.lanes.map(lane =>
            <Lane className="lane" key={lane.id} lane={lane} />
        )}
      </div>
    )
  }
}
