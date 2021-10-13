<template>
    <div>
        <ol>
            <li v-for='todo in todoList.data' :key='todo.id' @click='todo.editTitle("hi");' >{{todo.title}}</li>
        </ol>
    </div>
</template>

<script lang='ts'>
import { Todo, TodoList } from "./models/todo";
export default {
    data(){
        return {
            todoList: new TodoList(),
        }
    },
    created(){
        this.todoList.list();
    }
}
</script>

<style>

</style>