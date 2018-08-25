import {observable, 
        computed, 
        reaction,
        action
    } from 'mobx';

class Calculator {
    @observable
    numbers = []

    constructor() {
        const numbersJson = localStorage.getItem("numbers");

        this.numbers = JSON.parse(numbersJson) || [];
        
        // reaction ( deciding factor/whether to call effect,
        //            effect function to be called on change)
        reaction( () => this.numbers.length,
                  () => this.saveData() )
    }

    saveData() {
        localStorage.setItem("numbers", 
                    JSON.stringify(this.numbers));
    }

    //action
    @action
    add(n) {
        this.numbers.push(n);
    }

    //action
    @action
    empty() {
        this.numbers = []
    }

    //action
    @action
    pop() {
        this.numbers.pop();
    }

    // derived data
    // lazily evaluated
    @computed  get sum() {
        console.log('computed sum called')
        let total = 0;
        for (let n of this.numbers) {
            total += n;
        }
        return total;
    }

    // using computed value in other computation
    @computed get avg() {
        console.log('computed avg called')
        return this.sum / this.numbers.length
    }

    // min
    @computed  get min() {
        console.log('computed sum called')
        let mininum = 10000000;
        for (let n of this.numbers) {
            if (mininum > n) 
                 mininum = n;
        }
        return mininum;
    }
}

// export instance of Calculator
export default new Calculator();