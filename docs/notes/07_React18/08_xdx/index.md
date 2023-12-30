# 第一章：回顾纯函数

## 1.1 概述

* 纯函数（Pure Function）是函数式编程中的一个重要概念，它具有如下的两个主要特点：
  - ① `相同的输入总是产生相同的输出`：纯函数的输出完全由其输入决定，不会受到外部状态的影响。这意味着给定相同的输入，纯函数总是返回相同的输出，这种可预测性对于编程的可维护性和测试性非常重要。
  - ② `没有副作用`：纯函数不会对外部环境造成影响，不会改变全局变量、修改传入的参数或执行与函数计算无关的操作。这种特性使得纯函数在并发和并行编程中更容易使用，因为它们不会引入竞争条件和不确定性。

- 纯函数的应用场景非常广泛：
  - ① `测试和调试`： 纯函数易于测试，因为它们的输出只依赖于输入，不会受到外部环境的影响。这使得编写单元测试变得简单，可以通过提供不同的输入来覆盖不同的测试用例。
  - ② `函数组合和管道`： 纯函数可以无缝地组合在一起，形成函数管道。这使得编程变得更加模块化和可组合，可以通过连接不同的纯函数来构建复杂的操作。
  - ③ `缓存和优化`：因为纯函数对于相同的输入总是返回相同的输出，你可以使用缓存机制来避免重复计算，提高性能。这在涉及昂贵计算的情况下特别有用。
  - ④ `函数式编程`：纯函数是函数式编程范式的核心，函数式编程强调通过组合纯函数来处理数据，而不是通过修改状态。
  - ⑤ `并发和并行`：由于纯函数没有`副作用`，它们在并发和并行编程中更容易管理。在多线程或多进程环境中，纯函数不会引入竞争条件，从而减少了错误的可能性。

## 1.2 副作用

- 在生活中，药物除了治疗目标症状外，对人体其他部分可能会产生不良反应（副作用）：
  - ① 镇痛药（如：阿司匹林、布洛芬），可能引起胃部不适、消化问题、胃溃疡等。
  - ② 抗生素（如：青霉素、头孢菌素），可能导致过敏反应、肠道菌群失衡、耳鸣等。
  - ③ 抗抑郁药（如：SSRI 类药物），可能引起嗜睡、性功能障碍、失眠等。
  - ④ 利尿药（如：袢利尿药），可能导致电解质紊乱、脱水、低血压等。
  - ⑤ 镇静催眠药（如：苯二氮䓬类药物），可能引起依赖性、记忆力下降、肌肉松弛等。
  - ⑥ 抗高血压药（如：ACE 抑制剂、钙通道阻滞剂），可能导致低血压、头晕、咳嗽等。
  - ⑦ 抗过敏药（如：抗组胺药），可能引起嗜睡、口干、视力模糊等。
- 因为药物通常都是通过`有机化学`技术来合成的，我们都知道，有机化学反应受到很多因素影响会产生副产物，如：反应条件、反应物的性质、催化剂的选择等。
- 在计算机科学中，也引入了`副作用`的概念，表示在`执行一个函数`时，除了`返回函数值`之外，还`对调用函数产生了附加的影响` ，如：对变量的修改、对数据结构的更改、对文件系统的操作、对网络的请求等。
- 副作用会改变程序的状态，可能导致不可预测的行为，并增加代码的复杂性和难以调试；换言之，`副作用`往往是`产生 bug` 的 `“温床”` 。

## 1.3 纯函数的案例

### 1.3.1 数组中的纯函数

* 数组中的 `slice` 方法就是纯函数，因为它不会对原数组产生任何操作，而是返回一个新的数组。
* 数组中的 `splice`方法不是纯函数，因为它对原数组进行修改，并返回一个新的数组。



* 示例：

```js
/*
* slice 是一个纯函数，无论你怎么调用，都不会对原函数产生任何影响
*/

var arr = [1, 2, 3]

var newArr = arr.slice(1, 2)
console.log(`arr：${arr}`) // arr：1,2,3
console.log(`newArr：${newArr}`) // newArr：2
```



* 示例：

