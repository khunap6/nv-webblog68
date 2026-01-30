<template>
  <div>
    <h1>User Login</h1>
    <form v-on:submit.prevent="onLogin">
      <p>Username: <input type="text" v-model="email" /></p>
      <p>Password: <input type="password" v-model="password" /></p>
      <p><button type="submit">Login</button></p>
      <div class="error" v-if="error">{{error}}</div>
    </form>
  </div>
</template>

<script>
import AuthenService from '../services/AuthenService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onLogin () {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
        
        console.log(response.data) // ดูค่าที่ได้ก่อน
        
        this.$router.push({
          name: 'users'
        })
        
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>