docker build -t backend .
docker stop b1
docker rm b1
docker run -d -v ~/log:/data/log  --network backend-network --restart always  --name b1 -p 8888:8888 backend 
