export const capitalize = (string: string) => {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

export const getIntervalYear = (): string => {
    const year = new Date().getFullYear()
    const interval = getDiffYear(2022)
    return interval === 0 ? year.toString() : `2022 - ${year}`
}

export const getDiffYear = (from: number): number => {
    return new Date().getFullYear() - from
}