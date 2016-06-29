function solve24(n1,n2,n3,n4){
  var p = false;
  var num = [parseInt(n1),parseInt(n2),parseInt(n3),parseInt(n4)];
  var sign = ["+","-","*","/"];
  calc:{
    for(a=0;a<=3;a++){
      for(b=0;b<=3;b++){
        if(b!=a){
          for(c=0;c<=3;c++){
            if(c!=b && c!=a){
              for(d=0;d<=3;d++){
                if(d!=c && d!=b && d!=a){
                  for(x=0;x<=3;x++){
                    for(y=0;y<=3;y++){
                      for(z=0;z<=3;z++){
                        var r = '(('+num[a]+sign[x]+num[b]+')'+sign[y]+num[c]+')'+sign[z]+num[d];
                        if(eval(r)==24){
                          var p = r;
                          break calc;
                        }
                        var r = num[a]+sign[x]+'(('+num[b]+sign[y]+num[c]+')'+sign[z]+num[d]+')';
                        if(eval(r)==24){
                          var p = r;
                          break calc;
                        }
                        var r = '('+num[a]+sign[x]+'('+num[b]+sign[y]+num[c]+'))'+sign[z]+num[d];
                        if(eval(r)==24){
                          var p = r;
                          break calc;
                        }
                        var r = num[a]+sign[x]+'('+num[b]+sign[y]+'('+num[c]+sign[z]+num[d]+'))';
                        if(eval(r)==24){
                          var p = r;
                          break calc;
                        }
                        var r = '('+num[a]+sign[x]+num[b]+')'+sign[y]+'('+num[c]+sign[z]+num[d]+')';
                        if(eval(r)==24){
                          var p = r;
                          break calc;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return p;
}
