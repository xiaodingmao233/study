//求平均数
var pjs=[
  ['小明',87],
  ['小红',81],
  ['小花',97],
  ['小天',76],
  ['小张',74],
  ['小小',94],
  ['小西',90],
  ['小武',76],
  ['小迪',64],
  ['小曼',76]
]
var i,j;
var sum=0;
for(var i=0;i<pjs.length;i++){

  for(j=0;j<pjs[i].length;j++)
  {
      if(j==pjs[i].length-1)
      {
          sum+=pjs[i][j];
          
      }
      
  }
}
console.log(sum / pjs.length)