const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewOption from '../new_option';

describe('core.components.new_option', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewOption />).length).to.equal(1);
  });
});
