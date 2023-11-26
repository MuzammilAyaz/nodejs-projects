function testing(containers) {
    let ballTypeArr = [];
    let rowValue =0; colValue = 0;
    let containerSpaceArr = new Array(containers[0].length).fill(0);
    for (let i = 0; i < containers.length; i++) {
        rowValue = 0
        for (let j = 0; j < containers[i].length; j++) {
            rowValue+=containers[i][j];
            containerSpaceArr[j] += containers[i][j];
            console.log(containerSpaceArr[j])
        }
        ballTypeArr[i] = rowValue
    }
    ballTypeArr.sort(function(a, b){return b - a});
    containerSpaceArr.sort(function(a, b){return b - a});
    console.log(ballTypeArr, containerSpaceArr)
    for(let i =0; i < ballTypeArr.length; i++){
        if(ballTypeArr[i] != containerSpaceArr[i]){
            return "Impossible";
        }
    }
    return "Possible"
}


console.log(testing([[1,2,3],[3,2,1],[3,4,1]]))