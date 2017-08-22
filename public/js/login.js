$('#bt_login').click(function () {
    var n=$('#uname').val();//用户名
    var p=$('#upwd').val();//密码
    console.log(n);
    console.log(p);
    //提交异步请求，把登录信息提交给web服务器
    $.ajax({
        type:'POST',
        url:'/travel/login',
        data:{uname:n,upwd:p},
        success:function (result) {
            console.log('成功获取到服务器返回的数据');
            console.log(result);
            if(result.code===1){
                alert('登录成功!3s钟后跳转到用户中心');
                sessionStorage['loginUname']=n;
                sessionStorage['loginUid']=result.id;
                setTimeout(function () {
                    location.href='index.html';
                },3000)
            }else{
                alert('登录失败！原因：'+result.msg);
            }
        }
    });
});