exports.NewDate = () => {
    let d = new Date();

    let DD = d.getDate();
    let MM = d.getMonth() + 1;
    let YYYY = d.getFullYear();
    let hh = d.getHours();
    let mm = d.getMinutes();

    let created_at = `${YYYY}-${MM}-${DD} ${hh}:${mm}`
    return created_at
}