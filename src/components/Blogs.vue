<template>
  <div>
    <h2>Blogs</h2>
    <input v-model="searchTerm" placeholder="Search..." />
    <fieldset>
      <label>
        <input type="checkbox" v-model="filters" value="title" />
        By Title
      </label>
      <label>
        <input type="checkbox" v-model="filters" value="content" />
        By Content
      </label>
    </fieldset>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-for="blog in filteredItems" :key="blog.id">
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
        <button @click="deleteBlog(blog.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import useSearch from "../composables/useSearch";

const props = defineProps(["blogs", "isLoading", "error", "deleteBlog"]);
const emit = defineEmits(["deleteBlog"]);

const { searchTerm, filters, filteredItems } = useSearch(props.blogs);
</script>