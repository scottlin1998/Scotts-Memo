[TOC]

# Scotts Memo v1 Documentation

> 阿耀笔记是一个数字化莱特纳盒子系统，可以有效的管理你的学习资料笔记等等文件，该系统同时遵循着艾宾浩斯遗忘曲线复习的规律，实际使用时会根据你对复习材料的掌握程度来规划一个科学的复习间隔帮助你去复习，从而达到一个高效学习的效果，个人因为自身学习迫切需要的原因而开发

## 文件树结构

> 这个是程序在此目录下初始化后会自动生成的一个#文件夹

### @EASY

> 该文件夹用于给文件标记简单

### @HARD

> 该文件夹用于给文件标记困难

### @DONE

> 该文件夹用于标记已掌握

### storage

> 该文件夹用于添加和管理文件，所有文件都在这里，只有在资源库存在的文件夹才会进行一级目录的检索

### data.db

> 该文件用于存储用户学习数据

### .env

> 该文件用于修改程序的配置

## 指令

> 可添加到环境变量中全局有效

### init

> 初始化文件夹结构

`$ memo init`

### run

> 执行一次查询

1. -s 启动论查服务模式
2. -d 深度文件夹模式

`$ memo run -s -d`

### mark

> 标记文件的状态

1. -d 掌握指令，标记文件或文件夹为掌握的状态，等同直接拖拽文件到@DONE
2. -e 简单指令，标记文件或文件夹为简单的状态，等同直接拖拽文件到@EASY
3. -h 困难指令，文标记文件或文件夹为困难的状态，等同直接拖拽文件到@HARD
4. -r 查看文件周期指令
5. -a 修改文件周期指令

`$ memo mark -d <path>`

### status

> 查看当前目录下的所有文件的添加状态

`$ memo status`

### add

> 添加文件或文件夹到library，等同直接添加文件到storage下面

`$ memo add <path>`