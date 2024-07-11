export default {
  install(app) {
    app.config.globalProperties.$getRetinaImage = (src) => {
      const retinaSrc = src.replace('.png', '@2x.png')
      return retinaSrc
    }
  }
}
