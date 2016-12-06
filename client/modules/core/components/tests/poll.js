const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
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

  it('should call deletePoll when button clicked', () => {
    const deletePoll = spy();
    const poll = {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      isOwner: () => true
    };
    const el = shallow(<Poll poll={poll} deletePoll={deletePoll} />);

    el.find('ButtonCircle').first().simulate('click');
    const args = deletePoll.args[0];

    expect(args.slice(0,1)).to.deep.equal([
      'abc123'
    ]);
  });
});
