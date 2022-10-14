import emitter from '@/methods/emitter'

export function ajaxStateMessage (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-message', {
      // 推送成功訊息
      style: 'success',
      title: title + '成功'
    })
  } else {
    // console.log(res.data)
    emitter.emit('push-message', {
      // 推送失敗訊息
      style: 'danger',
      title: title + '失敗',
      content: Array.isArray(res.data.message) ? res.data.message.join('、') : res.data.message
    })
  }
}
