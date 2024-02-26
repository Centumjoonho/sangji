
export const datatimeToISOString = (date, mode) => {
    /**
     * Date object to time string "YYYY-MM-DD HH:MM:SS"
     */
    let formattedString = "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    
    if (mode == 'time')
        formattedString = `${hour}:${minute}`;
    else if (mode == 'date'){
        formattedString = `${year}-${month}-${day}`;
    }else{
        formattedString = `${year}-${month}-${day} ${hour}:${minute}`;
    }
    return formattedString;
}