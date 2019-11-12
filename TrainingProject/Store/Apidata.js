import {observable,action} from 'mobx';

class ToDoList {
    @observable name = ''
    @observable Uniqueid=""
    @observable list = []
    
    
 @action double(){
    //  this.name=this.name+this.name
    this.list = this.list.filter((obj)=>obj.id != this.Uniqueid)
 }
 
 
}
// console.warn(this.name)

export default new ToDoList();