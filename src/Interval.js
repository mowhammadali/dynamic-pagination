const Interval = data => { 
    let division = 10;

    let values = data.reduce((acc , cur) => {
        let firstItem = Object.values(cur)[0];
        return [...acc , firstItem];
    } , [])

    let counts = data.reduce((acc , cur) => {
        let secondItem = Object.values(cur)[1];
        return [...acc , secondItem];
    } , [])

    let min = Math.min(...values);
    let max = Math.max(...values);

    let interval = (max - min) / division;
    let newValues = [];

    for (let i = 0; i < division; i++) {
        let lowerBound = min + (interval * i);
        let upperBound = min + (interval * (i + 1));

        let newValue = `${lowerBound.toFixed(1)}~${upperBound.toFixed(1)}`;
        newValues.push(newValue);
    }

    let newCount = [];

    newValues.forEach((item) => {
        let sum = 0;
        let i = 0;
        let lowerBound = +item.split('~')[0]
        let upperBound = +item.split('~')[1];
   
        let increase = function () {
            i++;
            check();
        }

        let check = function () {
            if (i <= values.length - 1) {
                if ((values[i] > lowerBound) && (values[i] <= upperBound)) {
                    sum = sum + counts[i];
                }
                increase();
            }
            else {
                newCount.push(sum);
                return;
            }
        }

        check();
    })

    let newData = newValues.map((item , index) => {
        return {value: item , count: newCount[index]};
    })

    return newData;
}

export default Interval;