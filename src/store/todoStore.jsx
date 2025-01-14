import { create } from 'zustand';

const useTodoStore = create((set) => ({
  tasks: [
    { id: 1, text: "Review project proposal", completed: false },
    { id: 2, text: "Team sync meeting", completed: true },
    { id: 3, text: "Update documentation", completed: false },
  ],
  activeUsers: [
    { id: 1, name: 'Anonymous', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Naresh', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Suraj Kushwaha', avatar: '/api/placeholder/32/32' },
  ],
  
  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text, completed: false }]
  })),
  
  toggleTask: (taskId) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  })),
  
  deleteTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== taskId)
  })),
}));

export default useTodoStore;