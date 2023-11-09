<template>
  <section>
    <base-card> <!--Qui stiamo usando il componente base-card-->
      <!-- Siamo passando un corpo custom che viene preso dal tag slot che si trova dentro al template di base card-->
      <template #header>
        <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    
    </base-card>
   
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>