

let step = 1;
let messages =[];

$(function () {

    //请求   // 初始化加载
    $.getJSON("data/video-message.json" , function (results) {
        messages = results;
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let item = $("<div class=\"dy-video-b  \">\n" +
                "    <div class=\"dy-video-u \" style=\"background-image: url("+e.photo1+")\">\n" +
                "        <div class=\"dy-video-1 \">\n" +
                "            <div class=\"dy-video-a  xy-center\">"+e.text+"</div>\n" +
                "        </div>\n" +
                "        <div class=\"dy-video-2 \" style=\"background-image: url(\"img/dynamic-id/播放.svg\")\"></div>\n" +
                "        <div class=\"dy-video-3  xy-center\">\n" +
                "            <div class=\"dy-video-l  xy-center\">\n" +
                "                <div class=\"dy-video-img \" style=\"background-image: url(\"img/dynamic-video/播放.svg\"></div>\n" +
                "                "+e.num+"\n" +
                "            </div>\n" +
                "            <div class=\"dy-video-l  xy-center\">\n" +
                "                <div class=\"dy-video-img \" style=\"background-image: url(\"img/dynamic-id/音乐1.svg\")\"></div>\n" +
                "                "+e.num2+"\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <div class=\"dy-video-c xy-center \">\n" +
                "        <div class=\"dy-video-text \">"+e.text1+"</div>\n" +
                "    </div>\n" +
                "    <div class=\"dy-video-d \">\n" +
                "        <div class=\"dy-video-d-left \">\n" +
                "            <div class=\"dy-video-d-photo\" style=\"background-image: url("+e.photo3+")\"></div>\n" +
                "            <div class=\"dy-video-d-font \">"+e.nickname+"</div>\n" +
                "        </div>\n" +
                "        <div class=\"dy-video-d-right \">\n" +
                "            <div class=\"dy-video-photo \" style=\"background-image: url(\"img/dynamic-video/点赞.svg\")\"></div>\n" +
                "            <div class=\"dy-video-photo \" style=\"background-image: url(\"img/dynamic-video/线-评论-01.svg\")\"></div>\n" +
                "            <div class=\"dy-video-photo \" style=\"background-image: url(\"img/dynamic-video/音乐.svg\")\"></div>\n" +
                "            <div class=\"dy-video-photo\" style=\"background-image: url(\"img/dynamic-video/三个点.svg\")\" ></div>\n" +
                "        </div>\n" +
                "\n" +
                "\n" +
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
                let arr = messages.slice((step-1) , step+1);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                step += 2;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
