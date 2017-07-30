"use strict";
const async = require('async');
const m = require('./parsers.js');
const fs = require('fs');

let date = new Date();
date = date.toLocaleDateString() + "_" + date.toLocaleTimeString().replace(/:/g,'-');
let dir = 'parsed/'+date;

try{fs.mkdirSync('parsed')}catch(ex){}
fs.mkdirSync(dir);

function parse_iphone7plus(onParsed){
    let fileName = `${dir}/iphone7+.csv`;
    async.parallel([
        onMagDone=>m.mobileButik(2435814,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-iphone-7-plus.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('get_iphone/iPhone%207%20plus/iphone_7_plus/_7s',fileName,onMagDone),
        onMagDone=>m.istorespb('iphone-7-plus',fileName,onMagDone),
        onMagDone=>m.shop9282922('iphone_7_plus/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-iphone-7-plus/',fileName,onMagDone),
        onMagDone=>m.gsmStore('telefony/telefony-apple-iphone/iphone-7-plus/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('iphone/iphone_7_plus',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('iphone7_plus/',fileName,onMagDone),
        onMagDone=>m.appleZone('iphone-7-plus/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPhone-7-Plus/',fileName,onMagDone),
        onMagDone=>m.telemarket24('iphone/filter/model-is-dd4224a1-8c5e-11e6-b857-001e676a3832-or-fce11fd9-9e75-11e6-9bfa-001e676a3832-or-53a35d3d-b3da-11e6-b2cd-001e676a3832-or-50a4c6c2-b9fc-11e6-b2cd-001e676a3832/apply/?view=table&page_count=100&sort=name&by=asc',fileName,onMagDone),
        onMagDone=>m.restore('apple-iphone/?TYPE%5B%5D=9131/',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_iphone7(onParsed){
    let fileName = `${dir}/iphone7.csv`;
    async.series([
        onMagDone=>m.mobileButik(2435791,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-iphone-7.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('get_iphone/iPhone%207/iphone_7--/_plus_5s_5c_4s_6s_7s',fileName,onMagDone),
        onMagDone=>m.istorespb('iphone-7',fileName,onMagDone),
        onMagDone=>m.shop9282922('iphone_7/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-iphone-7/',fileName,onMagDone),
        onMagDone=>m.gsmStore('telefony/telefony-apple-iphone/iphone-7/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('iphone/iphone_7',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('iphone_7/',fileName,onMagDone),
        onMagDone=>m.appleZone('iphone-7/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPhone-7/',fileName,onMagDone),
        onMagDone=>m.telemarket24('iphone/filter/model-is-9e38dd7b-7e50-11e6-a75d-001e676a3832-or-9e38dd90-7e50-11e6-a75d-001e676a3832-or-bd97572b-893d-11e6-bc16-001e676a3832-or-dd422476-8c5e-11e6-b857-001e676a3832-or-6995f348-8d24-11e6-b857-001e676a3832-or-5d49304b-97b2-11e6-9bfa-001e676a3832/apply/?view=table&page_count=100&sort=name&by=asc',fileName,onMagDone),
        onMagDone=>m.restore('apple-iphone/?TYPE%5b%5d=9129/',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_iphoneSE(onParsed){
    let fileName = `${dir}/iphoneSE.csv`;
    async.series([
        onMagDone=>m.mobileButik(2186059,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-iphone-se.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('get_iphone/iPhone%20SE/iphone_se/_5s_5c_5_4s_6s_7',fileName,onMagDone),
        onMagDone=>m.istorespb('iphone-se',fileName,onMagDone),
        onMagDone=>m.shop9282922('iphone_se/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-iphone-se/',fileName,onMagDone),
        onMagDone=>m.gsmStore('telefony/telefony-apple-iphone/iphone-se/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('iphone/iphone_se',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('iphone_se/',fileName,onMagDone),
        onMagDone=>m.appleZone('iphone-se/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iphone-5s/',fileName,onMagDone), //Всё верно
        onMagDone=>m.telemarket24('iphone/filter/model-is-2e3694a4-63ac-11e6-9ceb-001e676a3832/apply/?view=table&page_count=100&sort=name&by=asc',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_iphone6splus(onParsed){
    let fileName = `${dir}/iphone6s+.csv`;
    async.series([
        onMagDone=>m.mobileButik(1882697,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-iphone-6s-plus.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('get_iphone/iPhone%206s%20plus/iphone_6s_plus',fileName,onMagDone),
        onMagDone=>m.istorespb('iphone-6s-plus',fileName,onMagDone),
        onMagDone=>m.shop9282922('iphone_6s_plus/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-iphone-6s-plus/',fileName,onMagDone),
        onMagDone=>m.gsmStore('telefony/telefony-apple-iphone/iphone-6s-plus-/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('iphone/iphone_6s_plus',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('iphone6s_plus/',fileName,onMagDone),
        onMagDone=>m.appleZone('iphone-6s-plus/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPhone-6S-Plus/',fileName,onMagDone),
        onMagDone=>m.restore('apple-iphone/?TYPE%5B%5D=7231/',fileName,onMagDone)
        //Нет данной модели
        //onMagDone=>m.telemarket24('iphone/filter/model-is-2e3694a4-63ac-11e6-9ceb-001e676a3832/apply/?view=table&page_count=100&sort=name&by=asc',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_iphone6s(onParsed){
    let fileName = `${dir}/iphone6s.csv`;
    async.series([
        onMagDone=>m.mobileButik(1868959,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-iphone-6s.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('get_iphone/iPhone%206s/iphone_6s/_plus_5s_5c_5_4s',fileName,onMagDone),
        onMagDone=>m.istorespb('iphone-6-s',fileName,onMagDone),
        onMagDone=>m.shop9282922('iphone_6s/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-iphone-6s/',fileName,onMagDone),
        onMagDone=>m.gsmStore('telefony/telefony-apple-iphone/iphone-6s/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('iphone/iphone_6s',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('iphone6s/',fileName,onMagDone),
        onMagDone=>m.appleZone('iphone-6s/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPhone-6S/',fileName,onMagDone),
        onMagDone=>m.restore('apple-iphone/?TYPE%5B%5D=7229/',fileName,onMagDone)
        //Нет данной модели
        //onMagDone=>m.telemarket24('iphone/filter/model-is-2e3694a4-63ac-11e6-9ceb-001e676a3832/apply/?view=table&page_count=100&sort=name&by=asc',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_ipadPro(onParsed){
    let fileName = `${dir}/ipadPro.csv`;
    async.series([
        onMagDone=>m.mobileButik(2296519,fileName,onMagDone),
        onMagDone=>m.insclub('apple-ipad-pro.html',fileName,onMagDone),
        onMagDone=>m.shop9282922('ipad_pro/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-ipad-9-7-pro/',fileName,onMagDone),
        onMagDone=>m.gsmStore('planshety/planshety-apple-ipad/apple-ipad-pro-9-7/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.gsmStore('planshety/planshety-apple-ipad/apple-ipad-pro-12.9/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('apple_ipad/ipad_pro',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('ipad/',fileName,onMagDone),
        onMagDone=>m.appleZone('ipad-pro/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPad/iPad-Pro/',fileName,onMagDone),
        onMagDone=>m.idastore('iPad/iPad-Pro-9-7/',fileName,onMagDone),
        onMagDone=>m.restore('apple-ipad/?TYPE%5B%5D=7287/',fileName,onMagDone),
        onMagDone=>m.restore('apple-ipad/?TYPE%5B%5D=7287&page=2',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_ipadMini4(onParsed){
    let fileName = `${dir}/ipadMini4.csv`;
    async.series([
        onMagDone=>m.mobileButik(1959173,fileName,onMagDone),
        onMagDone=>m.insclub('kupit-ipad-mini-4.html',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-ipad-mini-4/',fileName,onMagDone),
        onMagDone=>m.gsmStore('planshety/planshety-apple-ipad/apple-ipad-mini-4-/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('apple_ipad/ipad_mini_4',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('ipadmini4/',fileName,onMagDone),
        onMagDone=>m.appleZone('ipad-mini-4/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iPad-Mini-Retina-3/',fileName,onMagDone),
        onMagDone=>m.restore('apple-ipad/?TYPE%5B%5D=7227/',fileName,onMagDone),
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_ipadAir2(onParsed){
    let fileName = `${dir}/ipadAir2.csv`;
    async.series([
        onMagDone=>m.mobileButik(1350579,fileName,onMagDone),
        onMagDone=>m.insclub('apple-ipad-air-2.html',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-ipad-air-2/',fileName,onMagDone),
        onMagDone=>m.gsmStore('planshety/planshety-apple-ipad/planshety-ipad-air-2/?PAGE_SIZE=100',fileName,onMagDone),
        onMagDone=>m.iphonepiter('apple_ipad/ipad_air_2',fileName,onMagDone),
        onMagDone=>m.iphoneiphone('ipadair2/',fileName,onMagDone),
        onMagDone=>m.appleZone('ipad-air-2/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('ipad-5/',fileName,onMagDone),
        onMagDone=>m.restore('apple-ipad/?TYPE%5B%5D=5594/',fileName,onMagDone),
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_appleWatch(onParsed){
    let fileName = `${dir}/appleWatch.csv`;
    async.series([
        onMagDone=>m.mobileButik(2555649,fileName,onMagDone),
        onMagDone=>m.mobileButik(2556644,fileName,onMagDone),
        onMagDone=>m.centrsvyazi('search?parts=apple+watch',fileName,onMagDone),
        onMagDone=>m.insclub('kupit-apple-watch.html',fileName,onMagDone),
        onMagDone=>m.shop9282922('watch_sport/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-watch-modern-buckle/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-watch-sport-silver/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-watch-sport-space-grey/',fileName,onMagDone),
        onMagDone=>m.smartbit('product_gadget/apple-watch-sport-gold/',fileName,onMagDone),
        onMagDone=>m.gsmStore('smart-watch/apple/nike/',fileName,onMagDone),
        onMagDone=>m.gsmStore('smart-watch/apple/series-1-18/',fileName,onMagDone),
        onMagDone=>m.gsmStore('smart-watch/apple/series-1-15/',fileName,onMagDone),
        onMagDone=>m.iphonepiter('apple_watch',fileName,onMagDone),
        onMagDone=>m.iphonepiter('apple_watch/page/2',fileName,onMagDone),
        onMagDone=>m.appleZone('watch/?SHOWALL_191=1',fileName,onMagDone),
        onMagDone=>m.idastore('iWatch/Apple-Watch-Series-2/apple-watch-38-mm/',fileName,onMagDone),
        onMagDone=>m.idastore('iWatch/Apple-Watch-Series-2/apple-watch-42-mm/',fileName,onMagDone),
        onMagDone=>m.idastore('iWatch/Apple-Watch-Nike-plus/apple-watch-nike-42-mm/',fileName,onMagDone),
        onMagDone=>m.idastore('iWatch/Apple-Watch-Nike-plus/Apple-Watch-Nike-38/',fileName,onMagDone),
        onMagDone=>m.restore('apple-watch/',fileName,onMagDone),
        onMagDone=>m.restore('apple-watch/?page=2',fileName,onMagDone),
        onMagDone=>m.restore('apple-watch/?page=3',fileName,onMagDone),
        onMagDone=>m.restore('apple-watch/?page=4',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_gamebox(onParsed){
    let fileName = `${dir}/gamebox.csv`;
    async.series([
        onMagDone=>m.mobileButik(2302210,fileName,onMagDone),
        onMagDone=>m.mobileButik(2302212,fileName,onMagDone),
        onMagDone=>m.mobileButik(2302154,fileName,onMagDone),
        onMagDone=>m.insclub('playstation-4.html',fileName,onMagDone),
        onMagDone=>m.insclub('microsoft-game.html',fileName,onMagDone),
        onMagDone=>m.centrsvyazi('others/consoles',fileName,onMagDone),
        onMagDone=>m.shop9282922('pristavki/',fileName,onMagDone),
        onMagDone=>m.smartbit('cat/play/',fileName,onMagDone),
        onMagDone=>m.gsmStore('pristavki/?PAGE_SIZE=100',fileName,onMagDone)
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}

function parse_mixed(onParsed){
    let fileName = `${dir}/mixed.csv`;
    async.series([
        onMagDone=>m.pitergsm(fileName,onMagDone),  //Всё в кучу
        onMagDone=>m.centrsvyazi('catalog/tablets/apple',fileName,onMagDone),  //Все планшеты в кучу
    ],err=>{
        if(err) return onParsed(err);
        console.log(`${fileName} appended`);
        onParsed()
    })
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                ГЛАВНЫЙ ЦИКЛ                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async.parallel([
    (callback)=>parse_mixed(callback),
    (callback)=>parse_iphone7plus(callback),
    (callback)=>parse_iphone7(callback),
    (callback)=>parse_iphoneSE(callback),
    (callback)=>parse_iphone6splus(callback),
    (callback)=>parse_iphone6s(callback),
    (callback)=>parse_ipadPro(callback),
    (callback)=>parse_ipadMini4(callback),
    (callback)=>parse_ipadAir2(callback),
    (callback)=>parse_appleWatch(callback),
    (callback)=>parse_gamebox(callback),
],function(err){
    if(err) console.error(err);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////