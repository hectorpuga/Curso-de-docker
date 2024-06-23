
let times=0;

const syncDB=()=>{
    times++;
    console.log('Tikc cada multiplo de 5: ',times);
    return times;
}


module.exports={
    syncDB
}