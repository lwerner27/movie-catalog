<template>
    <div>
        <nav>
            <div class="nav-wrapper container">
                <a href="/" class="brand-logo"><slot></slot></a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li v-if="status"><a href="/addmovie"><i class="large material-icons">cloud_upload</i></a></li>
                    <li><a href="/login"><i class="large material-icons">person</i></a></li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="/login"><i class="small material-icons">person</i>Login</a></li>
            <li v-if="status"><a href="/addmovie"><i class="small material-icons">cloud_upload</i>Upload</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        status: Boolean
    }
}
</script>
