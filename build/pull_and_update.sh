#!/bin/bash

# 设置变量
REPO_DIR="/home/ubuntu/deploy/build"  # 替换为你的项目路径
BACKEND_DIR="$REPO_DIR/build"
STARTUP_SCRIPT="$BACKEND_DIR/startup.sh"

# 进入仓库目录
cd "$REPO_DIR" || { echo "无法进入目录: $REPO_DIR"; exit 1; }

# 拉取最新更改
git pull origin main  # 假设主分支是main, 如果不是请修改为你实际的分支名

# 检查是否pull成功
if [ $? -ne 0 ]; then
  echo "Git pull失败"
  exit 1
fi

# 获取更新状态
UPDATED=$(git status --porcelain | grep '^M' | grep 'build/' || true)

# 如果有更新则执行启动脚本
if [ -n "$UPDATED" ]; then
  echo "检测到backend文件夹有更新，正在执行startup.sh..."
  if [ -x "$STARTUP_SCRIPT" ]; then
    "$STARTUP_SCRIPT"
    if [ $? -eq 0 ]; then
      echo "startup.sh 执行成功。"
    else
      echo "startup.sh 执行失败。"
      exit 1
    fi
  else
    echo "找不到可执行的startup.sh脚本。"
    exit 1
  fi
else
  echo "没有检测到backend文件夹的更新。"
fi