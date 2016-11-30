const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollScreen from '../poll_screen';

describe('core.components.poll_screen', () => {
  it('should render without exploding', () => {
    const poll = {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      options: [
        {
          name: 'Chocolate',
          votes: 10
        },
        {
          name: 'Vanilla',
          votes: 5
        },
        {
          name: 'Rocky Road',
          votes: 20
        }
      ]
    };

    expect(shallow(<PollScreen poll={poll} />).length).to.equal(1);
  });
});
