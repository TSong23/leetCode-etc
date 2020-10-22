/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
*/

/*
edge lists: a way to represent a graph. 2d matrix with each inside mat containing the connections
e.g: [ [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4], [3,5],
[3,8], [4,5], [4,9], [7,8], [7,9] ]

adjacent matrix: we can show edges between i and j using 1 or 0. takes up n^2 space, O(1) look up
[
[0,1,0],
[1,0,0],
[0,0,0]
]

adjacency lists: internal mat lists the edges for each element
0th element is connected to 1st and vice versa. 2n space needed, O(d) worst case. d is number of edges for that vertex 
[ [1],
  [0],
  []
]
*/

/*
using adjacency matrix, we can first organize the data. 
if we find that [i,j] === 1 and [j,i] === 1, the prequisites are conflicting
*/

var canFinish = function (numCourses, prerequisites) {
    let adjMat = [];
    for(let i = 0; i < numCourses; i++){
        adjMat.push(new Array(numCourses).fill(0));
    };
    for(let i = 0; i < prerequisites.length; i++){
        adjMat[prerequisites[i][0]][prerequisites[i][1]] = 1;
    };
    for(let i = 0; i < numCourses; i++){
        
    }
};

canFinish(2, [[1,0], [0,1]])