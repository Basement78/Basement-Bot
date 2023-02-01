var queue = []
class dynamicQueue{
    constructor(rootChannelID){
        queue.push(rootChannelID)
    }

    size(){
        return queue.length;
    }

    get(pos){
        return queue[pos]
    }

    getReturnsNull(pos){
        if(pos < queue.size() && pos >= 0){ return queue[pos] }
        else{ return null }
    }

    getQueue(){
        return queue;
    }

    add(id){
        queue.push(id)
    }

    top(){
        return queue.pop()
    }

    peekTop(){
        return queue[queue.length-1]
    }

    removeID(id){
        if(id == 0){
            throw new Error("Cannot remove root channel")
        }
        for (let i = 0; i < queue.length; i++) {
            if (queue[i] === id) {
              queue.splice(i, 1);
              return
            }
        }
    }

    removePos(pos){
        if(id == 0){
            throw new Error("Cannot remove root channel")
        }
        queue.splice(i, 1);
        return
    }

    containsId(id){
        for(let i = 0; i < queue.length; i++){
            if(queue[i] === id){
                return true
            }
        }
        return false
    }

    toString(){
        queue.forEach(element => {
            console.log(element)
        });
    }
}
module.exports = dynamicQueue