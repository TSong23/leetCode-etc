// Input: [1, 2, 3]
// Output:
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]


const permute = (nums) => {
    let result = [];

    const helper = (curr, remaining) => {
        if (remaining.length === 0) {
            result.push(curr);
            return;
        } else {
            for (let i = 0; i < remaining.length; i++) {
                // curr.push(remaining[i]);
                helper([...curr, remaining[i]], remaining.slice(0, i).concat(remaining.slice(i + 1)));
            }
        }
    }

    helper([], nums);
    return result;
}
