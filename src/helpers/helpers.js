export const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

export const getIntervalYear = () => {
    const year = new Date().getFullYear()
    const interval = getDiffYear(2022)
    return interval === 0 ? year.toString() : `2022 - ${year}`
}

export const getDiffYear = (from) => {
    return new Date().getFullYear() - from
}

export const imagePath = (imgName, folderName = 'assets', ext = 'webp') => {
    return `${process.env.PUBLIC_URL}/${folderName}/${imgName}.${ext}`
}