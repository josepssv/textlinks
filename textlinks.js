$( document ).ready(function() {
      var fr=''
   	var txt=$('#lista').text()
    var splitext= txt.split("\n")
    var spaces=[], u
    for(var a=0;a<splitext.length;a++){
        u=splitext[a].split(' ')
        spaces.push(u)    
    }
  var cad=''
  var contf=0
   for(var a=0;a<spaces.length;a++){
       if(spaces[a][2] != null){
       if(spaces[a][2].substring(0,4)=='http'){
        cad+=spaces[a][0]+' '+'<a href="'+spaces[a][2]+'" target="_blank">'+spaces[a][1]+'</a><br />';
         //splitext[a].split(' ')
         fr+='<iframe src="'+spaces[a][2]+'"  width="400"   height="400"></iframe>'
         contf++
         if(contf%4==0){fr+='<br>'}
          if(contf%4==0){fr+='<div style="margin-top:20px;height:20px;"></div>'}
       }else{
        cad+=spaces[a].join(' ') +'<br />';//splitext[a].split(' ')
       }
     }else{
      cad+='<br />';
     }
    }
  //$('#lista').html(cad+'<br>'+fr)
  $('#lista').html(cad+'<br>')
   // alert(spaces.join("\n"))
  })
