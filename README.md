# 📝 Task Management System

A responsive and feature-rich task management web application built using **Angular 16+** and **Angular Material**, with Firebase integration for hosting. Designed to efficiently manage and track tasks with support for mobile and desktop views.

**Live Demo**: https://task-management-system-2.web.app/

---

## 🚀 Features

### ✅ Core Functionality
- **Create, Edit, View, and Delete Tasks**
  - Use of Angular Reactive Forms with validations
- **Task Summary Dashboard**
  - Overview with action buttons for quick management
- **Status Update via Drag & Drop**
  - Kanban-style board to visually manage task progress
- **Pagination, Search, and Sorting**
  - Efficiently navigate, filter, and sort task records

### 🎨 UI/UX Enhancements
- **Responsive Design**
  - Mobile-friendly with dynamic layout using Angular Material
- **Dark Mode Toggle**
  - Easily switch between Light and Dark themes via toolbar
- **Snackbar Notifications**
  - User-friendly alerts on actions like add, update, and delete

### 🧩 Modular Architecture
- **Lazy Loading**
  - All modules are lazily loaded for better performance
- **Reusable Components**
  - `TaskListAddEditComponent` used for Add, Edit, and View modes

### 🔐 State & Data Management
- **RxJS with BehaviorSubject**
  - Used to manage and stream task data
- **Users and Tasks Fetched from JSON**
  - Local JSON used for demo; easily pluggable with APIs

### 🌐 Hosting & Deployment
- **Firebase Hosting**
  - Deployed with Firebase for fast and secure access

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── header/           --> Application Header
|   |   └──pageNotFound       --> For Invaid Routes
│   ├── modules/
│   │   ├── dashboard/        --> Summary with action buttons
│   │   ├── status-update/    --> Drag & drop task status view
│   │   └── task-detail/      --> View, Add, Edit task form
│   ├── services/
│   │   ├── app.service.ts    --> Dark mode, mobile detection
│   │   ├── task-management.service.ts --> Task CRUD & state
│   │   └── user.service.ts   --> User list management
│   └── interface/
│       └── taskList.ts       --> Task interface
```

---

## 🧪 Running Tests & Code Coverage

### Unit Tests

To run unit tests:

```bash
ng test
```

If `karma.conf.js` is missing or browser config is failing (e.g., Chrome not installed), [follow this guide](https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md) to configure Karma properly and/or use Microsoft Edge:

```bash
# Create karma.conf.js (if not already present)
ng generate config karma

# Install Edge launcher
npm install karma-edge-launcher --save-dev
```

Set browser to `Edge` in `karma.conf.js`:
```js
browsers: ['Edge']
```

### Code Coverage

To generate a coverage report:

```bash
ng test --code-coverage
```

Then open the report:

```bash
npx http-server coverage/<project-name>/
# or simply open coverage/index.html in your browser
```

---

## ⚙️ Setup Instructions

### Requirements

- **Node.js** v16+
- **Angular CLI** v16+
- **Firebase CLI** (for deployment)

### Installation

```bash
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
npm install
npm run start
# or
ng serve
```

---

## 🧑‍💻 Developer Info

| Role        | Name                |
|-------------|---------------------|
| Developer   | Vishal Jain         |
| Tech Stack  | Angular, Firebase, Angular Material, RxJS |

---

## 🌐 Firebase Deployment

To deploy the app to Firebase:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Deploy
ng build --configuration production
firebase deploy
```

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/122dc527-3664-4d74-89f5-8454956a7c24)
![image](https://github.com/user-attachments/assets/9f0dbeaf-ebdc-4cdb-ac29-aea109bca497)
![image](https://github.com/user-attachments/assets/600b9ac9-bc0f-4c72-b7d1-e4e36dd8c18f)
![image](https://github.com/user-attachments/assets/482792b7-17a7-4776-ab0b-083613ae2cf9)
![image](https://github.com/user-attachments/assets/33d01cd1-5e0a-4852-a563-2a7737eca4cc)


