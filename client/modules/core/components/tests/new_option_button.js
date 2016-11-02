const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewOptionButton from '../new_option_button';

describe('core.components.new_option_button', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewOptionButton />).length).to.equal(1);
  });
});
