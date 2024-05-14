<template>
  <div>asdasdasd</div>
</template>

<script setup>
  const script = document.createElement("script");
  script.src = "/view-image.min.js";
  script.onload = () => {
    window.ViewImage && window.ViewImage.init(".VPDoc img");
  };
  document.body.appendChild(script);
  console.log("ddd");
</script>
