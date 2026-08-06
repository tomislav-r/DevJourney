<template>
  <form @submit.prevent="handleSubmit">
    <label for="projectName">Project Name:</label>
    <input id="projectName" v-model.trim="projectName" type="text" required />

    <label for="description">Description:</label>
    <textarea id="description" v-model.trim="description" required></textarea>

    <label for="status">Status:</label>
    <select id="status" v-model="status" required>
      <option value="">Select a status</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
      <option value="on-hold">On Hold</option>
    </select>
    <div class="submit">
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Creating project...' : 'Create Project' }}
      </button>
    </div>
  </form>
</template>

<script>
import { createProject } from '@/services/projectService'

export default {
  name: 'ProjectForm',

  emits: ['project-created'],

  data() {
    return {
      projectName: '',
      description: '',
      status: '',
      isLoading: false,
      errorMessage: '',
    }
  },

  methods: {
    async handleSubmit() {
      this.isLoading = true
      this.errorMessage = ''

      try {
        const newProject = await createProject(this.projectName, this.description, this.status)

        console.log('Created project:', newProject)

        this.$emit('project-created', newProject)

        this.projectName = ''
        this.description = ''
        this.status = ''
      } catch (error) {
        console.error('Error creating project:', error)
        this.errorMessage = 'Failed to create project. Please try again.'
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
