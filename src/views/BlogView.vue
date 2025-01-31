<template>
  <div>
    <button @click="showEditor = !showEditor">
      {{ showEditor ? "Cancel" : "Add new blog" }}
    </button>
    <BlogEditor v-if="showEditor" @addNewItem="addItem" />
    <Blogs :blogs="blogs" :isLoading="isLoading" :error="error" @deleteBlog="deleteItem" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import useBlogs from "../composables/useBlogs";
import BlogEditor from "../components/BlogEditor.vue";
import Blogs from "../components/Blogs.vue";

const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();
const showEditor = ref(false);
</script>