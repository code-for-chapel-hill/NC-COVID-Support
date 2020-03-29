<template>
<b-navbar toggleable="lg" type="dark" variant="info" id="topnav">
    <b-navbar-brand href="#">
        {{$t('title')}}
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <template v-slot:button-content>
                    <b-icon icon="gear-fill" aria-hidden="true" /> <span v-html="language" class="language" />
                </template>
                <b-dropdown-item href="#" v-for="item in languages" v-bind:key="item.iso">
                    <div v-html="item.name" @click="$emit('language-selected', item)">
                    </div>
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

    </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        language: String
    },
    data() {
        return {
            languages: [
                { name: 'English', iso: 'en' },
                { name: 'Espa&#241;ol', iso: 'es' },
                { name: 'Fran&#231;ais', iso: 'fr' },
                { name: '한국어', iso: 'ko' }
            ],
        }
    }
}
</script>

<style>
#topnav {
    position: absolute;
    width: 100%;
    z-index: 1200;
}

.navbar-brand {
    margin-right: 2px !important;
    font-size: 1rem !important;
}

.language {
    padding:0 5px;
}

@media (min-width: 768px) {
    .navbar-brand {
        margin-right: 2px !important;
        font-size: 1.25rem !important;
    }
}
</style>
