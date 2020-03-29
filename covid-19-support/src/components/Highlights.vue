<template>
    <div class="row highlights">
        <div class="col-6 col-md-3 order-md-1">                    
            <value-box :icon="valueBoxes[0].icon" :title="valueBoxes[0].title" :value="valueBoxes[0].value" class="bg-blue"/>
        </div>
        <div class="col-6 col-md-3 order-md-2">                    
            <value-box :icon="valueBoxes[1].icon" :title="valueBoxes[1].title" :value="valueBoxes[1].value" class="bg-green"/>
        </div>
        <div class="col-6 col-md-3 order-md-4">                    
            <value-box :icon="valueBoxes[2].icon" :title="valueBoxes[2].title" :value="valueBoxes[2].value" class="bg-green"/> 
        </div>
        <div class="col-6 col-md-3 order-md-3">              
            <value-box :icon="valueBoxes[3].icon" :title="valueBoxes[3].title" :value="valueBoxes[3].value" class="bg-blue"/>
        </div>
    </div>
</template>

<script>
    import ValueBox from "./ValueBox.vue";

    export default {
        name: 'Highlights',
        props: {
            valueBoxes: {valArr: [
                { icon: String, title: String, value: Number, color: String }
            ]}
        },
        components: {
            ValueBox
        }
    };
</script>

<style>
    .highlights {
        margin: 4px !important;
        transition: height .25s ease-out;
        height:116px;
    }

    .highlights div.col-md-3 {
        padding:0 !important;
    }    

    @media (min-width: 768px) {
        .highlights {
            height: 108px;
        }
    }

</style>
