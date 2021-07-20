export function testPalidrome(valueOriginal) {
    let value = valueOriginal.toLowerCase();
    //Remove all white space
    value.replace(/\s+/g, "");
    value.toLowerCase();
    let half = value.length / 2;
    let oddHalf = (value.length - 1) / 2;
    let paliBool = true;
    for (let i = 0; i < value.length; i++) {
        if (value.length % 2 == 0) {
            //If the word is even numbered

            if (i >= value.length / 2) {
                //Count down from half
                //so 12345678
                //Half will start counting from 4 downwards
                half -= 1;
                if (value[i] === value[half]) {
                    paliBool = true;
                } else {
                    paliBool = false;
                }
            }

        }
        //If the word is odd numbered
        if (value.length % 2 == 1) {
            if (i > value.length / 2) {
                oddHalf -= 1;
                if (value[i] === value[oddHalf]) {
                    paliBool = true;
                } else {
                    paliBool = false;
                }

            }
        }


    }

    if (paliBool === true) {
        return true;
    } else {
        return false;
    }

}