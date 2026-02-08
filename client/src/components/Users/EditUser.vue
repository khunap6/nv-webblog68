<template>
 <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent = "editUser">
        <p>name: <input type="text" v-model="user.name"></p>
        <p>lastname: <input type="text" v-model="user.lastname"></p>
        <p>email: <input type="text" v-model="user.email"></p>
        <p>password: {{this.user.password}}</p>
        <p><button type="submit">edit user</button></p>
    </form>
    </div>

</template>

<script>
import UsersService from '../../services/UsersService';
export default {
  data(){
    return{
      user: null
    }
  },
  methods:{
    async editUser(){
      await UsersService.put(this.user)
      this.$router.push({
                    name: 'users'
                })
    }
  },
  async created(){
    try{
      this.user = (await UsersService.show(this.$route.params.userId)).data
      console.log('edit user: '+ this.user)
    }catch{
      console.log('error')
    }
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>