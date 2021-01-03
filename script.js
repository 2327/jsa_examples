const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(this.readyState === 4){
        console.log(this.responseText);
        console.log(this.responseXML);
        const res = JSON.parse(this.responseText);
        console.log(res);
        console.log(JSON.stringify(res));
    }
};

xhr.open(
    'GET',
    'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
    true
);
// xhr.setRequestHeader('Content-Type', 'application/xml');

xhr.send();



const str = '';
console.log(1235);

// setTimeout(
//     () => {console.log(1)},
//     0
// );

// setTimeout(
//     () => {console.log(2)},
//     1000
// );

const func = (p1, p2, p3, cb) => {
    setTimeout(
        () => {
            console.log(1);
            // ...
            const pr = p1 + p2 + p3; 
            cb(pr);
        },
        1000
    );
};

func(1, 2, 3, console.log);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(
//         () => Math.round(Math.random() * 100) % 2 ? resolve('Success') : reject('Error'),       
//         1000
//     );
// });

// promise.then((res) => {
//     console.log(res);
//     //return new Promise(/* ... */);
// }).catch(console.error);//.then(/* ... */)


const fetchPromise = fetch(
    'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
    {
        method: 'GET'
    }
);
console.log('fetchPromise', fetchPromise);

const getRawDataPromise = fetchPromise.then(res => res.json());
console.log('getRawDataPromise', getRawDataPromise);

const dataPromise = getRawDataPromise.then(res => console.log('res', res));
console.log('dataPromise', dataPromise);

class CatalogItem {

}

class Catalog {

    constructor(){
        this.goods = [];

        this.getGoods();
    }

    getGoods() {
        fetch(
            'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
            {
                method: 'GET'
            }
        ).then(res => res.json()).then(res => {
            this.goods = res.map(item => new CatalogItem(...item));
        });
    }

    render() {
        return this.goods.map(item => item.render()).join('');
    }
}