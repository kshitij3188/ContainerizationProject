# Kubernetes Application

Simple containerized application with Kubernetes.
This is a **BucketList application** which has **backend, frontend and database** deployed using Kubernetes.

This example can be deployed in microk8s.

### Project structure
1) MicroK8s version located in `k8s-microk8s` folder
3) Helm charts are located in  `k8s-microk8s-chart` folder
## Kubernetes

### Class Diagram

![UML-cd](https://github.com/kshitij3188/ContainerizationProject/blob/main/demo/Class%20Diagram.png)

### Sequence Diagram

![UML-sd](https://github.com/kshitij3188/ContainerizationProject/blob/main/demo/Sequence%20Diagram.png)

This section provides information on the location and purpose of Kubernetes-related files.

### `k8-microk8s/` folder

The `k8-specs/` folder contains artifacts for creating Kubernetes objects using the command kubectl apply -f k8-specs.
It is important to note that Minikube in macOS does not currently support DNS resolution, so it is strongly recommended
to use Microk8s instead.

### `k8app-charts/` folder

The `k8app-charts/` folder contains artifacts to assist in the creation of Helm charts using the command helm install
k8app ./k8app-chart. These artifacts will help to streamline the deployment process for your Kubernetes application.

### Roles

We defined the following roles:

- Developer
    - Can fully manage configmaps, services, pods, and secrets in the default namepsace
    - Test commands:
        - ```kubectl auth can-i list pod --namespace default --as user_developer```
            - Expected answer is ```yes```
        - ```kubectl auth can-i list deploy --namespace default --as user_developer```
            - Expected answer is ```no```
- Devops
    - Can fully manage ingress, deployments, cert-manager, replicaset, and secrets in the default namepsace
    - Test commands:
        - ```kubectl auth can-i list deploy --namespace default --as user_devops```
            - Expected answer is ```yes```
        - ```kubectl auth can-i list pod --namespace default --as user_devops```
            - Expected answer is ```no```
- Security
    - Can fully manage configmaps and secrets in all namespaces
    - Test commands:
        - ```kubectl auth can-i list secrets --namespace default --as user_security```
            - Expected answer is ```yes```
        - ```kubectl auth can-i list deploy --namespace default --as user_security```
            - Expected answer is ```no```

## Setup using microk8s

### Local DNS settings

In order to ensure that the application works on local version it is necessary to add the following lines to your
/etc/hosts file (or equivalent on a non Linux based OS):

```
127.0.0.1 k8app.com
127.0.0.1 backend.k8app.com
```

1) Enable dns: ```microk8s enable dns```
2) Enable cert-manager: ```microk8s enable cert-manager```
3) Enable ingress: ```microk8s enable ingress```
4) Enable ha-cluster: ```microk8s enable ha-cluster```
5) Enable observability: ```microk8s enable observability```
6) Enable rbac: ```microk8s enable rbac```
7) You then have two choices for deploying the application, either using K8s directly or using helm
    1) **Using K8s directly:** Navigate to ```k8s-microk8s``` folder and run:
        - ```microk8s kubectl apply -f .``` to install the application
        - ```microk8s kubectl delete -f .``` to uninstall the application
        - ```microk8s kubectl apply -f .``` to upgrade the application, when there is a change that can take effect, it
          will.
    1) **Using helm:** Navigate to the root folder of this repository:
        - ```microk8s helm3 install k8app k8s-microk8s-chart/``` to install the application
        - ```microk8s helm3 uninstall k8app``` to uninstall the application
        - ```microk8s helm3 upgrade k8app k8s-microk8s-chart/``` to upgrade the application, when there is a change that
          can take effect, it will.

8) Follow https://backend.k8app.com for backend and https://k8app.com for frontend

*Note*: Due to the fact that we are using a wildcard certificate from a self-created certificate authority, it is
necessary to navigate to the backend first and trust the certificate there before going to the frontend. If this is not
done the frontend will appear empty until you trust the certificate from the backend.

### How to make a rollout

- Make a change in your deployment file (Change the image tag or the limits)
- Create configmaps.
- Execute `kubectl apply -f [FILE_NAME]`
- Validate rollout satus with `kubectl rollout status deployment/[DEPLOYMENT_NAME]`
- Get rollout history with `kubectl rollout history deployment/[DEPLOYMENT_NAME]`
- Go back to a specific revosion `kubectl rollout undo deployment/[DEPLOYMENT_NAME] --to-revision=1`

### How to make a canary deployment

- Execute `microk8s kubectl apply -f k8s-microk8s/frontend-deployment-canary-v1.yml`
- Execute `microk8s kubectl apply -f k8s-microk8s/frontend-deployment-canary-v2.yml`
- Scale down v1 `microk8s kubectl scale --replicas=9 k8app-frontend-v1`
- Delete deployment v1 `kubectl delete -f k8s-microk8s/frontend-deployment-canary-v1.yml`

## Docker:

### Docker Compose:

For convenience of performing builds and making very first test runs, we also created docker-compose file that make use
of 2 custom images and a Postgres database.

To run our docker-compose implementation:

1) Go inside k8app (root project) folder
2) Run ```docker-compose up```
3) Navigate to **frontend** http://localhost:5000/
4) Navigate to **backend** http://localhost:8080/
5) Check out main page and visit http://localhost:8080/api/docs to play with API
6) If you wish you can connect to PostgresDB (find credentials in .env file) to investigate the items table and data
   stored on it.

To perform an image build run: ```docker-compose build```. Note that you can adjust image names in `.env` file in root
project folder.

## Technologies stack

To get more details about implementation of each module consult `backend/` and `frontend/` folders

### Backend

Backend is built using _Python_ and _FastAPI_ framework.

### Frontend

Frontend is built using _React_. For production on top of `yarm` build a nginx image is used on top. For development,
it can be run with either `yarm` or `npm run`.

### Database

Postgres is used as primary data store. Credentials for Docker-compose version can be found in `.env` file. Credentials
for `Microk8s` version can be found in corresponding `ConfigMaps` and `Secrets`.
