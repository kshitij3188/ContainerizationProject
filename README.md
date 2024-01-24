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


### Backend

```bash
cd backend/k8s

docker pull caxolahop3/sc-backend

microk8s kubectl apply -f backend-deployment.yaml

microk8s kubectl apply -f backend-service.yaml
```

### Database

```bash
cd backend/k8s

microk8s kubectl apply -f postgres-config.yaml

microk8s kubectl apply -f postgres-secret.yaml

microk8s kubectl apply -f postgres-storage.yaml

microk8s kubectl apply -f postgres-deployment.yaml

microk8s kubectl apply -f postgres-service.yaml
```

# TODO List

- [x] Choose Database (PostgreSQL)
- [x] Initiate middleware and REST API
- [x] Set up frontend
- [x] Dockerfile
- [x] YAML file
- [ ] UML Class diagram and Sequence Diagrams. 
- [ ] Transport level security
- [ ] Helm Chart
- [ ] Security - Network policies
- [ ] Security - RBAC
- [ ] Done with middleware
- [ ] Done with frontend
- [ ] Google Cloud Platform

## Application

### Class Diagram

![UML-cd](https://github.com/kshitij3188/ContainerizationProject/blob/main/demo/Class_Diagram.png)

### Sequence Diagram

![UML-sd](https://github.com/kshitij3188/ContainerizationProject/blob/main/demo/Sequence_Diagram.png)

---

## Prerequisites

1. `Docker`  installed
2. `microk8s` installed
