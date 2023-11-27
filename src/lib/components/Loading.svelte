<script>
    import {loading} from '$lib/loading'
</script>

{#if $loading}
    <div id="test"/>
{/if}

<style>
    div{
        position: absolute;
        background-color: black;
        width: 50px;
        height: 10px;
        z-index: 100;
        inset: 0;
        margin: auto;
        -webkit-animation:spin 2s linear infinite;
        -moz-animation:spin 2s linear infinite;
        animation:spin 2s linear infinite;
    }
    @-moz-keyframes spin { 
        100% { -moz-transform: rotate(360deg); } 
    }
    @-webkit-keyframes spin { 
        100% { -webkit-transform: rotate(360deg); } 
    }
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
</style>