<template>
    <div>
        <div>TodosList</div>
        <div class="todos">
             <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{todo.title}}
                <i @click="deleteTodo(todo.id)" class='fas fa-trash-alt'></i>
             </div>
        </div>
    </div> 
    
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name:'TodosList',
        methods:{
            ...mapActions(['fetchTodos', 'deleteTodo'])
        },
        computed:mapGetters(['allTodos']),
        created (){
            this.fetchTodos()
        }
    }
</script>

<style scoped>
    .todos{
        display: flex;
        flex-flow: row wrap;
    }
    .todo{
        margin: 10px;
        padding: 30px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background-color: rgb(226, 226, 226) ;
        border-radius: 10px;
        position: relative;
    }

    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>