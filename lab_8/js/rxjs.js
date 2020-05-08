const { from, interval, merge } = rxjs;
const { filter, map, flatMap, switchMap, share, tap } = rxjs.operators;

let key = prompt("Введіть ключ: ");

const INTERVAL_REQUEST = 10000;
const DATA_URL = 'https://cloud.iexapis.com/v1/stock/market/batch?symbols=AAPl,FB,NOK,MCD,SBUX,NKE,AMD,YHOO,INTC&types=quote&filter=symbol,companyName,latestPrice,latestUpdate&token='+ key;
let TIME_UPDATE = 0;

//функция запроса, который выполняется асинхронно:
const SendRequest = async () => {  
    let response = await fetch(DATA_URL);
    if (response.ok) {
        return await response.json();
    }
}

//первый запрос и заполнение таблицы (если запрос удачный)
fetch(DATA_URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }
    )
    .then(result => {
        const dev = document.getElementById('dataInfo');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        tr.id = 'tableHead';
        
        for (var i in result[Object.keys(result)[0]].quote) {
            const th = document.createElement('th');
            th.textContent = i;
            tr.append(th);
        }       

        thead.append(tr);
        table.append(thead);

        for (var i in result) {
            const tr = document.createElement('tr');
            tr.id = i;
            let temp = Date.now();
            result[i].quote.latestUpdate =  Math.round((result[i].quote.latestUpdate - temp ) / 10) / 100;
            for (var j in result[i].quote) {
                const td = document.createElement('td');
                td.id = j;                              
                td.textContent = result[i].quote[j];
                tr.append(td);
            }
            tbody.append(tr);
        }
        table.append(tbody);
        dev.append(table);
        TIME_UPDATE = Date.now();
    })

    //создание интервала для выполнения INTERVAL_REQUEST
    let observable = interval(INTERVAL_REQUEST)
    .pipe(
        map(_ => SendRequest()),
    )

//подписываемся на обновление данных
observable.subscribe(data => {
    data.then(result => {
        const element = document.getElementsByTagName('body')[0];
        for (var i in result) {
            let temp = Date.now();
            result[i].quote.latestUpdate =  Math.round((result[i].quote.latestUpdate - temp ) / 10) / 100;
            for (var j in result[i].quote) {
                element.querySelector('#' + i + ' > #' + j).textContent = result[i].quote[j];
            }
        }
        TIME_UPDATE = Date.now();
    })
})

//создание таймера
let timeToNextUpdate$ = interval(100)
    .subscribe(() => {
        if (TIME_UPDATE != 0) {
            const temp = document.getElementById('nextUpdate');
            temp.textContent = (Math.round((Date.now() - TIME_UPDATE) / 100) / 10).toString();
        }
    });