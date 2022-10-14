<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">後台管理系統</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">回首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/products">商品列表</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">訂單列表</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">優惠券</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['ajaxStateMessage'],
  methods: {
    logout () {
      // 取得登出API路徑
      const apiUrl = `${process.env.VUE_APP_API}logout`
      // 進行登出
      this.$http.post(apiUrl).then(res => {
        // 登出成功後轉址回登入頁面
        if (res.data.success) {
          this.$router.push('/login')
        }
        this.ajaxStateMessage(res, '登出')
      }).catch(err => {
        console.log(err)
        alert('登出時發生錯誤')
      })
    }
  }
}
</script>
