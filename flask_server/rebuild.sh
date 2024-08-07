cd ..
docker-compose down
cd flask_server
docker build -t zerocost-flaskserver .
docker-compose up --remove-orphans
