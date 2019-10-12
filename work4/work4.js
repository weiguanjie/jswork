  document.write("<p>金字塔</p>")
  let level = prompt('请设置金字塔的层数')
  level= parseFloat(level)&&Number(level)
  if (isNaN (leve)) {
    alert('金字塔的层数是数学')
  }
  for(let i=1;i<=level;++i){
      let blank = level - i;
      for(let k=0;k<blank;++k){
      document.write('&nbsp;');
  }
  let star = i * 2 -1
  for (let j=0;j<star;++j){
      domcument.write('*')
  }
  document.write("<br>")
}
let str ='<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>'
    for(var j=1;j<=i;++j){
        str +='<td>' + '*' +i + '=' +(j*i)+'/td'
    }
    str +='</tr>'
}
str+='</table>'
document.getElementById('table').innerHTML = str