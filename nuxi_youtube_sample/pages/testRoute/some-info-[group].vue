<script setup>
//http://localhost:3000/testRoute/some-info-1234
</script>

<template>
    <div>
        <h1>
            Some Info {{ $route.params.group }}
        </h1>
    </div>
</template>