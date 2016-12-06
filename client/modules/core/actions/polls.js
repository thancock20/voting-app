export default {
  vote() {},
  addOption() {},

  deletePoll({Meteor}, pollId) {
    Meteor.call('polls.delete', pollId);
  }
};
