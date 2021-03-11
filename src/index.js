module.exports = check;

function check(str, bracketsConfig) {
    let arr = str.split('');
    let answer;
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (arr[i] === bracketsConfig[k][0] && arr[i] === bracketsConfig[k][1]) {
                if (stack[stack.length - 1] === bracketsConfig[k][1]) {
                    stack.pop();
                } else {
                    stack.push(arr[i]);
                }
            } else {
                if (arr[i] === bracketsConfig[k][0]) {
                    stack.push(arr[i]);
                } else if (arr[i] === bracketsConfig[k][1]) {
                    if (!stack.length) {
                        return false;
                    }
                    if (stack[stack.length - 1] === bracketsConfig[k][0]) {
                        stack.pop();
                    } else {
                        return false;
                    }

                }

            }

        }
    }
    if (stack.length === 0) {
        answer = true
    } else (answer = false)
    return answer;

}

//console.log(check('||', [['|', '|']]));
