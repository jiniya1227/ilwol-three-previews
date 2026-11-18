const E=require('../../center-engine.js');
const config=require('../../center-config.json');;
exports.handler=async(event)=>{
 const d=await E.syncRate(config);
 const page=event.queryStringParameters?.page||'index.html';
 const text=page==='llms.txt'?E.buildLlms(E.derive(d)):E.buildPage(d,{page,synced:true});
 return {statusCode:200,headers:{'Content-Type':page==='llms.txt'?'text/plain; charset=utf-8':'text/html; charset=utf-8','Cache-Control':'no-store'},body:text};
 };