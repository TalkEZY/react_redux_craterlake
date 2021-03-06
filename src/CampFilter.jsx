import React from 'react';

export default class CampFilter extends React.Component {
  render() {
    return (
      <div className="col-sm-2">
      <input type="checkbox"
               className="toggle"
               id={this.props.id}
               defaultChecked={this.props.inuse}
               onClick={() => this.props.changeFilter(this.props.id)}/>
             {'\u00A0'}{'\u00A0'}
             <label ref="text">{this.props.id}</label>
       </div>
      )
  }
}
