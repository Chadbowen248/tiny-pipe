export const tiny = {
    pipe: (...fns) => start => fns.reduce((x,y) => y(x), start)
}