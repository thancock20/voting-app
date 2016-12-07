import React, { PropTypes } from 'react';
import { InlineForm } from 'rebass';

class NewOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      optionInput: ''
    };
  }

  handleClick(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (this.state.optionInput) {
      this.props.addOption(this.props.pollId, this.state.optionInput);
      this.setState({
        optionInput: ''
      });
    }
  }

  handleChange(event) {
    this.setState({
      optionInput: event.target.value
    });
  }

  render() {
    return (
      <InlineForm
        style={{width: '80%', margin: 'auto'}}
        buttonLabel="+"
        placeholder="Add Option"
        label="NewOption"
        name="new_option"
        value={this.state.optionInput}
        onChange={this.handleChange}
        onClick={this.handleClick}
      />
    );
  }
}
NewOption.propTypes = {
  addOption: PropTypes.func,
  pollId: PropTypes.string
};

export default NewOption;
