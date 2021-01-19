<template>
    <div class="toast-wrap" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message, delay = 2000){
            this.message = message;
            this.isShow = true;

            setTimeout(() => {
                this.isShow = false;
                this.message = '';
            }, delay)
        }
    }
}
</script>

<style scoped>
    .toast-wrap {
        /* display: f; */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0 , 0.6);
        color: rgb(223, 219, 219);
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>