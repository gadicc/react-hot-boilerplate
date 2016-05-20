import React from 'react';
import Counter from './Counter';

class Counters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [ Counter ]
    };
  }

  render() {
    return (
      <div>
        { this.state.list.map((Counter, idx) => ( <Counter key={idx} idx={idx} /> )) }
      </div>
    );   
  }

}

export default Counters;