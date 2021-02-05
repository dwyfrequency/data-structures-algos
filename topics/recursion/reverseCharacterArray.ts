/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {

    function swapIndices(idx1: number, idx2: number) {
        if(idx1 >=  idx2) {
            return s;
        }
        [s[idx1], s[idx2]] = [s[idx2], s[idx1]];
        return swapIndices(idx1 + 1, idx2 - 1);
    }

    return swapIndices(0, s.length - 1);
};

console.log(reverseString(["h","e","l","l","o"]));
// $ ts-node reverseCharacterArray.ts
