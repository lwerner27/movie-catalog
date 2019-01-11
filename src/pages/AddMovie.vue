<template>
    <div class="add-movie-page">
        <div class="container my-container">
            <div class="row">
                <div class="col s12 m6 offset-m3">
                    <h3>Add A Movie</h3>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6 offset-m3">
                    <input id="title" type="text" class="validate">
                    <label for="title">Title</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6 offset-m3">
                    <input id="stars" type="text" class="validate">
                    <label for="stars">Stars</label>
                    <span class="helper-text">Separate names with a comma.</span>
                </div>
                <div class="row">
                    <div class="input-field col s12 m6 offset-m3">
                        <input id="imdbLink" type="text" class="validate">
                        <label for="imdbLink">IMDb Link</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m6 offset-m3">
                        <input id="imgLink" type="text" class="validate">
                        <label for="imgLink">Image Link</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m6 offset-m3">
                        <textarea id="description" class="materialize-textarea"></textarea>
                        <label for="textarea1">Description</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6 offset-m3">
                        <form action="#">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input type="file">
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col 12 m6 offset-m3">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => (
        {
            movieTitle: "",
            movieStars: "",
            imdbLink: "",
            movieImg: "",
            movieDescription: ""
        }
    )
}
</script>

<style scoped>
    .my-container {
        padding-top: 50px;
    }
</style>

