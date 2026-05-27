FROM ubuntu:latest

# 设置环境变量以避免交互式配置提示
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libopencv-dev   \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    make && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
# 将配置文件复制到容器中的 /etc/mpapi 目录

# 设置工作目录
WORKDIR /data
COPY server /data/
COPY config_pro.yaml /data/
COPY resource /data/resource

# 运行 mpapi 命令
CMD ["./server", "-c", "config_pro.yaml"]
