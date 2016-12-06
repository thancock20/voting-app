const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollButtons from '../poll_buttons';
import palette from '../../libs/palette';

describe('core.components.poll_buttons', () => {
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
    const colorScale = palette([ 'tol', 'tol-rainbow' ], poll.options.length);
    const el = shallow(
      <PollButtons
        poll={poll}
        colorScale={colorScale}
        vote={() => {}}
      />
    );

    expect(el.length).to.equal(1);
  });
});
