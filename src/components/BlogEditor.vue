<template>
  <div>
    <h2>Blog Editor</h2>
    <input v-model="newBlog.title" placeholder="Title" />
    <input v-model="newBlog.id" placeholder="Blog id" />
    <input v-model="newBlog.author" placeholder="Author" />
    <textarea v-model="newBlog.content" placeholder="Content"></textarea>
    <button @click="addNewItem">Save</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newBlog = ref({
  title: "",
  id: "",
  author: "",
  content: "",
});

const emit = defineEmits(["addNewItem"]);

const addNewItem = () => {
  if (newBlog.value.title && newBlog.value.id) {
    emit("addNewItem", { ...newBlog.value });
    newBlog.value = { title: "", id: "", author: "", content: "" };
  }
};
</script>