Array.prototype.myMap = function(callback){
    var tempArray
    for(let i=0;i<this.length-1;i++){
        tempArray.push(callback(this[i],i,this))
    }
        return tempArray;
    }