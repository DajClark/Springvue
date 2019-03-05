<template>
    <div class="tasks">
        <table>
            <tr>
                <th>Endpoint</th>
                <th>Details</th>
                <th>Snippet</th>
            </tr>
            <tr v-for="resource in endpointdata">
                <td>{{resource.name.split('%20').join(' ')}}</td>
                <td>{{resource.details.split('%20').join(' ')}}</td>
                <td>{{resource.get.split('%20').join(' ')}}</td>
            </tr>
        </table>
        <br>
        <button id="modalBtn" class="button" @click="displayModal">Add Resource</button>

        <div id="modalAdd" class="modal">

            <div class="modalForm">
                <div class="modalHeader">
                    <h3 class="mainHeader">Add Resource</h3>

                </div>

                <div>
                    <form class="forms" action="">
                        Name <br>
                        <input type="text" v-model="resourcename">
                        <br> Details <br>
                        <input type="text" v-model="resourcedetails">
                        <br> Get <br>
                        <input type="text" v-model="resourceget"><br>

                    </form>
                    <button class="addBtn" @click="addnew">Add Resource</button>
                    <button class="closeBtn" @click="closeModal">Close</button>
                </div>
            </div>


        </div>

    </div>
</template>

<script lang="ts" src="./endpoints.component.ts">
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

    /* Modal */

    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modalForm {
        background: #f4f4f4;
        margin: 10% auto;
        width: 60%;
    }

    .forms {
        width: 100%;
        overflow: hidden;
        padding: 0px 10px;
    }

    input[type=text] {
        width: 95%;
        padding: 12px 20px;
        margin: 8px 10px;
        box-sizing: border-box;
    }
</style>