```js
/*
* splice 不是一个纯函数，因为它会修改原函数。
*/

var arr = [1, 2, 3]

var newArr = arr.splice(1, 2)
console.log(`arr：${arr}`) // arr：1
console.log(`newArr：${newArr}`) // newArr：2,3
```

### 1.3.2 判断下面的函数是否是纯函数

* 下面的函数`是`纯函数，符合纯函数的定义：

```js
function add(num1,num2) {
    return num1 + num2 
}

const res = add(1,2)
console.log(res) // 3

const res2 = add(1,2)
console.log(res2) // 3
```

* 下面的函数`不是`纯函数，不符合纯函数的定义：

```js
let num = 5
function add5(n){
    return n + num
}

const res = add5(2)
console.log(res) // 7

num = 10
const res2 = add5(2)
console.log(res2) // 12
```

* 下面的函数不是纯函数，不符合纯函数的定义：

```js
function printInfo(info){
    console.log(info)
    info.name = "哈哈"
    return info
}

const info = {name: "张三"}
printInfo(info) 
```

### 1.3.3 回顾闭包

* JavaScript 中`闭包`的定义：
  * JavaScript 中的`闭包`是指函数可以访问并操作其词法作用域外部的变量的能力。
  * 简单来说，闭包是由函数以及在函数定义时创建的词法环境组成的。
  * 当一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量时，就创建了一个闭包。
  * 内部函数可以访问外部函数的变量，即使外部函数已经执行完毕，这些变量仍然可以被内部函数访问和使用。
  * 闭包的一个常见用途是创建私有变量和函数。通过使用闭包，可以将变量和函数封装在一个作用域内，防止它们被外部访问和修改。

