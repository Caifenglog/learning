$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()

    //为发送按钮绑定点击事件
    $("#btnSend").on("click", () => {
        var text = $("#ipt").val().trim()
        if (text.length <= 0) return $("#ipt").val("")

        $("#talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        $("#ipt").val("")
        resetui()
        getMsg(text)
    })

    //获取聊天机器人发送回来的消息
    function getMsg(text){
        $.ajax({
            method:"GET",
            url:"http://www.liulongbin.top:3006/api/robot",
            data:{
                spoken:text
            },
            success:(res)=>{
                console.log(res)
                if(message=== "success"){
                    var msg=res.data.info.text
                    $("#talk_list").append('<li class="left_word"><img src="img/person01.png" /> <span>'+msg+'</span></li>')
                }
            }
        })
    }

})