<template>
    <div class="home row">

        <div class="col-md-11 endpoints">
            <div>
                <div class="alert alert-success" v-if="authenticated">
                    <span v-if="username" v-text="$t('home.logged.message', { 'username': username})">You are logged in as user "{{username}}"</span>
                </div>

                <div class="alert alert-warning" v-if="!authenticated">
                    <span v-text="$t('global.messages.info.authenticated.prefix')">If you want to </span>
                    <a class="alert-link" v-on:click="openLogin()" v-text="$t('global.messages.info.authenticated.link')">sign in</a><span v-html="$t('global.messages.info.authenticated.suffix')">, you can try the default accounts:<br/>- Administrator (login="admin" and password="admin") <br/>- User (login="user" and password="user").</span>
                </div>
                <div class="alert alert-warning" v-if="!authenticated">
                    <span v-text="$t('global.messages.info.register.noaccount')">You don't have an account yet?</span>&nbsp;
                    <router-link class="alert-link" to="/register" v-text="$t('global.messages.info.register.link')">Register a new account</router-link>
                </div>
            </div>
            <h1>Services</h1>
            <table class="table">
                <thead>
                <tr>
                    <th>Server</th>
                    <th>Details</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-success">
                    <td>Meegan.me/8089</td>
                    <td>Jakes Server</td>
                    <td>Working</td>
                </tr>
                <tr class="table-danger">
                    <td>192.168.0.222</td>
                    <td>Pi Server</td>
                    <td>Down</td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script lang="ts" src="./service.component.ts">
</script>

<style scoped>
    .endpoints {
        margin-left: 160px;
    }
</style>
