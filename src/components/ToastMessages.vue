<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import Toast from '@/components/ToastComponent.vue'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    // 請自行補上 emitter 事件
    this.emitter.on('push-message', (msg) => {
      const { style = 'success', title, content } = msg
      this.messages.push({ style, title, content })
    })
  }
}
</script>
