import request from '@/utils/request'

export function page(params) {
  return request({
    url: '/generator/generatorApi/gener',
    method: 'get',
    params
  })
}
