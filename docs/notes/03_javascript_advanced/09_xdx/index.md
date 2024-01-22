

# 第一章：对象的相关方法

## 1.1 Object.values 方法

* 方法：获取所有的 value 值

```js
Object.values(o: {}): any[]
```

```js
Object.values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "张三",
      age: 18,
      address: "中国"
    }

    let values = Object.values(obj)

    console.log(values) // ['张三', 18, '中国']

    let str = "HelloWorld"
    values = Object.values(str)

    console.log(values) // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

  </script>
</body>
</html>
```

## 1.2 Object.keys 方法

* 方法：获取对象所有的 key 并组成数组返回

```js
keys(o: {}): string[];
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "张三",
      age: 18,
      address: "中国"
    }

    const keysArr = Object.keys(obj)
    for (let key of keysArr) {
      let value = obj[key]
      console.log(key, value)
    }

  </script>
</body>
</html>
```

## 1.3 Object.entries 方法

* 方法：用于将一个对象的可枚举属性（即对象自身的属性，不包括继承的属性）转换为一个由键-值对组成的数组。

```js
entries(o: {}): [string, any][];
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "许大仙",
      age: 18,
      address: "北京"
    }
    // 通过 Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组
    const entries = Object.entries(obj);
    console.log(entries)
    for (let [key, value] of entries) {
      console.log(key, value)
    }
    // 对数组、字符串的操作
    console.log(Object.entries(["abc", "bcd"]))
    console.log(Object.entries("abc"))
  </script>
</body>
</html>
```

## 1.4 Object.fromEntries 方法

* 方法：将一个 entries ，转换为对象。

```js
fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T };
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "张三",
      age: 18,
      address: "中国"
    }

    const entries = Object.entries(obj)
    console.log(entries) // [['name', '张三'],['age', 18],['address', '中国']]

    const resultObj = Object.fromEntries(entries)
    console.log(resultObj) // {name: '张三', age: 18, address: '中国'}
  </script>
</body>
</html>
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* 将一个 URLSearchParams 对象转换为 Object 对象 */
    const searchString = "?name=x&age=18&height=1.8"
    const urlSearchParams = new URLSearchParams(searchString)
    const SearchObj = Object.fromEntries(urlSearchParams)
    console.log(SearchObj) // {name: 'x', age: '18', height: '1.8'}
  </script>
</body>
</html>
```

## 1.5 Object.hasOwn 方法

* 方法：用于判断一个对象是否有自己的属性

```js
Object.hasOwn(obj,prokey)
```

> 注意：该方法其实是用来替代 Object.prototype.hasOwnProperty() 方法的。



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "张三"
    }

    obj.__proto__.age = 10

    console.log(Object.hasOwn(obj, "name")) // true
    console.log(Object.hasOwn(obj, "age")) // false

    const obj2 = Object.create(null)
    obj2.name = "李四"

    console.log(Object.hasOwn(obj2, "name")) // true

  </script>
</body>
</html>
```



# 第二章：字符串相关方法

## 2.1 概述

* 有的时候，对于某些字符串，我们需要对其前面和后面进行填充，以实现某种格式化的效果，ES6+ 就增加了 `padStart` 和 `padEnd` 方法，分别对字符串的首尾进行填充：

```js
str.padStart(maxLength: number, fillString?: string): string;
```

```js
str.padEnd(maxLength: number, fillString?: string): string;
```

* 有的时候，对于某些字符串，我们希望单独将前面或后面的空格去掉，ES6+ 增加了 `trimStart` 和 `trimEnd` 方法：

```js
str.trimStart(): string;
```

```js
str.trimEnd(): string;
```

## 2.2 应用示例

* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* 对时间进行格式化 */
    let minute = "5"
    let second = "6"
    let time = `${minute.padStart(2, "0")}：${second.padStart(2, "0")}`
    console.log(time)
  </script>
</body>
</html>
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* 对身份证进行脱敏 */
    let idCardNumber = "15372519720318383X"
    console.log(idCardNumber.replace(/(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})/g, "$1****$5"))
  </script>
</body>
</html>
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    let str = "   Hello World    "
    console.log(str.trimStart()) 
    console.log(str.trimEnd())
    console.log(str.trim)
  </script>
</body>
</html>
```



# 第三章：数组相关方法（⭐）

## 3.1 概述

* 在 ES6+ 之后，数组新增了 map、flat 和 flatMap 等方法，用于对数组进行转换、展平和映射操作。

## 3.2 map 方法

* 方法：用于对数组中的每个元素执行给定的函数，然后返回一个新的数组，该数组包含了函数的返回值。

