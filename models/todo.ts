export class Todo {

    constructor(public userId:number, public id:number, public title:string, public completed:boolean){}

    editTitle(this:Todo, newTitle:string){
        this.title = newTitle;
    }
}

export class TodoList {
    data: Todo[];

    list () {
        return fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json().then(todos => this.data = todos))
    }

    delete(id:number){
        this.data.splice( this.findIndexById(id), 1 );
    }

    private findIndexById(id: number) {
        return this.data.findIndex( obj => obj.id === id );
    }
}