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
        <a on:click={opener} class="navItem" href="/releases">releases</a>
        <a on:click={opener} class="navItem" href="/konzerte">konzerte</a>
        <a on:click={opener} class="navItem" href="/videos">videos</a>
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

<style>
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
    }
    #nav h1{
        padding: 20px 40px;
        width: 100%;
        margin: 0;
        /* cursor: none; */
        border-bottom-style: solid;
        font-family: 'Oswald', sans-serif;
        font-size: 4.5rem;
    }
    #nav ul {
        padding: 0;
        margin: 0;
    }
    .navItem {
        display: block;
        width: 100%;
        font-size: 15pt;
        letter-spacing: 0.5px;
        padding: 20px 40px;
        border-bottom-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        transition: all 0.25s ease;
        text-decoration: none;
        color: #000;
        font-family: 'Oswald', sans-serif;
        font-weight: 200;
        font-size: 1.9rem;
    }
    .navItem:hover {
        background-color: #000;
        color: #fff;
        cursor: crosshair;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 1rem;

    }
    #nav ul li a{ 
        color: #202020;
    }
    #nav ul li a:hover{ 
        color: #fff;
    }
    #nav ul li:first-child {
        border-top-style: solid;
    }
    #nav svg{
        padding: 20px;
        justify-self: flex-end;
        margin: auto;
        margin-bottom: 0;
        width: 100%;
        box-sizing: border-box;
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
        background-color: #000;
        position: absolute;
        top: 20px;
        right: 20px;
        border-style: none;
        box-sizing: border-box;
        transition: all 0.333s ease;
        mix-blend-mode: overlay;
        z-index: 4;
    }
    .bttnOpen{
        border-radius: 0;
        mix-blend-mode: normal;

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