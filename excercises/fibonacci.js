export function fibCalc(generator, sequence) {
    //Calculate based on above values

    let sum = 0;
    let value = parseInt(generator);
    let value2 = 0;
    let sequenceValue = parseInt(sequence);
    for (let i = 0; i < 100; i++) {
        sum = value + value2;
        value2 = value;
        value = sum;
        //console.log("AFTER sum: " + sum);

        if (i === parseInt(sequence)) {
            sequenceValue = sum;
            break;
        }
    }
    return sequenceValue;
}