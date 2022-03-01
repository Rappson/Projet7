const timeFormat = (value) => {
    if (value === 1 ||
        value === 2 ||
        value === 3 ||
        value === 4 ||
        value === 5 ||
        value === 6 ||
        value === 7 ||
        value === 8 ||
        value === 9 ){
            return "0" + value
        }else{
            return value
        }
}

const putDate = (initialValue) => {
    let d = new Date(initialValue)

    let DD = timeFormat(d.getDate());
    let MM = timeFormat(d.getMonth() + 1);
    let YYYY = timeFormat(d.getFullYear());
    let hh = timeFormat(d.getHours());
    let mm = timeFormat(d.getMinutes());

    let fullDate = `${DD}-${MM}-${YYYY} ${hh}:${mm}`

    return fullDate
}

export { putDate };