> 注意：
>
> * 一个普通的函数 function ，如果它可以`访问外层作用域的自由变量`，那么这`个函数`和`周围环境`就是一个`闭包`。
> * 从广义的角度来说：JavaScript 中的函数都是[闭包](https://aexiar.github.io/web-design/notes/03_javascript_advanced/04_xdx/#%E7%AC%AC%E4%BA%8C%E7%AB%A0-javascript-%E4%B8%AD%E7%9A%84%E9%97%AD%E5%8C%85-%E2%AD%90)。
> * 从狭义的角度来说：JavaScript 中一个函数，如果访问了外层作用域的变量，那么它是一个闭包。
> * 其实，`纯函数`的提出，某种意义上就是为了限制`闭包`的滥用。

## 1.4 纯函数的优势

* 为什么`纯函数`在`函数式编程`中非常重要？
  * 只要`写的时候`保证函数的`纯度`，只要`单纯的实现自己的业务逻辑`即可，不需要`关心传入的内容`如何获取或者`依赖其他的外部变量`是否发生修改。
  * 在`用的时候`，我们`确定`输入的内容`不会被任意篡改`，那么一定会有确定的`输出`。
* React 官方也提到了：

![image-20231229161456833](./assets/1.png)



# 第二章：Redux 的基本概念

## 2.1 Redux 是什么？

* Redux 是一个使用叫做 `“action”` 的事件来管理和更新应用状态的模式和工具库，它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

> 注意：Redux 和 Vue 中的 vuex 以及 Pinia 等没什么区别，都是用来管理状态的。

## 2.2 为什么需要使用 Redux ？

* JavaScript 开发的应用程序，已经变得越来越复杂了： 
  * ① JavaScript 需要管理的`状态`越来越多，越来越复杂。
  * ② 这些状态，包括：`服务器返回的数据`、`缓存数据`、`用户操作产生的数据`等，也`包括一些 UI 的状态`，比如：`某些元素是否被选中`，`是否显示加载动画`，`当前分页`等。
  * ③ ……

* 管理不断变化的 state 是非常困难的：

  * ① `状态之间相互会存在依赖`，一个状态的变化会引起另一个状态的变化，页面也有可能会引起状态的变化；
  * ② 当应用程序复杂时，`state 在什么时候`，`因为什么原因而发生了变化`，`发生了怎么样的变化`，`会变得非常难以控制和追踪`。

* React 是在`视图层`帮助我们解决了 DOM 的渲染过程，但是 `state` 依然是留给我们自己来管理:

  * 无论是`组件定义自己`的 `state`，还是`组件之间的通信`通过 `props` 进行传递，也包括通过 `Context` 进行数据之间的`共享`。
  *  React 主要负责帮助我们`管理视图`，state 如何维护最终还是我们自己来决定。

![image-20231213100244515](./assets/2.png)

> 注意：上图中的 f 是函数的意思，对于 React 而言，就是 render() 函数了。

* `Redux` 就是一个帮助我们管理 `state` 的容器：Redux 是 JavaScript 的状态容器，提供了可预测的状态管理；
* `Redux` 除了和 React 一起使用之外，它也可以和其他界面库一起来使用，如：Vue、React 等，并且它非常小。

## 2.3 什么时候选择使用 Redux ？

* `Redux` 可帮助我们处理共享状态的管理，但与任何工具一样，它也需要权衡利弊。使用 `Redux` 有更多的概念需要学习，还有更多的代码需要编写，需要添加了一些额外代码，并要求你遵循某些限制。这是短期和长期生产力之间的权衡。
* 如果出现下面的情况，就可以考虑使用 Redux 了：
  * ① 应用中有很多 state 在多个组件中需要使用。
  * ② 应用 state 会随着时间的推移而频繁更新。
  * ③ 更新 state 的逻辑很复杂。
  * ④ 中型和大型代码量的应用，很多人协同开发。
  * ⑤ ……

> 注意：并非所有应用程序都需要 Redux。 可以花一些时间思正在构建的应用程序类型，并决定哪些工具最能帮助解决我们正在处理的问题。

##   2.4 Redux 概念

### 2.4.1 state 的管理

* 以计数器为例：

```jsx {4-6,8-14,16-24}
import {PureComponent} from "react";

export class Counter extends PureComponent {
  state = { // State：组件状态中的数字
    count: 1
  }
  
  increment = (num) => { // Action：当事件触发后，触发状态更新的代码
    this.setState((prevState) => {
      return {
        count: prevState.count + num
      }
    })
  }
  
  render() { // View：视图定义
    const {count} = this.state
    return (
      <div>
        <h2>当前计数为：{count}</h2>
        <button onClick={() => this.increment(1)}>点我+1</button>
      </div>
    )
  }
}
```

* 从上面的代码中，我们可以得到一个组件中包含如下的内容：
  * `State`：驱动应用的真实数据源头。
  * `View`：基于当前状态的视图声明性描述。
  * `Actions`：根据用户的输入在应用程序中发生的事件，触发状态的更新。
* 其实，这就是所谓的`单向数据流`（one-way data flow），即：
  * 用 `State` 来描述应用程序在特定时间点的状况。
  * 基于 `State` 来渲染出 `View`。
  * 当发生某些事情时，如：用户单击按钮，`State` 会根据发生的事情进行更新，生成新的 `State`。
  * 基于新的 `State` 重新渲染 `View`。

![image-20231229163754213](./assets/3.png)

* 但是，当我们`有多个组件需要共享或使用相同的 State 的时候`，可能就会变得非常复杂，尤其是当这些组件位于应用程序的不同部分时，我们可以通过`提升 State 到父组件`中来解决，甚至可以使用 React 内置的解决方案 `Context` ；但是，都非常繁琐。
* 解决这个问题的一种方法是从`组件中提取共享 State`，并将其放入`组件树之外`的一个`集中位置`。这样，组件树就变成了一个大 `“View”`，任何组件都可以访问 State 或触发 Action，无论它们在树中的哪个位置！
* 通过定义和分离 State 管理中涉及的概念并强制执行维护 View 和 State 之间独立性的规则，代码变得更结构化和易于维护。

> 注意：这就是 Redux 背后的基本思想，即：应用中使用`集中式`的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。

### 2.4.2 不可变（Immutability）数据的力量

* JavaScript 的对象（object）和数组（array）默认都是 可变的（mutable） 的。如果我创建一个对象，我可以更改其字段的内容。如果我创建一个数组，我也可以更改内容：

```js
const obj = { a: 1, b: 2 }
// 对外仍然还是那个对象，但它的内容已经变了
obj.b = 3

const arr = ['a', 'b']
// 同样的，数组的内容改变了
arr.push('c')
arr[1] = 'd'
```

* 这就是 `改变` 对象或数组的例子。内存中还是原来对象或数组的引用，但里面的内容变化了。
* 如果想要不可变的方式来更新，代码必需先`复制`原来的 `object/array`，然后更新它的复制体，并通过展开运算符来实现这个目的：

```js
const obj = {
  a: {
    // 为了安全的更新 obj.a.c，需要先复制一份
    c: 3
  },
  b: 2
}

const obj2 = {
  // obj 的备份
  ...obj,
  // 覆盖 a
  a: {
    // obj.a 的备份
    ...obj.a,
    // 覆盖 c
    c: 42
  }
}

const arr = ['a', 'b']
// 创建 arr 的备份，并把 c 拼接到最后。
const arr2 = arr.concat('c')

// 或者，可以对原来的数组创建复制体
const arr3 = arr.slice()
// 修改复制体
arr3.push('c')
```

* Redux 期望所有`状态更新`都是使用`不可变`的方式。为什么？答案在[这里](https://aexiar.github.io/web-design/notes/07_React18/05_xdx/#_1-5-%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%95%B0%E6%8D%AE%E7%9A%84%E5%8A%9B%E9%87%8F)。

## 2.5 Redux 的术语

### 2.5.1 概述

* Redux 的工作流程如下所示：

![Redux的工作流程.png](./assets/4.png)

* 通过上图，我们得知 Redux 中有 `Store`、`Action`、`ActionCreators` 、`Reducers` 、`Dispatch` 的概念。

### 2.5.2 Store

* Store 是用来集中保存 React 数据的地方，在 Redux 中，应用中的 state 都应该`集中`保存在名为 `store` 的对象中。

> 注意：
>
> * 前文提到了，Redux 背后的基本思想，即：应用中使用`集中式`的全局状态来管理，并明确更新状态的模式，以便让代码具有可预测性。
> * 所以，对于 Redux 而言，一个项目有且仅有一个 `store` 对象。

* 并且，store 对象是通过一个 reducer （后文讲解，reducer 是一个纯函数） 来创建的，store 对象中有一个 getState() 的方法，返回当前的状态值。

```js {16}
import {createStore} from "redux"

/**
 * 定义 reducer 纯函数，此处不对 reducer 有过多讲解，将其理解为 const add = (num1,num2) => num1 + num2 也可以
 */
const reducer = () => {
  return {}
}

// 创建一个 store 对象
const store = createStore(reducer)

// 将 store 对象暴露
export default store
```

### 2.5.3 Action

* Redux 要求我们通过 Action 来更新数据；其实，我们在界面（View）中是通过 `store.dispatch(action)` 来触发更新的。
* Action 其实就是一个具有 `type` 字段的`普通 JavaScript 对象`，类似于：

```js {2}
const addAction = {
    type: 'INCREMENT',
    payload: '1'
}
```

* 对于 type 字段而言，只要是字符串即可；但是，有的时候，为了规范而言，我们通常会写成 `"域/事件名称"` 的形式；其中，`域` 表示这个 Action 所属的特征或类别，`事件名称`就是发生的具体事情，如：

```js {2}
const addAction = {
    type: 'todos/INCREMENT', // 看个人喜好，不强求，只要在项目中保持唯一即可
    payload: '1'
}
```

### 2.5.4 Reducer

* reducer 是一个纯函数，接收当前的 state 和一个 action 对象，必要的时候决定如何更新，并返回新的状态。函数的签名是：`(state, action) => newState`，类似于：

```js {9}
import {createStore} from "redux"

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
const reducer = (state , action) => {
  return state
}

const store = createStore(reducer)

export default store
```

* 我们可以将 `reducer` 看做是一个事件监听器，它会根据接收到的 `action` 事件的`类型`处理事件，并返回对应的状态。

* 同时，reducer 需要符合以下的规则：
  * ① 仅仅使用 `state` 和 `action` 参数来计算新的状态值。
  * ② 禁止直接修改 `state`，必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 `不可变更新`。
  * ③ 禁止任何异步逻辑、依赖随机值或导致其他`“副作用”`的代码。

> 注意：其实，上面就是要求 reducer 是一个纯函数而已。

* 并且，`reducer` 函数内部的逻辑通常遵循以下的步骤：
  * ① 检查 reducer 是否匹配到 action：
    * 如果是，则复制 state，使用新值更新 state 副本，然后返回新的 state 。
  * ② 否则，返回原来的 state 。

* 下面是一个简单的 reducer 案例：

```js {14-33}
import {createStore} from "redux"

// 初始化的 state
const initialState = {
  count: 0
}

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
const reducer = (state = initialState, action) => {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      const newRes = {
        ...state,
        count: state.count + action.payload
      }
      console.log('newRes', newRes)
      return newRes
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

export default store
```

> 注意： reduer() 函数内部可以使用任何类型的逻辑来决定新状态是什么，如：if-else、switch、循环等。

* `reduer()` 来源于 JavaScript 中的 `Array.reduce()` ，通常我们是这么使用的：

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = arr.reduce((pre, cur) => pre + cur, 0)
console.log(result) // 45
```

* 上述案例中数组的 `reduce()` 方法中传入了一个`回调函数`和一个`初始化值`。这个回调函数接收`之前的结果`和`当前的结果`，并`返回一个新的结果`。
* Redux 中的 `reducer()` 函数和数组中的 `reduce()` 方法的想法是完全一样的，它接收`上一个结果的 state` 和 `当前的 action` ，并`返回一个新的 state`。

```js {14,29-31}
import {createStore} from "redux"

// 初始化的 state
const initialState = {
  count: 0
}

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
const reducer = (state = initialState, action) => {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      const newRes = {
        ...state,
        count: state.count + action.payload
      }
      console.log('newRes', newRes)
      return newRes
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

export default store
```

* 这也就不难理解 `reducer` 函数内部的执行逻辑了。

### 2.5.5 Dispatch

* Redux 的 store 对象上有一个方法是 `dispatch`。更新 state 的唯一方式就是使用`store.dispatch()` 并传入一个 action 对象。
* store 对象将执行所有 reducer 函数并计算出更新后的 state，调用 `getState()` 可以获取新 state。

```jsx {11}
import React, {PureComponent} from 'react'
import store from "@/store"

class App extends PureComponent {
  
  state = {
    count: store.getState().count
  }
  
  add(num) {
    store.dispatch({type: 'INCREMENT', payload: num})
  }
    
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      console.log('订阅数据的变化', store.getState())
      const {count} = store.getState()
      this.setState({...this.state, count})
    })
  }
  
  componentWillUnmount() {
    this.unSubscribe()
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h2>当前计数为：{count}</h2>
        <button onClick={() => this.add(1)}>点我+1</button>
     
      </div>
    )
  }
}

