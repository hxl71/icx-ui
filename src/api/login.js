import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
    grant_type: 'password'
  }
  return request({
    url: '/uaa/oauth/token',
    method: 'post',
    data,
    transformRequest: [function(data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      ret = ret.substring(0, ret.length - 1)
      return ret
    }]
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/uaa/userapi/me',
    method: 'get',
    params: { token }
  })
}

