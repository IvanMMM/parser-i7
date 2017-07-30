const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const iconv = require('iconv-lite');

var requestBase = request.defaults({
    forever: true,
    //gzip: true,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4',
        'Accept-Encoding': 'deflate, sdch, br',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
    }
});

//Магазины
//http://mobile-butik.ru/
function mobileButik(id,fileName,callback){
    const magUrl = `http://mobile-butik.ru/products/category/${id}`;
    let selectorName = 'div.product-item>div>div.product-link>a:first-child';
    let selectorPrice = 'span.product-price-data';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el['attribs']['data-cost'])
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data)
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://www.mobile-butik.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://www.insclub.ru/
function insclub(url,fileName,callback){
    const magUrl = `http://www.insclub.ru/${url}`;
    let selectorName = 'a.name';
    let selectorPrice = 'div.price > span.pprices';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data)
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data)
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://www.insclub.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://www.pitergsm.ru/
function pitergsm(fileName,callback){
    const magUrl = `http://www.pitergsm.ru/e-store/phones/apple/`;
    let selectorName = 'div.title>a';
    let selectorPrice = 'div.price';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://www.insclub.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//https://www.centrsvyazi.ru/
function centrsvyazi(url,fileName,callback){
    const magUrl = `https://centrsvyazi.ru/${url}`;
    let selectorPrice = 'div.info>div.price';

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        fs.appendFileSync(fileName,`http://www.centrsvyazi.ru\r\n`);
        $(selectorPrice).each((i,el)=>{
            let name = el.children[1].attribs['data-name'];
            let price = el.children[1].attribs['data-price'];
            let string = `${name};${price}\r\n`;
            fs.appendFileSync(fileName,string);
        });
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://www.istorespb.ru/
function istorespb(url,fileName,callback){
    const magUrl = `http://istorespb.ru/${url}`;
    let selectorName = 'div.product div.name>a';
    let selectorPrice = 'div.product div.jshop_price>span';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('.00 руб',''))
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.replace(/\n/g,'').trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://www.istorespb.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//https://shop.9282922.ru/
function shop9282922(url,fileName,callback){
    const magUrl = `https://shop.9282922.ru/catalog/${url}`;
    let selectorName = 'div.list>div.item div.title>a';
    let selectorPrice = 'div.list>div.item div.price';
    let names = [];
    let prices = [];

    requestBase(magUrl,{encoding:null}, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)
        body = iconv.decode(body, 'win1251');

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('руб.','').replace(/\s/g,''))
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.replace('Смартфон','').trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://shop.9282922.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://smartbit.spb.ru/
function smartbit(url,fileName,callback){
    const magUrl = `http://smartbit.spb.ru/${url}`;
    let selector = 'div.main_img_wrap>img';

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        fs.appendFileSync(fileName,`http://smartbit.spb.ru\r\n`);
        $(selector).each((i,el)=>{
            let _class = el.attribs.class.replace('active','').trim();
            let price = el.attribs['data-price'];
            if(price == 0) price = 'По запросу';
            let string = `${_class};${price}\r\n`;
            fs.appendFileSync(fileName,string);
        });
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://gsm-store.ru/
function gsmStore(url,fileName,callback){
    const magUrl = `http://gsm-store.ru/${url}`;
    let selectorName = 'div.product-list-holder>ul.product-list>li>strong.title>a';
    let selectorPrice = 'div.product-list-holder>ul.product-list>li>span.price';
    let names = [];
    let prices = [];

    requestBase(magUrl,{encoding:null}, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)
        body = iconv.decode(body, 'win1251');

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('руб.','').replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length){
            console.log(magUrl);
            console.log(prices);
            console.log(names);
            throw new Error('Invalid length');
        }
        fs.appendFileSync(fileName,`http://www.gsm-store.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://iphonepiter.ru/
function iphonepiter(url,fileName,callback){
    const magUrl = `http://iphonepiter.ru/shop/${url}`;
    let selectorName = 'div.miniwrapper>a.itemitem h3.product-name';
    let selectorPrice = 'div.miniwrapper>a.itemitem span.price';
    let names = [];
    let prices = [];

    requestBase(magUrl,{encoding:null,gzip:true}, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)
        body = iconv.decode(body, 'utf8');

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            let data = el.children[0].data || el.children[0].children[0].data;
            prices.push(data.replace('руб.','').replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            let name = el.children[0].data.trim();
            if(el.children[2]) name += el.children[2].data;
            names.push(name)
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://iphonepiter.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://iphoneiphone.ru/
function iphoneiphone(url,fileName,callback){
    const magUrl = `http://iphoneiphone.ru/${url}`;
    let selectorName = 'div.product-grid h3.name span';
    let selectorPrice = 'div.product-grid div.price p>span[itemprop=price]';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('р.','').replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://iphoneiphone.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://apple-zone.ru
function appleZone(url,fileName,callback){
    const magUrl = `http://apple-zone.ru/category/${url}`;
    let selector = 'div.catalog-line-butt_bar>a.vkredit';

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        fs.appendFileSync(fileName,`http://apple-zone.ru\r\n`);
        $(selector).each((i,el)=>{
            let elements = new RegExp(/\((.*)\)/).exec(el.attribs.onclick)[1].split(',',2);
            let name = elements[1].replace(/'/g,'');
            let price = elements[0].replace('.00','');
            let string = `${name};${price}\r\n`;
            fs.appendFileSync(fileName,string)
        });
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://idastore.ru
function idastore(url,fileName,callback){
    const magUrl = `http://idastore.ru/catalog/${url}`;
    let selectorName = 'div.c-item>a.c-item__heading';
    let selectorPrice = 'div.c-item>div.c-item__footer>b';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('р.','').replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://idastore.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://telemarket24.ru/
function telemarket24(url,fileName,callback){
    const magUrl = `http://telemarket24.ru/catalog/${url}`;
    let selectorName = 'tr.catalog-item>td.name>a.link>span';
    let selectorPrice = 'tr.catalog-item>td.avail-n-price>div.price>span.value';
    let names = [];
    let prices = [];

    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode)

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace('р.','').replace(/\s/g,'').trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length) throw new Error('Invalid length');
        fs.appendFileSync(fileName,`http://telemarket24.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}
//http://www.re-store.ru/
function restore(url,fileName,callback){
    const magUrl = `http://www.re-store.ru/${url}`;
    let selectorName = 'p.product-item__title>a';
    let selectorDescr = 'div.product-item__descr>p';
    let selectorPrice = 'span.product-item__price>span.product-item__price__num';
    let names = [];
    let descr = [];
    let prices = [];


    requestBase(magUrl, function (err, response, body){
        if (err || response.statusCode != 200) throw new Error(err || response.statusCode);

        //Парсим ответ
        let $ = cheerio.load(body);
        $(selectorPrice).each((i,el)=>{
            prices.push(el.children[0].data.replace(' руб','').replace(/\s/g,'').trim())
        });
        $(selectorDescr).each((i,el)=>{
            descr.push(el.children[0].data.trim())
        });
        $(selectorName).each((i,el)=>{
            names.push(el.children[0].data.trim())
        });
        if(prices.length != names.length){
            console.error(url);
            throw new Error('Invalid length');
        }
        fs.appendFileSync(fileName,`http://www.re-store.ru\r\n`);
        for(let i=0;i<prices.length;i++){
            let string = descr[i] ? `${names[i]};${prices[i]};${descr[i]}\r\n` : `${names[i]};${prices[i]}\r\n`;
            fs.appendFileSync(fileName,string)
        }
        fs.appendFileSync(fileName,`\r\n`);
        callback();
    })
}

module.exports = {
    mobileButik,
    insclub,
    pitergsm,
    centrsvyazi,
    istorespb,
    shop9282922,
    smartbit,
    gsmStore,
    iphonepiter,
    iphoneiphone,
    appleZone,
    idastore,
    telemarket24,
    restore
};