let height = undefined;
let result;

function checkNull(height) {
    return height ?? "height is not defined";
}

result = checkNull(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
