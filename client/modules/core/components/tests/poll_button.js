const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PollButton from '../poll_button';

describe('core.components.poll_button', () => {
  it('should render without exploding', () => {
    expect(shallow(<PollButton />).length).to.equal(1);
  });
});
