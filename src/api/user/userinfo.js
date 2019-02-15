import request from '@/utils/request'
// import { Loading } from 'element-ui'
// let loadingObj
// const startLoading = () => {
//     loadingObj = Loading.service({
//       lock: true,
//       text: '加载中……',
//       background: 'rgba(0, 0, 0, 0.7)'
//     })
//   }
  
// const endLoading = () => {
//     loadingObj.close()
//   }

// export {startLoading, endLoading}
export function getUser (query) {
    return request({
        url: '/api/index.json',
        methods: 'grt',
        params: query
    })
}
export function getUser2 (query) {
    return request({
        url: '/api/artical/list',
        methods: 'grt',
        params: query
    })
}
export function getUser3 (query) {
        return request({
            url: '/api/artical/list',
            methods: 'grt',
            params: query
        })
}