export default App
```

## 2.6 Redux 的数据流

* 前文，我们提到了 `单向数据流`，它描述了更新应用程序的以下步骤：
  * ① 用 `State` 来描述应用程序在特定时间点的状况。
  * ② 基于 `State` 来渲染出 `View`。
  * ③ 当发生某些事情时，如：用户单击按钮，`State` 会根据发生的事情进行更新，生成新的 `State`。
  * ④ 基于新的 `State` 重新渲染 `View`。

* 具体来说，对于 Redux，我们可以将这些步骤分解为更详细的内容：
  * ① 初始启动：
    * 使用最顶层的 root reducer 函数创建 Redux store。
    * store 调用一次 root reducer，并将返回值保存为它的初始 `state`。
    * 当视图`首次渲染`时，视图组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
  * ② 更新环节：
    * 应用程序中发生了某些事情，如：用户单击按钮。
    * dispatch 一个 action 到 Redux store，例如 `dispatch({type: 'counter/increment'})`。
    * store 用之前的 `state` 和当前的 `action` 再次运行 reducer 函数，并将返回值保存为新的 `state`。
    * store 通知所有订阅过的视图，通知它们 store 发生更新。
    * 每个订阅过 store 数据的视图 组件都会检查它们需要的 state 部分是否被更新。
    * 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页。
* 下面是 Redux 数据流更新的动画：

![数据流更新动画](./assets/5.gif)

## 2.7 Redux 使用的三大原则

* ① 单一数据源：
  * 整个应用程序的 `state` 被存储到一颗 `Object Tree` 中，并且`这个 Object Tree 只存储在一个 store 中`。
  * Redux `并没有强制我们不能创建多个 store` ，但是那样`不利于数据的维护`。
  * `单一数据源`可以`让`整个应用程序的 `state` 方便`维护`、`追踪`和`修改`。
* ② state 是只读的：
  * 唯一修改 State 的方法就是在组件中通过 store 对象 `触发（Dispatch）` Action，不要试图通过其他的任何方式来修改 State。
  * 这样确保了视图（View）或网络请求都`不能直接修改 State`，它们只能`通过 action 来描述自己想要如何去修改 State`。
  * 这样可以`保证所有的修改都被集中化处理`，并且`按照严格的顺序来执行`，所以`不需要担心race condition（竟态）的问题`。
* ③ 使用纯函数来执行修改：
  * 通过 `reducer`将 `旧state`和 `actions` 联系在一起，并且返回一个`新`的 `State`：
  * 随着应用程序的复杂度增加，我们可以将 `reducer` 拆分成`多个`小的 `reducers`，分别操作不同 state tree 的一部分；
  * 但是所有的 `reducer` 都应该是`纯函数`，不能产生任何的副作用。

## 2.8 Redux 的快速入门

* 案例：实现下面的效果。

![](./assets/6.gif)

* 安装 redux ：

```shell
npm install redux
```

* 项目结构：

![image-20231230152906851](./assets/7.png)

* 示例：
* App.jsx

```jsx {2,12,17,21,37-42}
import React, {PureComponent} from 'react'
import store from "@/store"

