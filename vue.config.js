// 主题色定制需要less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'heading-color': 'rgba(255, 255, 255 0.85)', // 标题色
            'text-color': 'rgba(255, 255, 255, 0.65)', // 主文本色
            'text-color-secondary': 'rgba(255, 255, 255, 0.45)', // 次文本色
            'disabled-color': 'rgba(255, 255, 255, 0.25)', // 失效色
            'border-color-base': 'rgba(255, 255, 255, 0.25)' // 边框色
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
