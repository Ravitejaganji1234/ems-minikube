# Employee Management System (EMS) - Minikube Deployment

## 📌 Project Overview
This is the **Employee Management System (EMS)** deployed locally on **Minikube**.  
It demonstrates a **3-tier architecture** with:

- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database:** MySQL
- **Deployment:** Kubernetes on Minikube

This project highlights **local Kubernetes development, containerization, and orchestration**, providing hands-on experience before deploying to a cloud provider.

---

## 🏗️ Architecture
User
│
▼
Frontend (React.js) [LoadBalancer Service: 5173]
│
▼
Backend (Spring Boot) [LoadBalancer Service: 8081]
│
▼
Database (MySQL)
