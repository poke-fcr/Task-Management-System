Task Management System
Hosted https://task-management-system-2.web.app/

Project Setup
Node: 16+ required
Angular Cli 16+ required
npm i followed by npm run start or ng serve

Project Structure
Modules
    Dashboard (Summary of task with action buttons to edit, view and update)
    Status Update (Quick drag-drop functionality to update tast status)
    Task List Add Update (A reusable component to View, Create and Update task)

Services
    AppService (Common utilities functions)
    TaskManagementService (CRUD operation for tasks and state management)
    UserService (Fetch Users)

Project Features
    Pagination 
        The tasklist have pagination, user can view certain task at a time (all tasks are fetched on one call)
    Search/Filter Task
        A search bar provided to search tasks
    Sorting
        On click of column header, sorting can be applied Asc/Desc
    Lazy Loading
        All the modules are lazily loaded, optimizing the application
    Drag and Drop
        A simple drag drop functionality to quickly update status of a task
    Dark Mode
        Toggle provided at header to switch between light and dark theme
    Create, Edit, View and Delete Task
        Reactive form with validation to perform CRUD operations on ease
    Firebase integrated for hosting
        Hosting with firebase to access the website
    Responsive
        Angular material to provide responsiveness and good layout on web and mobile
    Error Handling
        User friendly messages displayed with help of anular material snackbar
    a


