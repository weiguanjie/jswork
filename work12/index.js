//获取当前年份
let year=new Date().getFullYear()
//调用calender函数,设置cal内容显示年历
document.getElementById("cal").innerHTML=calendar(year);

function setCalendar(year){
    //设置preyear
    //设置weiguanjie
    //设置nextyear
        var year = parseInt(year);
        console.log(year);
        var pre = year - 1;
        var next = year + 1;
        console.log(pre);
        console.log(next);
        // document.getElementById("preyear").innerText = "<<" + pre;
        // document.getElementById("weiguanjie").innerText = year;
        // document.getElementById("nextyear").innerText = next + ">>";
        document.getElementById('preyear').setAttribute('data-year', pre);
        document.getElementById('weiguanjie').setAttribute('data-year', year);
        document.getElementById('nextyear').setAttribute('data-year', next);
        document.getElementById('weiguanjie').innerText = year;
        document.getElementById('preyear').innerText = "<<" + pre;
        document.getElementById('nextyear').innerText = next + ">>";
        document.getElementById("cal").innerHTML = calendar(year);
    }

