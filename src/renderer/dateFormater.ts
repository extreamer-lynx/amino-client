import {number} from "prop-types";

function formatter(date:any) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy: number = date.getFullYear() % 100;
    // @ts-ignore
    if (yy < 10) yy = '0' + yy;
    return dd + '.' + mm + '.' + yy;
}

export function formatDate(inpu: any) {
    const inp:Date = new Date(inpu);
    const now:Date = new Date();

    // @ts-ignore
    const diff:number = now - inp;
    if(diff < 60000)
    {
        return Math.round(diff / 1000) + ' секунд назад';

    }
    else if (diff < 1)
    {
        return ' Тільки що';
    }
    else if (diff > 60000 && diff < 3600*1000)
    {
        return Math.round(Math.round(diff / 1000) / 60) + ' минут назад';
    }
    else
    {
        return formatter(inp) + '  ' + inp.getHours() + ':' + inp.getMinutes();
    }
}
