

let step = 1;
let messages =[];

$(function () {

    //请求   // 初始化加载
    $.getJSON("data/discover-message.json" , function (results) {
        messages = results;
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let item = $("<div id=\"dynamic-part-e\" class=\"\">\n" +
                "    <div id=\"dynamic-e-l\" class=\"xy-center\">\n" +
                "        <div id=\"dynamic-p-l\" class=\" xy-center\" style=\"background-image: url("+e.photo1+")\">\n" +

                "            <div id=\"dynamic-p-i\" class=\"  dynamic-d-d-three\"></div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div id=\"dynamic-p-r\" class=\"\">\n" +
                "        <div id=\"dynamic-r-u\" class=\"\">\n" +
                "            <div id=\"dynamic-u-1\" class=\" xy-center\">"+e.text+"</div>\n" +
                "            <p>"+e.title+"</p>\n" +
                "        </div>\n" +
                "        <div id=\"dynamic-r-c\" class=\"\">\n" +
                "            <div class=\"dynamic-c xy-center \" ></div>\n" +
                "            <div class=\"dynamic-d  xy-center\" style=\"margin-right: 5px\">"+e.num+"</div>\n" +
                "            <div class=\"dynamic-e xy-center \" ></div>\n" +
                "            <div class=\"dynamic-d xy-center \">"+e.num2+"</div>\n" +
                "        </div>\n" +
                "        <div id=\"dynamic-r-d\" class=\" xy-center\">\n" +
                "            <div id=\"dynamic-d\" class=\" \">\n" +
                "                <div id=\"dynamic-d-1\" class=\"xy-center\" style=\"background-image: url("+e.photo2+")\"> </div>\n" +
                "                <div id=\"dynamic-d-2\" >"+e.nickname+"</div>\n" +
                "            </div>\n" +
                "            <div class=\"dynamic-d-3\" class=\" xy-center\"></div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>\n" +
                "<div id=\"dynamic-part-f\" >\n" +
                "    <div id=\"dynamic-f-u\" class=\" xy-center\">\n" +
                "        <div id=\"dynamic-f-t\">"+e.text2+"</div>\n" +
                "        <div class=\"dynamic-d-3\" class=\" xy-center\" ></div>\n" +
                "    </div>\n" +
                "    <div id=\"dynamic-f-c\" class=\" xy-center\"style=\"background-image: url("+e.photo3+")\">\n" +
                "        <div id=\"dynamic-f-m\" class=\" xy-center\"></div>\n" +
                "    </div>\n" +
                "    <div id=\"dynamic-f-d\" class=\"xy-center\">\n" +
                "        <div id=\"dynamic-d-l\" >\n" +
                "            <div id=\"dynamic-d-l-i\" style=\"background-image: url("+e.photo4+")\"></div>\n" +
                "            <div id=\"dynamic-d-l-t\" >"+e.nickname2+"</div>\n" +
                "        </div>\n" +
                "        <div id=\"dynamic-d-r\" class=\"xy-center\">+ 收藏</div>\n" +
                "    </div>\n" +
                "</div>");
            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

            $("#dynamic").append(item);
        })

    }

//监听滚动
    $("#dynamic").scroll(function () {   //监听滚动事件..

        let container_totalHeight = this.scrollHeight;  //总高度

        let contianer_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        let container_height = $(this).height();   //元素可见部分的高度



        if ((Math.ceil(contianer_scroll) + Math.ceil(container_height)) / container_totalHeight >0.9999 ) {

            setTimeout(function () {
                let arr = messages.slice((step-1) , step+2);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                step += 1;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
