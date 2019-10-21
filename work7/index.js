function sort(method){
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='bubble'){
        //调用bubbleSort()
        logs = bubblleSort(origin)
    }else if (method=='insert'){
        //调用insertSort()
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML =logs
}