if(sessionStorage['loginUname']!=undefined){
    $('#top').load('header.html',function () {
        //页头已经异步加载完成，挂载到DOM树
        $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']+"<a onclick='javascript:del();' href='javascript:del();'>[注销]</a>");
    });
    $('#footer').load('footer.html');
}

function del() {
    //提交异步请求，把登录信息提交给web服务器
    $.ajax({
        type:'GET',
        url:'/travel/del',
        data:{uid:sessionStorage['loginUid']},
        success:function (result) {
            alert('确定要删除吗？');
            sessionStorage.removeItem('loginUname');
            sessionStorage.removeItem('loginUid');
            location.href='index.html';
        }
    });
};



/*顶部菜单*/
+function () {
    //定义函数showSub，用于显示li菜单
    function showSub() {
        //this->li
        //设置当前li的最后一个子元素显示
        this.lastElementChild.style.display="block";
        //修改li下a的class为hover
        this.children[1].className="hover";
    }
    function hideSub() {
        //设置当前li的最后一个子元素隐藏
        this.lastElementChild.style.display="none";
        //清除li下a的class
        this.children[1].className="";
    }
    //找到class为app_jd和class为service的li
    var lis=document.querySelectorAll(".about");
    //遍历lis中每个li，为每个li添加鼠标进入和鼠标移出事件监听
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("mouseover",showSub);
        lis[i].addEventListener("mouseout",hideSub);
    }
}();
// 标签页
+function () {
    //获得id为product_detail下的ul下的li
    var lisTabs=document.querySelectorAll("#main>.section>.regionTabs>li");
    //为每个li绑定单击事件
    for(var i=0;i<lisTabs.length;i++){
        lisTabs[i].addEventListener("click",function (e) {
            e.preventDefault();
            var listdata=this.getAttribute('data-id');
            // console.log(listdata);
            //如果当前li的class不是active
            if(this.className!="active"){
                //获得当前li的父元素下的class为active的li为空
                var curr=this.parentNode.querySelector(".active").className="";
                //设置当前li为active
                this.className="active";
                //找到id为main下的ul的class为regionContent下的class为active的li
            }
            var datalist=this.parentNode.nextElementSibling;
            var dl=datalist.children;
            for(var j=0;j<dl.length;j++){
                var t=dl[j].getAttribute('data-id');
                if(listdata===t){
                    dl[j].parentNode.querySelector('.active').className="";
                    dl[j].className="active";

                }
            }

        })
    }
}();
//轮播广告插件函数
if (!window.jQuery) {
    throw new Error('jd_index.js插件依赖于jQuery');
}
//轮播广告插件函数，调用方法形如$("#slider").carousel();
jQuery.fn.carousel = function () {
    var interval = 3000;//每3s钟轮换一张
    var duration = 500;//每次轮换动画的持续时间
    var $imgList = this.children('a').children('img');//所有的img组成的类数组对象
    var cur = 0;//当前显示的广告的序号
    var next = 1;//下次即将要显示的广告的序号
    //开启一个定时器,每隔interval时长启动一次轮换
    setInterval(function () {
        lunHuan();
    }, interval);
    //进行广告轮换
    function lunHuan() {
        //让当前显示的广告向左滑动，滑出去之后，删除.active
        $imgList.eq(cur).animate({left: '-100%'}, duration, function () {
            $(this).removeClass('active');
        });
        //让即将要显示的下一张广告添加.active，出现在最右侧，开始动画慢慢向左滑动
        $imgList.eq(next).addClass('active').css('left', '100%').animate({left: '0'}, duration);
        //修改cur和next变量的值
        cur = next;//
        next++;
        if (next > $imgList.length) {
            next = 0;
        }
    }
};

