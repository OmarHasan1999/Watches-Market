<template>
    <div class="notFound">
        <h3>Page Not Found ...</h3>
        <router-link class="notFoundButton" to="/">Back To Home Page</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .notFound{
        display: flex;
        justify-content: center;
        background-color: wheat;
        color: rgba(0, 0, 0, 0.648);
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
    .notFound h3{
        margin-top: -30vh;
    }
    .notFoundButton{
        text-decoration: none;
        margin-top: 2vh;
        border: 1px solid rebeccapurple;
        border-radius: 6px;
        padding: 10px 15px;
        background-color: #fff;
        font-weight: 600;
    }
</style>