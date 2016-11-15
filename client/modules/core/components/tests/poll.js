const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Poll from '../poll';

describe('core.components.poll', () => {
  it('should render without exploding', () => {
    const poll = {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      isOwner: () => true
    };
    expect(shallow(<Poll poll={poll} deletePoll={() => {}} />).length).to.equal(1);
  });
});
