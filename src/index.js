const tiny = {
    pipe: (...fns) => start => fns.reduce((x,y) => y(x), start)
}

export default tiny;
module.exports = tiny;