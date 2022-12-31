// Dijkstra's Algorithm .........Incomplete 
class Graph{
    constructor(noOfVerties){
        this.noOfVerties = noOfVerties
        this.adjList = new Map();
    }
    addVertex(v){
        this.adjList.set(v,[])
    }
    addEdge(v ,w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }
    printGraph(){
        let keys = this.adjList.keys()
        for(let i of keys){
            let values = this.adjList.get(i)
            let s = ""
            for(let j of values)
                s+=j+" "
            console.log(i,' -> ',s)
        }
    }
    dijkstraAlgorithm(startNode){
        let distances = {};

        // Store the reference to previous node
        let prev = {};
        let pq = new PriorityQueue(this.node.length*this.node.length)

        // Set distances to all nodes to be infinite except startNode
        distances[startNode] = 0;
        pq.enqueue(startNode,0)
        this.nodes.forEach(node =>{
            if(node!=startNode) distances[node] =Infinity;
            prev[node] = null;
        });
        while(!qp.isEmpty()){
            let minNode = pq.dequeue();
            let curNode = minNode.data;
            let weight = minNode.priority;
            this.edges[curNode].forEach(neighbor =>{
                let alt = distances[curNode] +neighbor.weight;
                if(alt < distances[neighbor.node]){
                    distances[neighbor,node]=alt;
                    prev[neighbor.node] = curNode;
                    pq.enqueue(neighbor.node,distances[neighbor.node]);
                }
            });
        }
        return distances
    }
}
let g = new Graph(6)
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","F")
g.printGraph()











// A Javascript program for Dijkstra's single 

// source shortest path algorithm. 

// The program is for adjacency matrix 

// representation of the graph     

let V = 9; 
  
// A utility function to find the 
// vertex with minimum distance 
// value, from the set of vertices 
// not yet included in shortest 
// path tree 
function minDistance(dist,sptSet) 
{ 
    // Initialize min value 
    let min = Number.MAX_VALUE; 
    let min_index = -1; 
    for(let v = 0; v < V; v++) 
    { 
        if (sptSet[v] == false && dist[v] <= min) 
        { 
            min = dist[v]; 
            min_index = v; 
        } 
    } 
    return min_index;
} 
// A utility function to print 

// the constructed distance array 

function printSolution(dist) 

{ 

    document.write("Vertex \t\t Distance from Source<br>"); 

    for(let i = 0; i < V; i++) 

    { 

        document.write(i + " \t\t " + 

                 dist[i] + "<br>"); 

    } 

} 
// Function that implements Dijkstra's 
// single source shortest path algorithm 
// for a graph represented using adjacency 
// matrix representation 
function dijkstra(graph, src) 
{ 
    let dist = new Array(V); 
    let sptSet = new Array(V); 
    // Initialize all distances as 
    // INFINITE and stpSet[] as false 
    for(let i = 0; i < V; i++) 
    { 
        dist[i] = Number.MAX_VALUE; 
        sptSet[i] = false; 
    } 
    // Distance of source vertex 
    // from itself is always 0 
    dist[src] = 0; 
    // Find shortest path for all vertices 
    for(let count = 0; count < V - 1; count++) 
    { 
        // Pick the minimum distance vertex 

        // from the set of vertices not yet 

        // processed. u is always equal to 

        // src in first iteration. 

        let u = minDistance(dist, sptSet); 
        // Mark the picked vertex as processed 
        sptSet[u] = true; 
        // Update dist value of the adjacent 
        // vertices of the picked vertex. 
        for(let v = 0; v < V; v++) 
        { 
            // Update dist[v] only if is not in 
            // sptSet, there is an edge from u 
            // to v, and total weight of path 
            // from src to v through u is smaller 
            // than current value of dist[v] 
            if (!sptSet[v] && graph[u][v] != 0 && 
                   dist[u] != Number.MAX_VALUE && 
                   dist[u] + graph[u][v] < dist[v]) 
            { 
                dist[v] = dist[u] + graph[u][v]; 
            } 
        } 
    } 
    // Print the constructed distance array 
    printSolution(dist); 
} 
// Driver code 
let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ], 

              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ], 

              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ], 

              [ 0, 0, 7, 0, 9, 14, 0, 0, 0], 

              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ], 

              [ 0, 0, 4, 14, 10, 0, 2, 0, 0], 

              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ], 

              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ], 

              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ] 

dijkstra(graph, 0);