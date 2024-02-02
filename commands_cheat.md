# Kshitij

1) Build and push to registry
```docker buildx build -f frontend.dockerfile --platform linux/amd64 -t caxolahop3/sc-frontend-v2 . --push```

microk8s kubectl get all

2) Install using Helm
```microk8s helm3 install k8app k8s-microk8s-chart/```

3) Show pod running
microk8s kubectl get all


6) Uninstall application
microk8s helm3 uninstall k8app

# Yan
1) Roles
microk8s kubectl auth can-i get secrets --namespace default --as user_security

microk8s kubectl auth can-i get pods --namespace default --as user_security

2) Network Policies 
microk8s kubectl get networkpolicy
