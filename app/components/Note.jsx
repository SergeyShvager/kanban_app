import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.task.length : null
      }
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  };

  renderNote = () => {
    return (
      <div>
          <span className="task" onClick={this.edit}>{this.props.task}</span>
          {this.renderDelete()}
      </div>
    );
  };

  renderDelete = () => {
    return this.props.onRemove ?
      <button className="delete-note" onClick={this.props.onRemove}>x</button> :
      null;
  }

  edit = () => {
    this.setState({
      editing: true
    });
  };

  remove = () => {
    this.props.onRemove();
  };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if (typeof this.props.onEdit === 'function') {
      this.props.onEdit(value);
    }

    this.setState({
      editing: false
    });
  };
}
