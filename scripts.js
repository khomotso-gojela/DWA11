import { subscribe,dispatch,getState } from "./modules/store.js";
import { increaseValue,decreaseValue,reset } from "./modules/actions.js";


const elements = {
    inc: document.querySelector('[data-increment]'),
    dec: document.querySelector('[data-decrement]'),
    reset: document.querySelector('[data-reset]'),
    counter: document.querySelector('[data-counter]'),
    alert: document.querySelector('[data-alert]')
}

subscribe((_,next) => console.log(next))

elements.inc.addEventListener('click', () => {
    dispatch(increaseValue())
    elements.counter.innerText = getState().value
})

elements.dec.addEventListener('click', () => {
    dispatch(decreaseValue())
    elements.counter.innerText = getState().value
})

elements.reset.addEventListener('click', () => {
    dispatch(reset())
    elements.counter.innerText = getState().value
    elements.alert.setAttribute('open','')

    setTimeout( () => {
        elements.alert.removeAttribute('open')
    },2000)
})
