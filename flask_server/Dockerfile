FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8013
EXPOSE 8014

CMD service docker start 
CMD [ "python", "./app.py" ]
