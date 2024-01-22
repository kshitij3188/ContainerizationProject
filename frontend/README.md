# Kube commands

microk8s enable metallb:10.50.100.5-10.50.100.25

## Deploy

### Frontend

```bash

cd frontend/k8s

docker pull caxolahop3/sc-frontend

microk8s kubectl apply -f deployment.yaml

microk8s kubectl apply -f service.yaml

microk8s kubectl apply -f nodeport.yaml

microk8s kubectl apply -f loadbalancer.yaml

microk8s kubectl apply -f ingress.yaml
```

Access it at: https://sc-frontend.com/


(ideally no port should be needed. But 80 or loadbalancer's port could be useful maybe?? idk)
For the ingress (service.yaml) to work locally without a proper DNS server
setup, you need to add the following to /etc/hosts:

```jsx
127.0.0.1 sc-frontend.com
127.0.0.1 sc-backend.com
```

(Documented on slide 53 of Lesson 3)

### DB

```bash
cd backend/k8s

microk8s kubectl apply -f db-deployment.yaml
microk8s kubectl apply -f db-service.yaml
```

### Backend

```bash
cd backend/k8s

docker pull caxolahop3/sc-backend

microk8s kubectl create deployment --image docker.io/caxolahop3/sc-backend:latest backend-deployment

microk8s kubectl apply -f service.yaml
```
