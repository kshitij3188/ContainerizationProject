# Kube commands
## Deploy

### Frontend

```jsx

cd frontend/k8s

docker pull caxolahop3/sc-frontend

microk8s kubectl create deployment --image docker.io/caxolahop3/sc-frontend:latest

microk8s kubectl apply -f service.yaml
```

### DB

```jsx
cd backend/k8s

microk8s kubectl apply -f db-deployment.yaml
microk8s kubectl apply -f db-service.yaml
```

### Backend

```jsx
cd backend/k8s

docker pull caxolahop3/sc-backend

microk8s kubectl create deployment --image docker.io/caxolahop3/sc-backend:latest backend-deployment

microk8s kubectl apply -f service.yaml
```