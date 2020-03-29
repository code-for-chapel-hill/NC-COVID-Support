<template>
    <div class="valuebox" :class="{'selected' : selected}" > <!-- @click="selected = !selected" -->
        <div class="number">{{value}}</div>
        <div class="title">{{title}}</div>
        <i class="fas" v-bind:class="icon"></i>
    </div>
</template>

<script>
    export default {
        name: 'ValueBox',
        data() {
            return {
                selected: false
            }
        },
        props: {
            title: { type: String },
            value: { type: Number },
            icon: { type: String }
        }
    };
</script>

<style>
    .valuebox {
        height: 50px;
        padding: 0 8px;
        margin: 4px 4px;
    }

   @media (min-width: 768px) {
        /* margin: 8px 4px; */
        .valuebox {
            height: 100px;
            padding: 20px;
        }
   }

    .number, .title {
        color: #fff;
        display: inline;
    }
    .title {
        margin-left: 8px;
    }
    .number {
        font-size: 2em;
    }
    .valuebox i.fas {
        font-size: 2em;
        opacity: 0.1;
        position: absolute;
        right: 13px;
        top: 13px;
    }
   @media (min-width: 768px) {
    .valuebox i.fas {
        font-size: 4.5em;
        right: 25px;
        top: 24px;
    }   
   }

    .valuebox.bg-blue {
        background-color: #63a2e7 !important;
    }
    .valuebox.bg-green {
        background-color: #75c759 !important;
    }    
    .valuebox.bg-green:hover {
        background-color: #52AA36 !important;
        cursor: pointer;
    }
    .valuebox.bg-blue:hover {
        background-color: #4189DA !important;
        cursor: pointer;
    }

    .valuebox.valuebox.selected i {
        opacity: 0.3;
    }
</style>
