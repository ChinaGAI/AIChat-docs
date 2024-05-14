<script setup>
  import DefaultTheme from "vitepress/theme";
  const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-before> My cust1om sidebar top content </template>
    <template #doc-bottom> My custom sidebar top content </template>
    <template #layout-bottom> My custom sidebar top content </template>
  </Layout>
</template>
