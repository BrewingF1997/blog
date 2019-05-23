window.onload=function(){//当页面加载完成时执行操作
    var objBox=document.getElementById("box");//获取一个对象  id
//            alert(objBox.innerHTML); //看看对象成功与否
    var str="<div class='pic'>";
        for(var i=1;i<=16;++i){
            if(i<10){
                str+="<img src='/blog/images/gflife/"+i+".jpg' />";
            }else if(i<100){
                str+="<img src='/blog/images/gflife/"+i+".jpg' />";
            }else{
                str+="<img src='/blog/images/gflife/"+i+".jpg' />";
            }
        }
        str+="</div>";
        objBox.innerHTML=str;//将对象中的内容修改
    }