function sort(method){
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        //调用bubbleSort()
        logs = bubbleSort(origin)
    }else if (method=='insert'){
        //调用insertSort()
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showlog(logValues,showDiv)",50)
}