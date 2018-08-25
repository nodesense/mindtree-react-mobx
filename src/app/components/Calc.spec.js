import React from 'react';
import calculator from '../state/Calculator';
import Calc from './Calc';
import {mount} from 'enzyme';
import { wrap } from 'module';

describe("Calc spec ", () => {
    it("calc test", () => {
       const wrapper = mount(<Calc calculator={calculator}/>)
       wrapper.find("button").at(0).props().onClick();
       wrapper.update()
       expect(wrapper.find('h2').text()).toContain("1")
    })
})