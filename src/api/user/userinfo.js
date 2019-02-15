import request from '@/utils/request'
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

