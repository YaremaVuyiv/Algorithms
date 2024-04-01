function permute(nums: number[]): number[][] {
    const subsets: number[][] = [];
    const bt = (subset: number[], l: number, h: number): void => {
        if (l === h) {
            subsets.push([...subset]);
            return;
        }

        for (let i = l; i <= h; i++) {
            let swap = subset[i];
            subset[i] = subset[l];
            subset[l] = swap;

            bt([...subset], l + 1, h);

            swap = subset[i];
            subset[i] = subset[l];
            subset[l] = swap;
        }
    }

    bt([...nums], 0, nums.length - 1);
    return subsets;
};
