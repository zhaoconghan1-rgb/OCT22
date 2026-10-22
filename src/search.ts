import {couplets,getCity,getPlace} from './data.ts';
export type SearchValues={q:string;place:string;author:string;dynasty:string};
export const blankSearch:SearchValues={q:'',place:'',author:'',dynasty:''};
export function readSearch(params:URLSearchParams):SearchValues{return {q:params.get('q')||'',place:params.get('place')||'',author:params.get('author')||'',dynasty:params.get('dynasty')||''}}
export function searchRoute(values:SearchValues){const p=new URLSearchParams();Object.entries(values).forEach(([k,v])=>{if(v.trim())p.set(k,v.trim())});return '/search'+(p.size?'?'+p.toString():'')}
export const normalize=(s:string)=>s.replace(/[\s，。；、！？,.!?;：:「」“”]/g,'').toLowerCase();
export function findCouplets(values:SearchValues){const tokens=values.q.trim().split(/\s+/).filter(Boolean).map(normalize);return couplets.filter(c=>{const p=getPlace(c.placeId)!;const text=normalize(c.upper+c.lower);return tokens.every(t=>text.includes(t))&&normalize(getCity(p.cityId).name+p.name).includes(normalize(values.place))&&normalize(c.author||'').includes(normalize(values.author))&&(!values.dynasty||c.dynasty===values.dynasty)})}
