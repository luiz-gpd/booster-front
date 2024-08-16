<template>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="primary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Docs</b-nav-item>
                <b-nav-item href="#">Components</b-nav-item>
                <b-nav-item href="#">Directives</b-nav-item>
                <b-nav-item href="#">Icons</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "TopBar",
};
</script>

<style>
.navbar {
    background-color: #044c28 !important; 
}
</style>