/**
 * 4. default parameter
 */

const print = function(strs, e = "\n") {
    console.log(strs.join(e));
}

print(["No", "gain", "No", "pain"]);
print(["No", "gain", "No", "pain"], " ");