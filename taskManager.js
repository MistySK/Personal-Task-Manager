document.addEventListener('alpine:init', () => {
    Alpine.data('taskManager', () => ({
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      filter: 'all',
      title: '',
      description: '',
      addTask() {
        this.tasks.push({
          id: Date.now(),
          title: this.title,
          description: this.description,
          completed: false,
        });
        this.saveTasks();
        this.title = '';
        this.description = '';
      },
      editTask(task) {
        // Add your edit task logic here
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      },
      saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },
      get filteredTasks() {
        return this.filter === 'all'
          ? this.tasks
          : this.filter === 'active'
          ? this.tasks.filter((task) => !task.completed)
          : this.tasks.filter((task) => task.completed);
      },
    }));
  });
  