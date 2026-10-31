/* eslint-disable no-undef */
import { writeFileSync, mkdirSync } from 'fs';
import { createCanvas } from 'canvas';

const publicPng = (name) => `public/images/projects/cultureflow/${name}.png`;
mkdirSync('public/images/projects/cultureflow', { recursive: true });

const roundRect = (ctx,x,y,w,h,r,doFill,doStroke) => {
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
  if (doFill) ctx.fill();
  if (doStroke) ctx.stroke();
};

const frame = (ctx,w,h) => {
  ctx.fillStyle = '#0b0b12'; ctx.fillRect(0,0,w,h);
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  for (let x=0; x<w; x+=22){ for (let y=0; y<h; y+=22){ ctx.beginPath(); ctx.arc(x,y,1.4,0,Math.PI*2); ctx.fill(); } }
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 2;
  roundRect(ctx,50,50,w-100,h-100,18,true,true);
};

const card = (ctx,x,y,w,h,accent) => {
  ctx.fillStyle = '#0f0f1a';
  ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 1.5;
  roundRect(ctx,x,y,w,h,16,true,true);
  ctx.globalAlpha = 0.18; ctx.fillStyle = accent;
  roundRect(ctx,x,y,w,h,16,true,false);
  ctx.globalAlpha = 1;
  ctx.strokeStyle = accent; ctx.globalAlpha = 0.55; ctx.lineWidth = 1.5; ctx.setLineDash([6,8]);
  roundRect(ctx,x,y,w,h,16,true,false);
  ctx.setLineDash([]); ctx.globalAlpha = 1;
};



const make = async (path,w,h,cb) => {
  const canvas = createCanvas(w,h);
  const ctx = canvas.getContext('2d');
  await cb(ctx,w,h);
  const buf = canvas.toBuffer('image/png');
  writeFileSync(path, buf);
  console.log('saved', path, 'bytes', buf.length);
};

await make(publicPng('immersions-global'),1200,630, (ctx,w,h)=>{
  frame(ctx,w,h);
  const cx = 100;
  const cardW = 1000;
  const card1Y = 110;
  const card2Y = 260;
  const card3Y = 410;
  const cardH = 120;
  const accents = [ '#6c5ce7', '#00b894', '#fdcb6e' ];
  const names = [
    'TECH & INNOVATION  —  Frontier AI, robotics, and emerging technology ecosystems.',
    'SUSTAINABILITY & IMPACT  —  Environmental systems, sustainable development, and institutions shaping the next era of sustainability.',
    'HERITAGE & CULTURE  —  Art, architecture, civilisations, and institutional heritage.',
  ];
  for (let i=0;i<3;i++){
    const y = [card1Y,card2Y,card3Y][i];
    card(ctx,cx,y,cardW,cardH,accents[i]);
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 22px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillText((i+1)+'.', cx+40, y+cardH/2);
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 22px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
    ctx.fillText(names[i].split('  —  ')[0], cx+120, y+cardH/2 - 14);
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = `400 18px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
    ctx.fillText(names[i].split('  —  ')[1], cx+120, y+cardH/2 + 18);
  }
});
console.log('DONE_IMMERSIONS');