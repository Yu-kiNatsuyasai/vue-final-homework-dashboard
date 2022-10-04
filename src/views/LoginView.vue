<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn()">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登入使用者資訊
      user: {
        username: 'hexscholl@test.com',
        password: 'zzxxccvv'
      }
    }
  },
  methods: {
    // 登入
    signIn () {
      // 取得登入API路徑
      const apiUrl = `${process.env.VUE_APP_API}admin/signin`
      // 進行登入
      this.$http.post(apiUrl, this.user).then(res => {
        if (res.data.success) {
          // 取得傳回之token與到期日
          const { token, expired } = res.data
          // 將token與到期日加入cookie
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          // 轉址到Dashboard
          this.$router.push('/dashboard')
        }
      }).catch(err => {
        console.log(err)
        alert('登入時發生錯誤')
      })
    }
  }
}
</script>
