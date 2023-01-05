
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const towelSortRun = () => {
       return matrix.reduce((arr, item, i) => {
            if (i % 2) return [...arr, ...item.reverse()]
            return [...arr, ...item];
        }, [])
    }
    return matrix ? towelSortRun() : []
}
