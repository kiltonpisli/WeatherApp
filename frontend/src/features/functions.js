const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

export const mainDateString = (unix) => {
    const cDate = new Date(unix * 1000);
    const h = (cDate.getHours()<10)?"0"+cDate.getHours():cDate.getHours();
    const m = (cDate.getMinutes()<10)?"0"+cDate.getMinutes():cDate.getMinutes();
    const day = days[cDate.getDay()];
    const date = cDate.getDate();
    const month = months[cDate.getMonth()];
    const year = cDate.getFullYear();
  
    return h+':'+m+ " - " +day+", "+date+" "+month+" "+year;
}

export const unixToDay = (unix) => {
    const date = new Date(unix * 1000);
  
    return days[date.getDay()];
}

export const unixToTime = (unix) => {
    const date = new Date(unix * 1000);
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}