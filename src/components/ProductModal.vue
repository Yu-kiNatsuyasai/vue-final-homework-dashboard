<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
    <VForm @submit="$emit('update-product',tempProduct)" v-slot="{ meta,errors }">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="tempProduct.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control" />
              </div>
              <img class="img-fluid" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <VField
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                  rules="required"
                  :class="{ 'is-invalid': errors['title'] }"
                ></VField>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <VField
                    type="text"
                    class="form-control"
                    id="category"
                    name="category"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    rules="required"
                    :class="{ 'is-invalid': errors['category'] }"
                  ></VField>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <VField
                    type="text"
                    class="form-control"
                    id="unit"
                    name="unit"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                    rules="required"
                    :class="{ 'is-invalid': errors['unit'] }"
                  ></VField>
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <VField
                    type="number"
                    class="form-control"
                    id="origin_price"
                    name="origin_price"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                    rules="required"
                    :class="{ 'is-invalid': errors['origin_price'] }"
                  ></VField>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <VField
                    type="number"
                    class="form-control"
                    id="price"
                    name="price"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                    rules="required"
                    :class="{ 'is-invalid': errors['price'] }"
                  ></VField>
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click="hideModal">
            取消
          </button>
          <button type="submit" class="btn btn-primary" :disabled="!meta.valid">確認</button>
        </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {
        title: '特製風味烤蘑菇披薩',
        category: '補血料理',
        origin_price: 9487,
        price: 87,
        unit: '個',
        description: '立即為選中的角色恢復生命值上限的28%，並在之後的30秒內，每5秒恢復620點生命值。',
        content: '鋪滿餡料的薄餅。各色罕見食材在舌頭上圍成一圈跳著奇異的舞蹈。不過味道不錯。',
        is_enabled: 1,
        imageUrl: 'https://patchwiki.biligame.com/images/ys/7/7f/1xpsnbivrsxfvpj47rurrbgm3hm4qlg.png',
        imagesUrl: []
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  }
}
</script>
