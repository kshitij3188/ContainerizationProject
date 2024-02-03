# Kshitij

1) Build and push to registry
```docker buildx build -f frontend.dockerfile --platform linux/amd64 -t caxolahop3/sc-frontend-v2 . --push```

microk8s kubectl get all

2) Install using Helm
```microk8s helm3 install k8app k8s-microk8s-chart/```

3) Show pod running
```microk8s kubectl get all```

4) Scale Frontend Application
microk8s kubectl scale --replicas=9 deployment k8app-frontend

6) Uninstall application
```microk8s helm3 uninstall k8app```

# Yan

1) Roles
```microk8s kubectl auth can-i get secrets --namespace default --as user_security```

```microk8s kubectl auth can-i get pods --namespace default --as user_security```

2) Network Policies 
```microk8s kubectl get networkpolicy```

# Pooja


<!-- Show how you re-build the application after a source code change (1 point). Show how you upgrade the running application in two ways: deployment rollout (2 points) -->


1) ```cd frontend```

2) Re-deploy changes
```docker buildx build -f frontend.dockerfile --platform linux/amd64 -t caxolahop3/sc-frontend-v2 . --push```


3) Upgrade application
```microk8s helm3 upgrade k8app k8s-microk8s-chart/```

4) Rollout
microk8s kubectl apply -f frontend-deployment.yml

microk8s kubectl describe deployment.apps/k8app-frontend
microk8s kubectl get rs -o wide

microk8s kubectl rollout status deployment/k8app-frontend
microk8s kubectl rollout history deployments

microk8s kubectl describe deployment.apps/k8app-frontend

microk8s kubectl rollout undo deployment/k8app-frontend --to-revision=1
