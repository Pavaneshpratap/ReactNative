import {observable,action} from 'mobx';

class ToDoList {
    @observable name = ''
    @observable list = []
    
    
 @action double(userName){
    //  this.name=this.name+this.name
    this.list = [...this.list,userName];
 }
 
 
}
// console.warn(this.name)

export default new ToDoList();