function networkDelayTime(times: number[][], n: number, k: number): number {
    const edges = new Map();

    // Array to store minimum distances
    let dis = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    // Array to mark visited vertices
    let vis = new Array(n + 1).fill(false);

    // Set the distance to the source as 0
    dis[k] = 0;
    let min = 0;

    for (let v of times) {
        if (edges.has(v[0])) {
            edges.get(v[0])!.push({v: v[1], w: v[2]});
        }
        else {
            edges.set(v[0], [{v: v[1], w: v[2]}]);
        }
    }

    for (let i = 0; i < n; i++) {
        let v = -1;
        for (let j = 1; j <= n; j++) {
            if (!vis[j] && (v == -1 || dis[j] < dis[v]))
                v = j;
        }

        if (dis[v] == Number.MAX_SAFE_INTEGER)
            break;
        //console.log(dis);
        min = dis[v];

        // Mark vertex v as visited
        vis[v] = true;

        const adj = edges.get(v);
        if (adj == undefined) continue;

        for (let edge of adj) {
            // Neighbor vertex
            let x = edge.v;
            // Edge weight
            let wt = edge.w;

            // Update the distance if a shorter path is found
            const distance = Math.min(dis[v] + wt, dis[x]);
            dis[x] = distance;
        }
    }
    vis.shift();
    if (vis.some(x => x === false)) return -1;
    
    return min;
};
