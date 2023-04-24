const url1 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg';
const url2 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg';
const url3 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg';

// Ожидание  (pending)
// Выполнено успешно (resolve)
// Выполнено не успешно (reject)

// pending(Ожидание), fillfild(Выполнено успешно), rejected(Выполнено не успешно)


const promise = new Promise((resolve, reject) => {
    resolve()
})

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved')
        }, ms)
    })
}

const promise2 = delay(2000);
console.log('до');
promise2.then(() => console.log(1))
promise2.then(() => console.log(2))
promise2.then(() => console.log(3))
console.log('после');

/* const promise3 = {
    state: ['pending']
    resolveQueue: [
        (() => console.log(1))
        (() => console.log(2))
        (() => console.log(3)) 
    ]
} */