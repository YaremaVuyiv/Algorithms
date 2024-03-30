# Algorithms
## Backtracking without duplicates
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
## depth first search
```javascript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const map: Map<number, number[]> = new Map();
    for (let pre of prerequisites) {
        const arr = map.get(pre[0]);
        if (arr) {
            arr.push(pre[1]);
        }
        else {
            map.set(pre[0], [pre[1]]);
        }
    }
    
    const set: Set<number> = new Set();

    const DFS = (course: number): boolean => {
        if (set.has(course)) {
            return false;
        }

        const pres = map.get(course)

        if (pres === undefined || pres?.length === 0) {
            return true;
        }

        set.add(course);

        for (let pre of pres) {
            if(DFS(pre) === false) return false;
        }

        set.delete(course);
        map.set(course, []);

        return true;
    }

    for (let i =0; i < numCourses; i++) {
        if(DFS(i) === false) return false;
    }

    return true;
}
```
