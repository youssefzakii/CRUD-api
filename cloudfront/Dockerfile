FROM python:3.9-slim
COPY index.js .
COPY jq.js .
COPY index.html .
EXPOSE 9000
CMD ["python", "-m", "http.server", "9000"]
