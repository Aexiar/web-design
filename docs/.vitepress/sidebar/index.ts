import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '前端开发基础',
      collapsed: true,
      items: [
        { text: '初识HTML', link: `/notes/01_front-end_basic/01_${commonDirectoryName}/` },
        { text: 'HTML基础', link: `/notes/01_front-end_basic/02_${commonDirectoryName}/` },
        { text: '额外知识', link: `/notes/01_front-end_basic/03_${commonDirectoryName}/` },
        { text: 'CSS基础', link: `/notes/01_front-end_basic/04_${commonDirectoryName}/` },
        { text: 'CSS进阶', link: `/notes/01_front-end_basic/05_${commonDirectoryName}/` },
        { text: 'CSS特性', link: `/notes/01_front-end_basic/06_${commonDirectoryName}/` },
        { text: 'CSS盒子模型', link: `/notes/01_front-end_basic/07_${commonDirectoryName}/` },
        { text: '额外知识', link: `/notes/01_front-end_basic/08_${commonDirectoryName}/` },
        { text: 'CSS浮动', link: `/notes/01_front-end_basic/09_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'JavaScript基础',
      collapsed: true,
      items: [
        { text: '初识JavaScript', link: `/notes/02_javascript_basic/01_${commonDirectoryName}/` },
        { text: 'JavaScript基本语法', link: `/notes/02_javascript_basic/02_${commonDirectoryName}/` },
        { text: 'JavaScript流程控制', link: `/notes/02_javascript_basic/03_${commonDirectoryName}/` },
        { text: 'JavaScript函数', link: `/notes/02_javascript_basic/04_${commonDirectoryName}/` },
        { text: 'JavaScript面向对象', link: `/notes/02_javascript_basic/05_${commonDirectoryName}/` },
        { text: 'JavaScript内置类', link: `/notes/02_javascript_basic/06_${commonDirectoryName}/` },
        { text: 'JavaScript数组', link: `/notes/02_javascript_basic/07_${commonDirectoryName}/` },
        { text: 'JavaScript的DOM操作（一）', link: `/notes/02_javascript_basic/08_${commonDirectoryName}/` },
        { text: 'JavaScript的DOM操作（二）', link: `/notes/02_javascript_basic/09_${commonDirectoryName}/` },
        { text: 'JavaScript的事件处理', link: `/notes/02_javascript_basic/10_${commonDirectoryName}/` },
        { text: 'JavaScript的BOM操作', link: `/notes/02_javascript_basic/11_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'JavaScript高级',
      collapsed: true,
      items: [
        { text: 'JavaScript中的this指向', link: `/notes/03_javascript_advanced/01_${commonDirectoryName}/` },
        { text: '浏览器的运行原理', link: `/notes/03_javascript_advanced/02_${commonDirectoryName}/` },
        { text: 'JavaScript的运行原理', link: `/notes/03_javascript_advanced/03_${commonDirectoryName}/` },
        { text: 'JavaScript的内存管理和闭包', link: `/notes/03_javascript_advanced/04_${commonDirectoryName}/` },
        { text: 'JavaScript的函数和对象的增强知识', link: `/notes/03_javascript_advanced/05_${commonDirectoryName}/` },
        { text: 'JavaScript中ES5实现继承', link: `/notes/03_javascript_advanced/06_${commonDirectoryName}/` },
        { text: 'JavaScript中ES6实现继承', link: `/notes/03_javascript_advanced/07_${commonDirectoryName}/` },
        { text: 'JavaScript中ES6+（一）', link: `/notes/03_javascript_advanced/08_${commonDirectoryName}/` },
        { text: 'JavaScript中ES6+（二）', link: `/notes/03_javascript_advanced/09_${commonDirectoryName}/` },
        { text: 'JavaScript的Proxy和Reflect', link: `/notes/03_javascript_advanced/10_${commonDirectoryName}/` },
        { text: 'JavaScript的Promise', link: `/notes/03_javascript_advanced/11_${commonDirectoryName}/` },
        { text: 'JavaScript的迭代器和生成器', link: `/notes/03_javascript_advanced/12_${commonDirectoryName}/` },
        { text: 'JavaScript中的事件循环', link: `/notes/03_javascript_advanced/13_${commonDirectoryName}/` },
        { text: 'JavaScript中的Storage和正则表达式', link: `/notes/03_javascript_advanced/14_${commonDirectoryName}/` },
        { text: 'JavaScript中的防抖、节流、深拷贝和事件总线', link: `/notes/03_javascript_advanced/15_${commonDirectoryName}/` },
        { text: 'JavaScript中的网络编程', link: `/notes/03_javascript_advanced/16_${commonDirectoryName}/` },
      ]
    },
    {
      text: '前端工程化基础',
      collapsed: true,
      items: [
        { text: 'One', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' }
      ]
    },
    {
      text: '项目构建工具',
      collapsed: true,
      items: [
        { text: 'Webpack', link: '/guide/one' },
        { text: 'Vite', link: '/guide/two' }
      ]
    },
    {
      text: 'Vue3全家桶',
      collapsed: true,
      items: [
        { text: '初识Vue3', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' }
      ]
    },
    {
      text: 'React18全家桶',
      collapsed: true,
      items: [
        { text: '初识React', link: `/notes/07_React18/01_${commonDirectoryName}/` },
        { text: 'React脚手架', link: `/notes/07_React18/02_${commonDirectoryName}/` },
        { text: 'React组件化开发（一）', link: `/notes/07_React18/03_${commonDirectoryName}/` },
        { text: 'React组件化开发（二）', link: `/notes/07_React18/04_${commonDirectoryName}/` },
        { text: 'React组件化开发（三）', link: `/notes/07_React18/05_${commonDirectoryName}/` },
        { text: 'React组件化开发（四）', link: `/notes/07_React18/06_${commonDirectoryName}/` },
        { text: 'React 的 CSS 解决方案', link: `/notes/07_React18/07_${commonDirectoryName}/` },
        { text: 'React 的状态管理（redux）', link: `/notes/07_React18/08_${commonDirectoryName}/` },
        { text: 'React 的状态管理二（redux）', link: `/notes/07_React18/09_${commonDirectoryName}/` },
        { text: 'React Hooks', link: `/notes/07_React18/11_${commonDirectoryName}/` },
      ]
    }
  ],
}

export default sidebar