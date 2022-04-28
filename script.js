const btn = document.querySelector('.button');
const gamearea= document.querySelector('.gamearea');
const msg = document.querySelector('.msg');
btn.addEventListener('click',gameplay);

function gameplay(){
    btn.classList.add('hide');
    makerandomshape();
}

function makerandomshape(){
  const div = document.createElement('div');
  gamearea.append(div);
  div.style.position='absolute';
  div.style.height=(Math.random()*(75-25)+25)+'px';
  div.style.width=(Math.random()*(50-25)+25)+'px';
  div.style.borderRadius=(Math.random()*(10-1)+1)+'px';
  let col = Math.random().toString(16);
  col = '#'+col.substring(col.length-6);
  div.style.backgroundColor=col;
  let cur = div.getBoundingClientRect();
  let temp = gamearea.getBoundingClientRect()
  div.style.left=(Math.random()*(temp.width-10-cur.width))+'px';
  div.style.top=(Math.random()*(temp.height-10-cur.height))+'px';
  div.style.cursor='pointer';
  div.style.borderRadius=(Math.random()*50)+'%';
  div.style.border='3.5px solid black';
  let time = new Date();
  let t1=time.getTime();
  console.log(t1,'t1');
  div.addEventListener('click',()=>{
    div.remove();
    let time = new Date();
    let t2=time.getTime();
    let delta=(t2-t1)/1000;
    delta=delta.toFixed(3);
    msg.innerHTML=`You took ${delta} secs`;
    makerandomshape();
  });
}