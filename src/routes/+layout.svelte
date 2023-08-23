<script>
    export let data
</script>

<div id="nav">
    <h1>fugbach</h1>
    <ul>

        <li class="noselect"><a href="/releases">releases</a></li>
        <li class="noselect"><a href="">konzerte</a></li>
        <li class="noselect">videos</li>
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

<slot/>

<style>
    #nav {
        width: 400px;
        height: 100vh;
        display: flex;
        position: absolute;
        flex-direction: column;
        border-width: 4px;
        border-right-style: solid;
    }
    #nav h1{
        margin: 20px 40px;
        cursor: none;
    }
    #nav ul {
        padding: 0;
        margin: 0;
    }
    #nav ul li {
        list-style: none;
        font-size: 15pt;
        letter-spacing: 0.5px;
        padding: 20px 40px;
        border-bottom-style: solid;
        font-weight: 700;
        text-transform: uppercase;
        transition: all 0.25s ease;
    }
    #nav ul li:hover {
        background-color: #000;
        color: #fff;
        cursor: crosshair;
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
</style>