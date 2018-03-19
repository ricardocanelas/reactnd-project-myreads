// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our Depedencies
import Options from './Options';
import shelvesConfig from '../../../config/shelvesConfig'

describe('<Options />', () => {

    it('renders without crashing', () => {
        expect(shallow(<Options />))
    });

    it('mounts without crashing', () => {
        expect(mount(<Options selected='' />))
    });
    
    it('selects a shelf', () => {
        const shelf = Object.keys(shelvesConfig.types)[0]
        const className = `option-${shelf}`
        const wrapper = mount(<Options selected={shelf} />)

        expect(wrapper.find(`.${className}`).hasClass('selected')).toBe(true)
    });
    
    it('should render using config of the shelvesConfig', () => {
        const typeLen = Object.keys(shelvesConfig.types).length
        const wrapper = mount(<Options />)

        expect(wrapper.find('.book-option').length).toBe(typeLen)
    });

})