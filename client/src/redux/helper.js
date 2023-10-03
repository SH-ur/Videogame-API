function orders (arr, order, orderType){
if(orderType==='name'){
    if(order==='ASC'){
        const asci =[...arr].sort((a,b)=> a.name>b.name?1: a.name<b.name?-1:0);
        return asci;
    }else if(order==='DESC'){
        const desc = [...arr].sort((a,b)=> a.name> b.name?-1: a.name<b.name?1:0);
        return desc;
    }
} else if(orderType==='rating'){
    if(order==='ASC'){
        const asc =[...arr].sort((a,b)=> a.rating>b.rating?-1: a.rating<b.rating?1:0);
        return asc;
    }else if(order==='DESC'){
        const desc = [...arr].sort((a,b)=> a.rating> b.rating?1: a.rating<b.rating?-1:0);
        return desc;
    }

}
}

export default orders;