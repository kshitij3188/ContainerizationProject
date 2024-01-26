FROM --platform=$BUILDPLATFORM flyingjoe/uvicorn-gunicorn-fastapi

WORKDIR /app/

# Install dependencies
COPY ./app/requirements.txt /app/

ARG TARGETPLATFORM

# RUN bash -c "ls"
RUN bash -c "pip install -r ./requirements.txt"

EXPOSE 80

COPY ./app /app
ENV PYTHONPATH=/app
