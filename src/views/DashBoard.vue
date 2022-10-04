<template>
    <h1>DashBoard</h1>
</template>

<script>
export default {
  created () {
    // 取出cookie中的token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 將token加入Axios的header中
    this.$http.defaults.headers.common.Authorization = token
    // 取得驗證API路徑
    const apiUrl = `${process.env.VUE_APP_API}api/user/check`
    // 進行驗證
    this.$http.post(apiUrl, this.user).then(res => {
      // 未通過驗證時轉回登入頁面
      if (!res.data.success) {
        this.$router.push('/login')
      }
    }).catch(err => {
      console.log(err)
      alert('驗證登入狀態時發生錯誤')
    })
  }
}
</script>
