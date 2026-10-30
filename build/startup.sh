docker build -t backend .
docker stop nbc
docker rm nbc
docker run -d -v ~/lognbc:/data/log  --network backend-network-nbc --restart always  --name nbc1 -p 10888:8888 backend 
