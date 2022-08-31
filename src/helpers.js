// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

// returns a random item from an array. 
const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];

}

const remove = (item, items) => {
    for( let i=0; i< items.length; i++) {
        if(items[i] === item) {
            return[...items.slice(0,i), ...items.slice(i+1)]
        }
    }
}


export {choice, remove} 