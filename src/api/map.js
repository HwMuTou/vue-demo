import { axios } from '@/utils/request'

export function china () {
  return axios({
    url: '/china/map',
    method: 'get'
  })
}
