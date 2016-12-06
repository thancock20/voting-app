const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewPollForm from '../new_poll_form';

describe('core.components.new_poll_form', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewPollForm />).length).to.equal(1);
  });
});
