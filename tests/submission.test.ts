import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sendSubmission,validateSubmission,validEndpoint,type Submission} from '../src/submission.ts';
const data:Submission={kind:'new',place:'杭州 · 灵隐寺',work:'',upper:'测试上联',lower:'测试下联',author:'',dynasty:'',position:'',note:'测试资料',source:'来源待核',consent:true};
test('没有有效收件地址或未同意私下送审时不发送',async()=>{
 let calls=0;const fake:typeof fetch=async()=>{calls++;return new Response('',{status:200})};
 assert.equal(validEndpoint('https://example.com/f/test'),false);
 await assert.rejects(sendSubmission('',data,fake));
 await assert.rejects(sendSubmission('https://formspree.io/f/test',{...data,consent:false},fake));
 assert.equal(calls,0);
 assert.ok(validateSubmission({...data,upper:'  '}).upper);
 assert.ok(validateSubmission({...data,kind:'existing',note:''}).note);
});
test('接收确认后才返回成功，提交内容仅为待审核资料',async()=>{
 let sent:Record<string,string>={};
 await sendSubmission('https://formspree.io/f/test',data,async(_url,options)=>{sent=JSON.parse(String(options?.body));return new Response('',{status:200})});
 assert.equal(sent.upper,'测试上联');assert.equal(sent.reviewStatus,'待站主审核，未经确认不得公开');assert.equal(sent.place,data.place);
});
test('已有对联补充不携带隐藏的新联文字段',async()=>{
 await sendSubmission('https://formspree.io/f/test',{...data,kind:'existing'},async(_url,options)=>{const sent=JSON.parse(String(options?.body));assert.equal(sent.upper,'');assert.equal(sent.lower,'');return new Response('',{status:200})});
});
test('限流、服务错误、断网均不报告成功',async()=>{
 for(const status of [400,429,500])await assert.rejects(sendSubmission('https://formspree.io/f/test',data,async()=>new Response('',{status})));
 await assert.rejects(sendSubmission('https://formspree.io/f/test',data,async()=>{throw new TypeError('offline')}),/无法确认是否收到/);
});
