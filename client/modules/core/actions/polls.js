export default {
  createPoll({Meteor, FlowRouter}, question, pollOptions) {
    const options = pollOptions.map((option) => {
      return {name: option};
    });

    Meteor.call('polls.create', {question, options}, (error, id) => {
      FlowRouter.go(`/polls/${id}`);
    });
  },

  vote({Meteor, Collections}, pollId, optionName) {
    Meteor.subscribe('polls');
    const poll = Collections.Polls.findOne({_id: pollId});
    const options = poll.options.map((option) => {
      if (option.name === optionName) {
        option.votes++;
      }
      return option;
    });

    Meteor.call('polls.edit', pollId, {options});
  },

  addOption({Meteor, Collections}, pollId, optionInput) {
    Meteor.subscribe('polls');
    const poll = Collections.Polls.findOne({_id: pollId});
    const options = poll.options;
    options.push({name: optionInput, votes: 1});

    Meteor.call('polls.edit', pollId, {options});
  },

  deletePoll({Meteor}, pollId) {
    Meteor.call('polls.delete', pollId);
  }
};
