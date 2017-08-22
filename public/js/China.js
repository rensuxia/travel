if(sessionStorage['loginUname']!=undefined){
    $('#top').load('header.html',function () {
        //页头已经异步加载完成，挂载到DOM树
        $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']+"<a onclick='javascript:del();' href='javascript:del();'>[注销]</a>");
    });
    $('#footer').load('footer.html');
}

/*山景--标签页*/
+function(){
    var lis=document.querySelectorAll("#header ul li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function (e) {
                e.preventDefault();
                if (this.className!="current") {
                    this.parentNode.querySelector(".current").className="";
                    this.className="current";
                    var show=document.querySelector("#mountain>.show");
                    if (show!=null)
                        show.className="";
                    var href=this.firstElementChild.href;
                    if(href!=""){
                        var lasti=href.lastIndexOf("#");
                        var id=href.slice(lasti+1);
                        document.getElementById(id).className="show";
                    }
                }
            }
        )
    }
}();
/*古镇--标签页*/
+function(){
    var lis=document.querySelectorAll("#town ul li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function (e) {
                e.preventDefault();
                if (this.className!="current") {
                    this.parentNode.querySelector(".current").className="";
                    this.className="current";
                    var show=document.querySelector("#town>.show");
                    if (show!=null)
                        show.className="";
                    var href=this.firstElementChild.href;
                    if(href!=""){
                        var lasti=href.lastIndexOf("#");
                        var id=href.slice(lasti+1);
                        document.getElementById(id).className="show";
                    }
                }
            }
        )
    }
}();
/*海--标签页*/
+function(){
    var lis=document.querySelectorAll("#sea ul li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function (e) {
                e.preventDefault();
                if (this.className!="current") {
                    this.parentNode.querySelector(".current").className="";
                    this.className="current";
                    var show=document.querySelector("#sea>.show");
                    if (show!=null)
                        show.className="";
                    var href=this.firstElementChild.href;
                    if(href!=""){
                        var lasti=href.lastIndexOf("#");
                        var id=href.slice(lasti+1);
                        document.getElementById(id).className="show";
                    }
                }
            }
        )
    }
}();
/*花海--标签页*/
+function(){
    var lis=document.querySelectorAll("#flower ul li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function (e) {
                e.preventDefault();
                if (this.className!="current") {
                    this.parentNode.querySelector(".current").className="";
                    this.className="current";
                    var show=document.querySelector("#flower>.show");
                    if (show!=null)
                        show.className="";
                    var href=this.firstElementChild.href;
                    if(href!=""){
                        var lasti=href.lastIndexOf("#");
                        var id=href.slice(lasti+1);
                        document.getElementById(id).className="show";
                    }
                }
            }
        )
    }
}();
/*瀑布--标签页*/
+function(){
    var lis=document.querySelectorAll("#waterfall ul li");
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function (e) {
                e.preventDefault();
                if (this.className!="current") {
                    this.parentNode.querySelector(".current").className="";
                    this.className="current";
                    var show=document.querySelector("#waterfall>.show");
                    if (show!=null)
                        show.className="";
                    var href=this.firstElementChild.href;
                    if(href!=""){
                        var lasti=href.lastIndexOf("#");
                        var id=href.slice(lasti+1);
                        document.getElementById(id).className="show";
                    }
                }
            }
        )
    }
}();
// 绘制字体图标
var page=document.getElementById('page');
page.innerHTML='\uf015';
var heart=document.getElementById('heart');
heart.innerHTML='\uf004';
var star=document.getElementById('star');
star.innerHTML='\uf005';
//绘制字体精彩和最美山景的随机颜色
//random number 返回指定范围内的随机整数
function rn(min,max) {
    var n=Math.floor(Math.random()*(max-min)+min);
    return n;
}
//定义颜色---颜色随机
function rcolor(min,max) {
    var r=rn(min,max);
    var g=rn(min,max);
    var b=rn(min,max);
    return `rgb(${r},${g},${b})`;
}
var go=document.getElementById('go');
go.style.color=rcolor(0,255);
/*广告轮播*/
if(!window.jQuery){
    throw new Error('China.js依赖于jQuery！');
}
/*最美山景轮播--*/
jQuery.fn.carousel = function(){
    var interval = 3000;
    var duration = 500;
    var $imgList = this.children('img');
    var cur = 0;
    var next = 1;
    setInterval(function(){
        china();
    }, interval);
    //进行广告轮换
    function china(){
        $imgList.eq(cur).animate({left:'-100%'},duration,function(){
            $(this).removeClass('active');
        })
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '0'},duration);
        cur = next;  //<=0     <=1
        next++;
        if(next>=$imgList.length){
            next = 0;
        }
    }
}

