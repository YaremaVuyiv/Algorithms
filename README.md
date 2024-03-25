# Algorithms
## Backtracking with duplicates
```javascript
const subsets: string[][] = [];

const backTracking = (subset: string[], index: number): void => {
        subsets.push([...subset]);
        for (let i = index; i < sortedStr.length; i++) {
            subset.push(sortedStr[i]);
            backTracking(subset, i + 1);
            subset.pop();
        }
    }
backTracking([], 0);
```
## Backtracking with duplicates
```javascript
const subsets: string[][] = [];
let ss: string | undefined = undefined;

const backTracking = (subset: string[], index: number): void => {
        subsets.push([...subset]);
        for (let i = index; i < sortedStr.length; i++) {
            if (ss == sortedStr[i]) break;
            subset.push(sortedStr[i]);
            backTracking(subset, i + 1);
            ss = sortedStr[i];
            subset.pop();
        }
    }
backTracking([], 0);
```
## Find all combinations of substring
```javascript
const result: string[][] = [];
    const part = (str: string, current: string[], result: string[][]): void => {
        if (str.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < str.length; i++) {
            const pre = str.substring(0, i + 1);
            const post = str.substring(i + 1);
            const iterCurrent = [...current];
            iterCurrent.push(pre);
            part(post, iterCurrent, result);
        }
    }

    part(s, [], result);
```
