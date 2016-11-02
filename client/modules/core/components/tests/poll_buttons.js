const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollButtons from '../poll_buttons';

describe('core.components.poll_buttons', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollButtons />).length).to.equal(1);
  });
});
