/* Functions within objects not yet supported */
module.exports={
    deltaObj:{},
    ObjectDiffCalculator: function(obj1, obj2, deltaObj){
        if(this.isEqual(obj1,obj2)){
            deltaObj.deltaChangeStatus="unchanged";
            deltaObj.deltaChangeValue=obj1;
        }
        else{
            for(var key in obj1){
                if(obj2.hasOwnProperty(key)){
                    var type1=Object.prototype.toString.call(obj1[key]);
                    var type2=Object.prototype.toString.call(obj2[key]);            
                    if(this.isEqual(obj1[key],obj2[key])){
                        deltaObj[key]={};
                        deltaObj[key]["deltaChangeStatus"]="unchanged";
                        deltaObj[key]["deltaChangeValue"]=obj1[key];
                    }
                    else{
                        if(['[object Array]','[object Object]'].indexOf(type1)<0 && ['[object Array]','[object Object]'].indexOf(type2)<0 ){
                            deltaObj[key]={};
                            deltaObj[key]["deltaChangeStatus"]="updated";
                            deltaObj[key]["deltaChangeValue"]=obj2[key];
                        }
                        else if(type1!==type2){
                            deltaObj[key]={};
                            deltaObj[key]["deltaChangeStatus"]="updated";
                            deltaObj[key]["deltaChangeValue"]=obj2[key];
                        }
                        else{
                            deltaObj[key]={};
                            this.ObjectDiffCalculator(obj1[key],obj2[key],deltaObj[key]);
                        }
                    }
                }
                else{
                    deltaObj[key]={};
                    deltaObj[key]["deltaChangeStatus"]="deleted";
                    deltaObj[key]["deltaChangeValue"]=obj1[key];
                }
            }
            for(var key in obj2){
                if(!obj1.hasOwnProperty(key)){
                    deltaObj[key]={};
                    deltaObj[key]["deltaChangeStatus"]="created";
                    deltaObj[key]["deltaChangeValue"]=obj2[key];
                }
            }
        }
    },
    isEqual: function(obj1,obj2){
        var type1=Object.prototype.toString.call(obj1);
        var type2=Object.prototype.toString.call(obj2);
        if(type1!==type2){
            return false;
        }
        if(['[object Array]','[object Object]'].indexOf(type1)<0 && ['[object Array]','[object Object]'].indexOf(type2)<0 ){
            return obj1===obj2;
        }
        else if(type1===type2 && type1==='[object Array]'){
            if(obj1.length===obj2.length){
                for(var i=0;i<obj1.length;i++){
                    if(!this.isEqual(obj1[i],obj2[i])){
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        else if(type1===type2 && type1==='[object Object]'){
            if(obj1 && obj2 && Object.keys(obj1).length===Object.keys(obj2).length){
                for(var key in obj1){
                    if(obj1.hasOwnProperty(key)){
                        if(!this.isEqual(obj1[key],obj2[key])){
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }
    }
}
