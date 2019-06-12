## lerna

### 相关命令
1. `lerna init : 初始化`
2. `lerna add module --scope=moduleX [--dev]` : 为某 moduleX 安装 module
3. `lerna link` : 软连接相互依赖的模块

### 
```js
{
  "version": "1.1.3",
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"],
      "message": "chore(release): publish"
    },
    "bootstrap": {
      "ignore": "component-*",
      "npmClientArgs": ["--no-package-lock"]
    }
  },
  "packages": ["packages/*"]
}
```