```js
arr.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* map 方法：用于对数组中的每个元素执行给定的函数，然后返回一个新的数组，该数组包含了函数的返回值 */
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const newArr = arr.map(x => x ** 2)
    console.log(newArr) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 0]
  </script>
</body>
</html>
```

## 3.3 flat 方法

* 方法：用于将多维数组（嵌套数组）展平为一维数组。我们可以指定一个可选的参数，表示要展平的层级。

```js
arr.flat<A, D extends number = 1>(this: A,depth?: D): FlatArray<A, D>[]
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    // flat 用于将多维数组（嵌套数组）展平为一维数组。我们可以指定一个可选的参数，表示要展平的层级。
    const arr = [1, 2, [11, 22], [33, 44], [[55, 66, 77]], [33, 44]]
    let newArr = arr.flat(1)
    console.log(newArr) // [1, 2, 11, 22, 33, 44, Array(3), 33, 44]
    newArr = arr.flat(2)
    console.log(newArr) // [1, 2, 11, 22, 33, 44, 55, 66, 77, 33, 44]
  </script>
</body>
</html>
```

## 3.4 flatMap 方法

* 方法：首先对数组中的每个元素执行一个映射函数，然后将结果数组展平为一维数组。

```js
arr.flatMap<U, This = undefined> (
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
        thisArg?: This): U[]
```

> 注意：flatMap 方法结合了 map 方法和 flat 方法。



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* 数组中的每个元素映射到多个值 */
    const arr = ['Hello', 'World']
    let result = arr
        .map(x => x.split("")) // [['H', 'e', 'l', 'l', 'o'], ['W', 'o', 'r', 'l', 'd']]
        .flat(1) // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
    console.log(result)

    result = arr.flatMap(x => x.split(''))
    console.log(result) // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
  </script>
</body>
</html>
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    /* 从对象数组中提取特定属性值 */
    const arr = [
      {name: '张三', age: 18},
      {name: '李四', age: 19},
      {name: '王五', age: 20},
      {name: '赵六', age: 21},
    ]

    const nameArr = arr.flatMap(x => x.name)
    console.log(nameArr) // ['张三', '李四', '王五', '赵六']

  </script>
</body>
</html>
```



# 第四章：可选链（⭐）

## 4.1 概述

* 可选链运算符**（**`?.`）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.` 运算符的功能类似于 `.` 链式运算符，不同之处在于，在引用为空 `null`或者 `undefined` 的情况下不会引起错误，该表达式短路返回值是 `undefined`。与函数调用一起使用时，如果给定的函数不存在，则返回 `undefined`。
* 当尝试访问可能不存在的对象属性时，可选链运算符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链运算符也是很有帮助的。

## 4.2 应用示例

* 语法：

```js
obj.val?.prop
```

```js
obj.val?.[expr]
```

```js
obj.func?.(args)
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    const obj = {
      name: "张三",
      age: 18,
      friends: {
        name: "李四",
        age: 19,
        // running: function () {
        //   console.log(this.name + "正在跑~")
        // }
      }
    }

    obj?.friends?.running?.()

  </script>
</body>
</html>
```



# 第五章：类中的新成员（⭐）

## 5.1 概述

* 在 ES6+ 中，类（class）中新增了成员：
  * ① 实例公共属性。
  * ② 实例私有属性
  * ③  静态公共属性。
  * ④  静态私有属性。
  * ⑤ 静态代码块。
  * ……

## 5.2 应用示例

* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    class Person {
      // 静态属性
      static address = "中国"
      // 私有静态属性，只能类内部访问
      static #count = 0
      // 实例属性
      gender = "男"
      // 私有实例属性
      #score = 50

      // 构造器
      constructor(name, age) {
        this.name = name
        this.age = age
      }

      // 静态代码块
      static {
        console.log("静态代码块")
      }

      // 静态方法
      static method() {
        console.log("静态方法")
      }

      // 实例方法
      eating() {
        console.log(`${this.#score}`)
        console.log(`${this.name} 吃饭 ....${Person.#count}`)
      }
    }

    const p = new Person("张三", 18)
    p.eating()
    console.log(p.name)
    console.log(p.age)
    console.log(p.gender)
    console.log(Person.address)
    Person.method()


  </script>
</body>
</html>
```



* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Title</title>
</head>
<body>
  <script>
    class Person {
      #name
      #age

      constructor(name, age) {
        this.name = name
        this.age = age
      }

      getName() {
        return this.name
      }

      setName(name) {
        this.name = name
      }

      setAge(age) {
        this.age = age
      }

      getAge() {
        return this.age
      }
    }

    const p = new Person("许大仙", 18)
    console.log(p.getName())
    console.log(p.getAge())

  </script>
</body>
</html>
```

