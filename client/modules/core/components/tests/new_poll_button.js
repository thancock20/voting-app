const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewPollButton from '../new_poll_button';

describe('core.components.new_poll_button', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewPollButton />).length).to.equal(1);
  });
});
