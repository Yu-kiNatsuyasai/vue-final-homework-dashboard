<template>
  <VLoading :active="isLoading"></VLoading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <h1>產品列表</h1>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td class="text-right">
          {{ $filters.currency(product.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(product.price) }}
        </td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span class="text-secondary" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, product)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(product)">刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination
    :pages="pagination"
    @emit-pages="getProducts">
  </Pagination>
  <product-modal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></product-modal>
  <del-modal
    ref="delModal"
    :product="tempProduct"
    @del-product="delProduct">
  </del-modal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/PaginationComponent.vue'

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          } else {
            console.log(res.data.error)
            alert(res.data.message + '，' + res.data.error.message)
          }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          alert('')
          this.isLoading = false
        })
    },
    openModal (isNew, item) {
      // 若非新增則傳入現有商品
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      this.$refs.productModal.showModal() // 打開視窗
    },
    updateProduct (item) {
      this.isLoading = true
      // API路徑(編輯時)
      let apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      let httpMethod = 'put'
      let msg = '更新'
      // API路徑(新增時)
      if (this.isNew) {
        apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
        httpMethod = 'post'
        msg = '新增'
      }
      // 執行API
      this.$http[httpMethod](apiUrl, { data: item })
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data)
            this.$refs.productModal.hideModal() // 關閉輸入視窗
            this.getProducts() // 重新取得清單
            this.emitter.emit('push-message', { // 推送成功訊息
              style: 'success',
              title: item.title + ' ' + msg + '成功'
            })
          } else {
            // console.log(res.data)
            this.emitter.emit('push-message', { // 推送失敗訊息
              style: 'danger',
              title: item.title + ' ' + msg + '失敗',
              content: res.data.message.join('、')
            })
          }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    openDelModal (item) {
      // 打開刪除視窗
      this.tempProduct = { ...item }
      this.$refs.delModal.showModal()
    },
    delProduct (item) {
      this.isLoading = true
      const apiUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(apiUrl)
        .then(res => {
          if (res.data.success) {
            // console.log(res.data)
            this.$refs.delModal.hideModal() // 關閉刪除視窗
            this.getProducts() // 重新取得清單
            this.emitter.emit('push-message', { // 推送成功訊息
              style: 'success',
              title: item.title + ' ' + '刪除成功'
            })
          } else {
            // console.log(res.data.error)
            this.emitter.emit('push-message', { // 推送失敗訊息
              style: 'danger',
              title: item.title + ' ' + '刪除失敗',
              content: res.data.message.join('、')
            })
          }
          this.isLoading = false
        })
        .catch(err => {
          console.log(err)
          this.isLoading = false
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
