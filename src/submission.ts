export type SubmissionFields = {upper:string;lower:string;author:string;dynasty:string;position:string;note:string;source:string};
export type Submission = SubmissionFields & {kind:'new'|'existing';place:string;work:string;consent:boolean};
export const validEndpoint=(value:string)=>/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(value);
export function validateSubmission(data:Submission){
 const errors:Record<string,string>={};
 if(data.kind==='new'){
  if(!data.upper.trim())errors.upper='请填写上联';
  if(!data.lower.trim())errors.lower='请填写下联';
 }else if(!data.note.trim())errors.note='请填写要补充的资料或解读';
 if(!data.consent)errors.consent='请确认同意将资料私下发送给站主审核';
 return errors;
}
export async function sendSubmission(endpoint:string,data:Submission,request:typeof fetch=fetch){
 if(!validEndpoint(endpoint))throw new Error('投稿接收尚未启用，本次没有发送。');
 const errors=validateSubmission(data);
 if(Object.keys(errors).length)throw new Error(Object.values(errors)[0]);
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await request(endpoint,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({
   subject:'联苑待审核投稿 · '+data.place,
   kind:data.kind==='new'?'新增对联':'补充已有对联',place:data.place,work:data.work,
   upper:data.kind==='new'?data.upper.trim():'',lower:data.kind==='new'?data.lower.trim():'',
   author:data.kind==='new'?data.author.trim():'',dynasty:data.kind==='new'?data.dynasty.trim():'',position:data.kind==='new'?data.position.trim():'',
   note:data.note.trim(),source:data.source.trim(),reviewStatus:'待站主审核，未经确认不得公开',consent:'同意私下送审',
  })});
  if(!response.ok)throw new Error(response.status===429?'提交太频繁，请稍后再试。填写内容仍保留在本页。':'收件服务未确认接收，请稍后再试。填写内容仍保留在本页。');
 }catch(error){
  if(error instanceof TypeError||(error instanceof Error&&error.name==='AbortError'))throw new Error('网络中断或等待超时，无法确认是否收到。请勿连续重复提交；填写内容仍保留在本页。');
  throw error;
 }finally{clearTimeout(timer)}
}
