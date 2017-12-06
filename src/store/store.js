import {observable, action, autorun, computed} from 'mobx';

const appState = observable({
    count: 0,
    increment: action.bound(function(){
        this.count++
    }),
    decrement: action.bound(function() {
        this.count--
    }),
    square: computed(function(){
        return this.count * this.count
    })
})

const dispose = autorun(() => {
    console.log("counter",appState.count);
    console.log("square",appState.square);
    if(appState.count < 0){
        appState.count = 0;
        appState.square = 0;
        throw new Error("count less than 0")
    }
})

dispose.onError(e => {
    window.alert("count不能小于0")
})

export {appState};
