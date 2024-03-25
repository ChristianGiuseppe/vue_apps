<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="setStoredResButtonMode">Stored
            Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="setAddResButtonMode">Add Resource</base-button>
    </base-card>

    <!-- Con il keep aline salvo nella cache il componente e i dati non verranno persi-->
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>


<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource';
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        //con Vuex possiamo gestire questi elementi a livello globale
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide', title: 'Official Guide',
                    description: 'The Official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google', title: 'Google Guide',
                    description: 'Learn to Google',
                    link: 'https://google.com'
                }
            ]
        };
    },
    //in questo modo forniamo le risorse a tutti i layer inferiori
    // ma anche metodi
    //
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource,
        };
    },
    computed: {
        setStoredResButtonMode() {
            return this.selectedTab == 'stored-resources' ? null : "flat";
        },
        setAddResButtonMode() {
            return this.selectedTab == 'add-resource' ? null : "flat";
        }

    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                url: url
            };

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },

        removeResource(resId) {
            console.log("deleted");
            const index = this.storedResources.findIndex(
                res => res.id === resId
            );
            this.storedResources.splice(index, 1);
        }
    }

}
</script>