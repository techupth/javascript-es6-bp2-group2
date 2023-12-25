let height = undefined;
let result;

function nullish(height) {
  return height ?? "“Height is not defined”";
}
result = nullish(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
