<template>
  <div>
    <h2>Get all users</h2>
    <p><button v-on:click="logout2()">Logout</button></p>
    <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้</button></p>
    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
    <div v-for="user in users" v-bind:key="user.id">
      <p>id: {{ user.id }}</p>
      <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>
      <p><button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button></p>
      <p><button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button></p>
      <p><button v-on:click=deleteUser(user)>ลบข้อมูล</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data
      console.log(this.users)
    } catch (error) {
      console.log(error)
    }
  },


  // Logic จะเขียนตรงนี้
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      await UsersService.delete(user)
      this.refreshData()
    },
    async refreshData() {
      this.users = (await UsersService.index()).data
    },
    logout() {
      const authenStore = useAuthenStore()
      authenStore.logout() // เรียก action logout จาก store

      this.$router.push({
        name: 'login'
      })
    },
  },


};
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
