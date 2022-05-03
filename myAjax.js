/** 
 * 处理data参数
 * @param{data}需要发送到服务器的数据
 * @returns{string}返回拼接好的字符串
 */
function resolveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + "=" + data[k]
        arr.push(str)
    }
    return arr.join("&")
}

var str = resolveData({
    name: "zs",
    age: 20
})
console.log(str)

function myAjax(options) {
    var xhr = new XMLHttpRequest()
    var qs = resolveData(options.data)

    if (options.method.toUpperCase() === "GET") {
        //发起GET请求
        xhr.open(options.method, options.url + "?" + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === "POST") {
        //发起POST请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(qs)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}