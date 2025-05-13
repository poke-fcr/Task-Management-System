export interface Task {
    taskName: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Pending' | 'In Progress' | 'Completed';
    assignedTo: string;
    dueDate: string;
  }
  