docker build -t backend .
docker stop nbc
docker rm nbc
docker run -d -v /data/log:/data/log  --network backend --restart always  --name nbc -p 8888:8888 backend 
