<template>
  <div>
    <h1>Show User</h1>
    <p>User ID: {{ this.user.id }}</p>
    <p>User Email: {{ this.user.email }}</p>
    <p>User First Name: {{ this.user.name }}</p>
    <p>User Last Name: {{ this.user.lastname }}</p>

  </div>
</template>

<script>
import UserServices from '../../services/UsersService'
export default {
  // Logic จะเขียนตรงนี้
  data () {
    return {
      user: null
    }
  },
  async created () {
    var userId = this.$route.params.userId 
    this.user = (await UserServices.show(userId)).data
    console.log("created userId:", this.user)
  },
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>