<script>
    $: menuOpen = false;

    function opener(){
        menuOpen = !menuOpen;
        console.log(menuOpen)
        window.scrollTo(0, 0);
    }

</script>


<div id="nav" class={menuOpen ? 'open' : 'close'}>
    <!-- <h1>fugbach</h1> -->
    <ul>
        <li><a on:click={opener} class="navItem" href="/releases">releases</a></li>
        <li><a on:click={opener} class="navItem" href="/konzerte">konzerte</a></li>
        <li><a on:click={opener} class="navItem" href="/videos">videos</a></li>
    </ul>
    
    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
        <g>
        <rect x="100" width="100" height="89"/>
        </g>
        <g>
        <rect x="100" y="105" width="100" height="49"/>
        </g>
        <g>
        <rect x="0" width="100" height="200"/>
        </g>
    </svg>
</div>
<button on:click={opener} class={menuOpen ? 'bttnOpen' : 'bttnClose'}></button>

<style lang="scss">
    #nav {
        height: 100vh;
        flex-direction: column;
        border-width: 4px;
        border-right-style: none;
        overflow: hidden;
        display: flex;
        position: absolute;
        background-color: #fff;
        transition: width 0.2s ease-out;
        transition-delay: 400ms;
    }
    #nav ul {
        padding: 0;
        margin: 0;
    }
    #nav ul li{
        height: 5rem;
        display: flex;
        align-items: center;
        border-bottom-style: solid;
    }
    #nav ul li:hover{
        background-color: #202020;

        a {
            color: #fafafa;
            font-weight: 800;
            letter-spacing: 3px;
        }
    }
    .navItem {
        display: block;
        width: 100%;
        padding-left: 2rem;
        height: fit-content;
        font-size: 15pt;
        letter-spacing: 0.5px;
        font-weight: 700;
        text-transform: uppercase;
        transition: all 0.25s ease;
        text-decoration: none;
        color: #000;
        font-family: 'Oswald', sans-serif;
        font-weight: 200;
        font-size: 1.9rem;
    }
    /* .navItem:hover {
        background-color: #000;
        color: #000;
        cursor: crosshair;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 1rem;

    } */
    #nav ul li a{ 
        color: #202020;
    }
    #nav ul li a:hover{ 
        /* color: ; */
    }
    #nav ul li:first-child {
        /* border-top-style: solid; */
    }
    #nav svg{
        padding: 20px;
        justify-self: flex-end;
        margin: auto;
        margin-bottom: 0;
        width: 100%;
        box-sizing: border-box;
        fill: #202020;
    }
    .open{
        width: 100vw;
    }
    .close{
        width: 0vw;
    }
    button{
        width: 40px;
        height: 40px;
        background-color: #202020;
        position: absolute;
        top: 20px;
        right: 20px;
        border-style: none;
        box-sizing: border-box;
        transition: all 0.333s ease;
        z-index: 5;
    }
    .bttnOpen{
        border-radius: 0;
    }
    .bttnClose{
        border-radius: 100%;
    }    

    @media screen and (min-width:800px){
        #nav{
            width: 400px;
            position: relative;
            border-right-style: solid;
        }
        button{
            display: none;
        }
    }
</style>