import React, { PropTypes } from 'react';
import {Heading, Input, Textarea, Button} from 'rebass';

class NewPollForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);

    this.state = {
      question: '',
      options: ''
    };
  }

  handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    if (this.state.question && this.state.options) {
      const options = this.state.options.split(',');
      this.props.createPoll(this.state.question, options);

      this.setState({
        question: '',
        options: ''
      });
    }
  }

  handleQuestionChange(event) {
    this.setState({
      question: event.target.value
    });
  }

  handleOptionsChange(event) {
    this.setState({
      options: event.target.value
    });
  }

  render() {
    return (
      <div style={{paddingTop: 48, margin: 'auto', maxWidth: 800}}>
        <Heading level={1} style={{textAlign: 'center', marginBottom: 20}}>New Poll</Heading>
        <form
          style={{width: '80%', margin: 'auto'}}
          onSubmit={this.handleSubmit}>
          <Input
            name="question"
            label="Question:"
            value={this.state.question}
            onChange={this.handleQuestionChange} />
          <Textarea
            name="options"
            label="Options:"
            placeholder="Separate options by commas"
            value={this.state.options}
            onChange={this.handleOptionsChange} />
          <Button
            children="Create Poll" />
        </form>
      </div>
    );
  }
}
NewPollForm.propTypes = {
  createPoll: PropTypes.func
};

export default NewPollForm;
