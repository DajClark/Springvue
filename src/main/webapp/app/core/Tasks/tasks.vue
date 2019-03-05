<template>
    <div class="tasks">
        <table>
            <tr>
                <th>Task</th>
                <th>Details</th>
                <th>Priority</th>
            </tr>
            <tr v-for="task in tasks">
                <td>{{task.name.split('%20').join(' ')}}</td>
                <td>{{task.details.split('%20').join(' ')}}</td>
                <td>
                    <span v-if="task.priority === 0">High</span>
                    <span v-else-if="task.priority === 1">Medium</span>
                    <span v-else-if="task.priority === 2">Low</span>
                    <span v-else>N/A</span>
                </td>
            </tr>
        </table>
        <br>
        <form v-on:submit="sub">
            <div class="input-group">
                <span class="input-group-addon"></span>
                <input v-model="tname" id="task" type="text" class="form-control" name="Task" placeholder="Task">
            </div>
            <div class="input-group">
                <span class="input-group-addon"></span>
                <input v-model="detail" id="details" type="text" class="form-control" name="details" placeholder="Details">
            </div>
            <div class="input-group">
                <span class="input-group-addon"></span>
                <select v-model="priority" name="priority" class ="form-control">
                    <option selected value=0>High</option>
                    <option value=1>Medium</option>
                    <option value=2>Low</option>
                </select>
            </div>
        <br>
        <input type="submit" value="Add Task">
        </form>

    </div>
</template>

<script lang="ts" src="./tasks.component.ts">
</script>

<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
