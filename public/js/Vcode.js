var w=120;
var h=30;
c1.width=w;
c1.height=h;
var ctx=c1.getContext('2d');
//填充背景颜色
ctx.fillStyle=rc(180,230);
ctx.fillRect(0,0,w,h);
//绘制随机字符
var arr=[];
var pool='ABCDEFGHJKLMNOPQRSTUVWXY123456789';
for(var i=0;i<4;i++){
    var c=pool[rn(0,pool.length)];
    var fs=rn(18,35);//随机字体大小
    var deg=rn(-45,45);//随机旋转角度
    ctx.font=fs+'px SimHei';
    ctx.fillStyle=rc(80,180);
    ctx.textBaseline='top';
    ctx.save();//保存当前的画笔状态
    ctx.translate(30*i+15,15);
    ctx.rotate(deg*Math.PI/180);
    ctx.fillText(c,-15+5,-15+5);
    ctx.restore();//恢复画笔状态
    arr.push(c);
}
console.log(arr);


//绘制六条干扰线
for(var i=0;i<6;i++){
    ctx.strokeStyle=rc(0,255);
    ctx.beginPath();
    ctx.moveTo(rn(0,w),rn(0,h));
    ctx.lineTo(rn(0,w),rn(0,h));
    ctx.stroke();
}
//干扰点--半径为1的圆
for(var i=0;i<50;i++){
    ctx.fillStyle=rc(0,255);
    ctx.beginPath();
    ctx.arc(rn(0,w),rn(0,h),0.8,0,2*Math.PI);
    ctx.fill();
}
//封住一个随机刷新的方法
function vocodeRefresh() {
    ctx.fillStyle=rc(180,230);
    ctx.fillRect(0,0,w,h);
//绘制随机字符
    var pool='ABCDEFGHJKLMNOPQRSTUVWXY123456789';
    for(var i=0;i<4;i++){
        var c=pool[rn(0,pool.length)];
        var fs=rn(18,35);//随机字体大小
        var deg=rn(-45,45);//随机旋转角度
        ctx.font=fs+'px SimHei';
        ctx.fillStyle=rc(80,180);
        ctx.textBaseline='top';
        ctx.save();//保存当前的画笔状态
        ctx.translate(30*i+15,15);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(c,-15+5,-15+5);
        ctx.restore();//恢复画笔状态
    }
//绘制六条干扰线
    for(var i=0;i<6;i++){
        ctx.strokeStyle=rc(0,255);
        ctx.beginPath();
        ctx.moveTo(rn(0,w),rn(0,h));
        ctx.lineTo(rn(0,w),rn(0,h));
        ctx.stroke();
    }
//干扰点--半径为1的圆
    for(var i=0;i<50;i++){
        ctx.fillStyle=rc(0,255);
        ctx.beginPath();
        ctx.arc(rn(0,w),rn(0,h),0.8,0,2*Math.PI);
        ctx.fill();
    }
}
//获取需要点击元素的id//调用方法
var btn=document.getElementById('c1');
btn.onclick=function () {
    vocodeRefresh();
}
var refresh=document.getElementById('clear');
// refresh.onclick=function () {
//    vocodeRefresh();
// };
//random number 返回指定范围内的随机整数
function rn(min,max) {
    var n=Math.floor(Math.random()*(max-min)+min);
    return n;
}
//random color 返回指定范围内的随机颜色
function rc(min, max) {
    var r=rn(min,max);
    var g=rn(min,max);
    var b=rn(min,max);
    return `rgb(${r},${g},${b})`;
}

