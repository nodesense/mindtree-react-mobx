import React from 'react';
import calculator from '../state/Calculator';
import Calc from './Calc';
import {mount} from 'enzyme';

describe("Calc spec ", () => {

    // called after every test case execution
    afterEach( () => {
        calculator.empty()
    })
    
    it("calc test", () => {
       const wrapper = mount(<Calc calculator={calculator}/>)

      expect(wrapper.find('h2').text()).toContain("Calc 0")

       //add 
       wrapper.find("button").at(0).props().onClick();
       wrapper.update() //render

       expect(wrapper.find('h2').text()).toContain("Calc 1")
       // calculator.empty() //after each
    })


    it("calc pop", () => {
        const wrapper = mount(<Calc calculator={calculator}/>)
 
       expect(wrapper.find('h2').text()).toContain("Calc 0")
 
        //add 
        wrapper.find("button").at(0).props().onClick();
        wrapper.update() //render
 
        expect(wrapper.find('h2').text()).toContain("Calc 1")

        // pop
        wrapper.find("button").at(2).props().onClick();
        wrapper.update() //render
        expect(wrapper.find('h2').text()).toContain("Calc 0")
        // calculator.empty()
     })



    it("calc empty", () => {
        const wrapper = mount(<Calc calculator={calculator}/>)
 
       expect(wrapper.find('h2').text()).toContain("Calc 0")
 
        //add 
        wrapper.find("button").at(0).props().onClick();
        wrapper.update() //render
 
        expect(wrapper.find('h2').text()).toContain("Calc 1")

        //empty
        wrapper.find("button").at(1).props().onClick();
        wrapper.update() //render
        expect(wrapper.find('h2').text()).toContain("Calc 0")
        // calculator.empty()
     })
})