class App extends PureComponent {
  
  state = {
    count: store.getState().count
  }
  
  add(num) {
    // 通过 store 触发 Action
    store.dispatch({type: 'INCREMENT', payload: num})
  }
  
  sub(num) {
    // 通过 store 触发 Action
    store.dispatch({type: 'DECREMENT', payload: num})
  }
  
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      console.log('订阅数据的变化', store.getState())
      const {count} = store.getState()
      this.setState({...this.state, count})
    })
  }
  
  componentWillUnmount() {
    this.unSubscribe()
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <h2>当前计数为：{count}</h2>
        <button onClick={() => this.add(1)}>点我+1</button>
        <button onClick={() => this.add(5)}>点我+5</button>
        <button onClick={() => this.add(10)}>点我+10</button>
        <button onClick={() => this.sub(1)}>点我-1</button>
        <button onClick={() => this.sub(5)}>点我-5</button>
        <button onClick={() => this.sub(10)}>点我-10</button>
      </div>
    )
  }
}

export default App
```

> 注意：
>
> * 目前，只能通过 `store.subscribe` 来监听 redux 中 state 的变化，后期会使用 [HOC](https://aexiar.github.io/web-design/notes/07_React18/06_xdx/) 来进行优化。
> * 目前，为了实现 redux 中 state 变化，页面跟着刷新，还是使用的是，将数据放到组件内部的 state 中，后期也会使用 [HOC](https://aexiar.github.io/web-design/notes/07_React18/06_xdx/) 来进行优化。

* store/index.js

```js {4,14,36}
import {createStore} from "redux"

// 初始化的 state
const initialState = {
  count: 0
}

/**
 * 定义 reducer 纯函数
 * @param state 当前的 state
 * @param action 本次需要更新的 action
 * @return store 中存储的 state
 */
const reducer = (state = initialState, action) => {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'INCREMENT':
      const newRes = {
        ...state,
        count: state.count + action.payload
      }
      console.log('newRes', newRes)
      return newRes
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      }
    default: {
      return state
    }
  }
}

// 创建 Store 对象
const store = createStore(reducer)

export default store
```

