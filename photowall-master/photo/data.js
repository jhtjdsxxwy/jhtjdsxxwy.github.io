var data = [];

var dataStr = "\
photo1&1&...$\
photo2&2&...$\
photo3&3&...$\
photo4&4&...$\
photo5&5&...$\
photo6&6&...$\
photo7&7&...$\
photo8&8&...$\
photo9&9&...$\
photo10&10&...$\
photo11&11&...$\
photo12&12&...$\
photo13&13&...$\
photo14&14&...$\
photo15&15&...$\
photo16&16&...$\
photo17&17&...$\
photo18&18&...$\
photo19&19&...$\
photo20&20&...$\
photo21&21&...\
"


var d = dataStr.split("$");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("&");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[1],
    desc: c[2]
  });
}

