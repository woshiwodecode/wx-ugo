function request(url) {
  return new Promise(function(resolve, reject) {
    mpvue.request({
      url: url,
      success: function(info) {
        resolve(info.data)
      }
    })
  })
}



export default request
