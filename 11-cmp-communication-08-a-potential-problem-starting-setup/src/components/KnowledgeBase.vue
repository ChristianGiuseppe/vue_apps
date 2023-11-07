<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- @select-topic="$emit('select-topic', $event)" in questo caso  abbiamo rimosso  la funzione che viene passata ai figli per evitare proprio questo passaggio e utilizzare i provider e inject -->
    <knowledge-grid ></knowledge-grid>
  </section>
</template>

<script>
export default {
  // in questo caso abbiamo commenetao per evitare i passare in continuazione i parametri innestati tra i vari figli
  // props: ['topics'],

  //in questo caso stiamo recuperando i dati che sono stati forniti dal padre per poi riutilizzarli in questa parte specifica
  //inject: ['topics'],
  // emits: ['select-topic'],
};
</script>