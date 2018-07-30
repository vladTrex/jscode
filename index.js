export const identity = x => x;

export const add = (x,y) => x+y;

export const pluck = (list, name) => {
    let result = [];
    
    for(let i = 0; i<list.length; i++){
      if(list[i].hasOwnProperty(name)){
        result.push(list[i][name]);
      }
    }
    
    return result;
};