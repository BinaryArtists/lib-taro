# lib-taro

【临时性】基于taro的可复用库，当前只能利用git-submodule方式集成到项目。

## 结构

* annotations 注解
  - 试验中
* components 公用组件
  - 可授权按钮
  - banner位
  - 可授权按钮（需优化）
  - 样式按钮
* constants 公用常量
  - 角色
* layers 配置约定层
  - 接口配置
  - 缓存配置
  - HTTP配置
  - 网络配置（要优化）
  - 用户态配置
* sdk
  - 授权封装
  - 缓存封装
  - 图片封装
  - 加载封装
  - 导航
  - 刷新
  - 提示
* services 服务层
  - 渠道服务
  - http服务
  - 日志服务
  - 用户服务
  - 版本服务
* stores 公用store
  - 图片选择store
* styles 公用样式
  - 试验中
* types 公用类型定义
  - 试验中
* utils 工具类 （ 应该 放在 jx-util ）
  - 