String.prototype.toK = function(){
    let out = '';
    if(this>1000){
     out = (this/1000)+'K';
    }
    return out;
}

const num = '15500';
console.log(num.toK());