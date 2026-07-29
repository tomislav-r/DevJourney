<template>
  <div class="backdrop">
    <div class="taskcard">
      <h1>Task Title</h1>
      <p>Task content</p>
    </div>
  </div>
</template>

<style scoped>
.taskcard {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.taskcard h1 {
  color: aqua;
  border: none;
  padding: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
