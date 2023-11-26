const data = [{
    "country": "Afghanistan",
    "population": 37172386
},
{
    "country": "Albania",
    "population": 2866376
},
{
    "country": "Algeria",
    "population": 42228429
},
{
    "country": "American Samoa",
    "population": 55465
},
{
    "country": "Andorra",
    "population": 77006
},
{
    "country": "Angola",
    "population": 30809762
},
{
    "country": "Anguilla",
    "population": 15094
},
{
    "country": "Antarctica",
    "population": 1106
},
{
    "country": "Antigua and Barbuda",
    "population": 96286
}]

const filteredData = quickSort(data);
function quickSort(data) {
    if (data.length < 2) {
        return data
    }
    const pivotIndex = Math.floor(data.length / 2)
    const pivot = data[pivotIndex];
    console.log("pivot:", pivot, typeof pivot)
    let leftArr = [], rightArr = [], pivotValue = pivot.population;
    for (let i = 0; i < data.length; i++) {
        // console.log("value:",data[i], data.length, i)
        if (i === pivotIndex) {
            continue; // Skip the pivot element during comparison
        }

        if (data[i].population > pivotValue) {
            rightArr.push(data[i]);
        } else {
            leftArr.push(data[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
console.log(data)
console.log("filteredData:", filteredData)