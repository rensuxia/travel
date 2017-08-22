var btn=$('#btnReset');
btn.on('click',function () {
    console.log("取消");
    location.href="index.html";
});

$('#btnSubmit').click(function () {
    var uname=$('[name="uname"]').val();
    var upwd=$('[name="pwd"]').val();
    var sex=$('[name="sex"]').val();
    var tel=$('[name="phone"]').val();
    var email=$('[name="email"]').val();
    $.ajax({
        type:'POST',
        url:'/travel/add',
        data:{'uname':uname,'upwd':upwd,'sex':sex,'tel':tel,'email':email},
        success:function (result) {
            console.log('接收到服务器返回的成功响应！');
            console.log(result);
            if(result.code===1){
                alert('添加成功！将跳转登录界面！');
                $('[name="uname"]').val('');
                $('[name="pwd"]').val('');
                $('[name="sex"]').val('');
                $('[name="phone"]').val('');
                $('[name="email"]').val('');
                $('[name="vaild"]').val('');
            }
            location.href="login.html";
        },
//                error:function () {
//                    console.log('输入有误，请重新输入！');
//                    alert('输入不正确');
//                }
    })
});
