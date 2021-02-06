// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/
function reverseString(s: string[]): string[] {

    function swapIndices(idx1: number, idx2: number) {
        if(idx1 >= idx2) {
            return s;
        }
        [s[idx1], s[idx2]] = [s[idx2], s[idx1]];
        return swapIndices(idx1 + 1, idx2 - 1);
    }

    return swapIndices(0, s.length - 1);
};

console.log(reverseString(["h","e","l","l","o"]));
// Terminal$ ts-node reverseCharacterArray.ts
