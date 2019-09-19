// $(function() {
//     // 5.打开页面提取本地存储的数据
//     loga();


//     //1. 绑定键盘事件
//     $("#text").on("keydown", function(e) {
//         if (e.keyCode === 13) {
//             if ($(this).val() === "") {
//                 alert("请输入内容");
//             } else {
//                 var local = getdata();
//                 local.push({ title: $(this).val(), done: false });
//                 sevendata(local);
//                 $(this).val("");
//                 // 6.点击回车调用本地数据
//                 loga();
//             };
//         };
//     });
//     // 2.封装提取本地存储函数
//     function getdata() {
//         var data = localStorage.getItem("todolist");
//         if (data !== null) {
//             return data = JSON.parse(data);
//         } else {
//             return [];
//         }
//     };
//     // 3.文本内容存储
//     function sevendata(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     };
//     // 4.遍历本地存储进行渲染
//     function loga() {
//         var data = getdata();
//         var todocount_jx = 0;
//         var toncount_wc = 0;
//         // 7.渲染之前先清除当前里面的标签
//         $(".toncount_ul, .todocount_ol").empty();
//         $.each(data, function(i, ele) {
//             // 当ele.done=false的时候渲染到正在进行时
//             if (ele.done == false) {
//                 $(".todocount_ol").prepend("<li><input type='checkbox' ><p>" + ele.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
//                 todocount_jx++;

//             } else if (ele.done == true) {
//                 // 当ele.done=true的时候渲染到正在进行时
//                 $(".toncount_ul").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
//                 toncount_wc++;
//             }
//         });
//         // 获取待办事项的数量
//         // $("#todocount_jx").html($(".todocount_ol").length);
//         $("#todocount_jx").html(todocount_jx);
//         // 获取已办事项的数量
//         // $("#toncount_wc").html($(".toncount_ul").length);
//         $("#toncount_wc").html(toncount_wc);
//     };
//     // 8.绑定删除按钮 li里面的a标签事件
//     $(".toncount_ul, .todocount_ol").on("click", "a", function() {
//         // 先获取数据
//         var data = getdata();
//         // 修改数据
//         // 获取a所在的数据的自定义索引号
//         var index = $(this).attr("id");
//         data.splice(index, 1);
//         // 保存数据
//         sevendata(data);
//         // 重新渲染数据
//         loga();
//     });
//     // 点击复选框按钮
//     $(".toncount_ul, .todocount_ol").on("click", "input", function() {
//         // 获取元素
//         var data = getdata();
//         // 修改元素
//         // 获取元素索引号
//         var index = $(this).siblings("a").attr("id");
//         data[index].done = $(this).prop("checked");
//         console.log(data);

//         // 保存元素
//         sevendata(data);
//         // 重新渲染
//         loga();
//     })
// })





// $(function() {
//     // 7.回调动态添加的li
//     loga();
//     // 1.绑定键盘事件
//     $("#text").on("keydown", function(e) {
//         // 2.判断是否是回车键
//         if (e.keyCode === 13) {
//             var local = getdata();
//             // 添加数据保存到本地存储
//             local.push({ title: $(this).val(), done: false });
//             setdata(local);
//             loga();
//             $("#text").val("");
//         }
//     });
//     // 3.访问本地存储数据
//     function getdata() {
//         // 4.获取本地存储数据
//         var data = localStorage.getItem("todolist");
//         // 判断数据
//         if (data !== null) {
//             return data = JSON.parse(data);
//         } else {
//             return [];
//         };
//     };
//     // 5.保存本地存储
//     function setdata(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     };
//     // 6.遍历本地存储数据
//     function loga() {
//         var data = getdata();
//         // 动态获得待办事项的个数
//         var toncount_ul = 0;
//         var todocount_ol = 0;
//         // 添加之前先把页面中的清除掉
//         $(".todocount_ol, .toncount_ul").empty();
//         $.each(data, function(i, ele) {
//             if (ele.done) {
//                 $(".toncount_ul").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
//                 toncount_ul++;
//             } else {
//                 $(".todocount_ol").prepend("<li><input type='checkbox'><p>" + ele.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
//                 todocount_ol++;
//             }
//         });
//         $("#todocount_jx").html(todocount_ol);
//         $("#toncount_wc").html(toncount_ul);
//     };
//     // 8.绑定删除事件
//     $(".todocount_ol, .toncount_ul").on("click", "a", function() {
//         // 获取数据
//         var data = getdata();
//         // 获取a的索引号
//         var index = $(this).attr("id");
//         // 修改本地存储
//         data.splice(index, 1);
//         // 保存
//         setdata(data);
//         // 重新渲染一次
//         loga();
//     });
//     // 9. 完成事件的点击事件
//     $(".toncount_ul, .todocount_ol").on("click", "input", function() {
//         var data = getdata();
//         var index = $(this).siblings("a").attr("id");
//         // 修改数据
//         data[index].done = $(this).prop("checked");
//         // 保存数据
//         setdata(data);
//         // 重新渲染
//         loga();
//     });
// })



// 绑定键盘事件
$(function() {
    // 刷新调用
    loga();
    $("#text").on("keydown", function(e) {
        // 判断按键
        if (e.keyCode === 13) {
            if ($(this).val() == "") {
                alert("请输入内容");
            } else {
                var local = getdata();
                local.push({ title: $("#text").val(), done: false });
                sevedata(local);
                loga();
                $("#text").val("");
            };
        };

    });
    // 访问本地存储
    function getdata() {
        var data = localStorage.getItem("todolist");
        // 判断是否为空
        if (data !== null) {
            return data = JSON.parse(data);
        } else {
            return [];
        }
    };
    // 本地存储
    function sevedata(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    };
    // 绑定删除按钮
    $(".todocount_ol,.toncount_ul").on("click", "a", function() {
            // 获得数据
            var data = getdata();
            var index = $(this).prop("id");
            // 修改数据
            data.splice(index, 1);
            // 保存数据
            sevedata(data);
            loga();
        })
        // 遍历添加li标签
    function loga() {
        // 获得数据
        var data = getdata();
        var todocount_jx = 0;
        var toncount_wc = 0;
        $(".todocount_ol,.toncount_ul").empty();
        $.each(data, function(i, ele) {
            if (ele.done) {
                $(".toncount_ul").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p><a href='javascript:;'id=" + i + "></a></li>");
                toncount_wc++;
            } else {
                $(".todocount_ol").prepend("<li><input type='checkbox'><p>" + ele.title + "</p><a href='javascript:;'id=" + i + "></a></li>");
                todocount_jx++;
            }
        });
        $("#todocount_jx").html(todocount_jx);
        $("#toncount_wc").html(toncount_wc);
    };
    // 绑定完成按钮
    $(".todocount_ol, .toncount_ul").on("click", "input", function(i, ele) {
        var data = getdata();
        var index = $(this).siblings("a").attr("id");
        // 修改数据
        data[index].done = $(this).prop("checked");
        // 保存数据
        sevedata(data);
        loga();
    });

})