# Chalk

easily use styles in terminal.

## Install

```sh
npm install @xumeng03/chalk
```

## Usage

```typescript
import chalk from '@xumeng03/chalk';

console.log(chalk.color("blue").bgColor("skyblue").style("bold", "hello chalk!"));
console.log(chalk.color("red").bgColor("pink").style("bold").build("hello chalk!"));
```

## References

- https://github.com/chalk/chalk
- https://juejin.cn/post/7195945834093314105#heading-4
- https://zh.wikipedia.org/wiki/ANSI%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97
