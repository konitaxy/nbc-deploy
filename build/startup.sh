docker build -t backendnbc .
docker stop nbc1
docker rm nbc1
docker run -d -v ~/lognbc:/data/log  --network backend-network-nbc --restart always  --name nbc1 -p 10888:8888 backendnbc 
