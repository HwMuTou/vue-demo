// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/rete/editor',
    children: [

      // Rete.js Hello
      {
        path: '/rete',
        name: 'dashboard',
        component: PageView,
        meta: { title: '画布界面', icon: 'form', permission: ['dashboard'] },
        redirect: '/rete/editor',
        children: [
          {
            path: '/rete/editor',
            name: 'ReteEditor',
            component: () => import('@/views/rete/ReteView'),
            meta: { title: '工作流编辑', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      {
        path: '/demo',
        name: 'demo',
        component: PageView,
        meta: { title: '功能演示', icon: bxAnaalyse, permission: ['dashboard'] },
        redirect: '/demo/count',
        children: [
          {
            path: '/demo/count',
            name: 'CountAdd',
            component: () => import('@/views/demo/CountAdd'),
            meta: { title: '状态持久化', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/d3bar',
            name: 'D3Bar',
            component: () => import('@/views/demo/D3Bar'),
            meta: { title: '柱状图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/D3ForceCenter',
            name: 'D3ForceCenter',
            component: () => import('@/views/demo/D3ForceCenter'),
            meta: { title: '力学中心点图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/D3ForceChart',
            name: 'D3ForceChart',
            component: () => import('@/views/demo/D3ForceChart'),
            meta: { title: '力学网状图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/D3ForceWebGL',
            name: 'D3ForceWebGL',
            component: () => import('@/views/demo/D3ForceWebGL'),
            meta: { title: '排斥力水流图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/D3GeoMapChart',
            name: 'D3GeoMapChart',
            component: () => import('@/views/demo/D3GeoMapChart'),
            meta: { title: 'SVG地图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/D3PieChart',
            name: 'D3PieChart',
            component: () => import('@/views/demo/D3PieChart'),
            meta: { title: '饼状图', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/ElementDemo',
            name: 'ElementDemo',
            component: () => import('@/views/demo/ElementDemo'),
            meta: { title: '一般UI示例', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/Stopwatch',
            name: 'Stopwatch',
            component: () => import('@/views/demo/Stopwatch'),
            meta: { title: '页面记时', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }, {
            path: '/demo/ThreeBuffergeometry',
            name: 'ThreeBuffergeometry',
            component: () => import('@/views/demo/ThreeBuffergeometry'),
            meta: { title: 'ThreeJS 3D效果', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      {
        path: '/monaco',
        name: 'monaco',
        component: PageView,
        meta: { title: 'Monaco编辑器', icon: 'edit', permission: ['dashboard'] },
        redirect: '/monaco/editor',
        children: [
          {
            path: '/monaco/editor',
            name: 'Editor',
            component: () => import('@/views/monaco/Editor'),
            meta: { title: 'Monaco编辑器', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      {
        name: 'AntDesign',
        path: '/ant-design',
        component: PageView,
        redirect: '/ant-design/index',
        meta: { title: 'AntDesign样例', icon: 'experiment', keepAlive: true, permission: ['dashboard'] },
        children: [
          {
            path: '/ant-design/index',
            name: 'Training',
            component: () => import('@/views/ant/Training'),
            meta: { title: 'AntDesign样例', icon: 'experiment', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
