
export default {
    methods: {
        getUrl(picture) {
            return require('../assets/' + picture)
        },
        getUrlIcons(picture) {
            return require('../assets/icons/' + picture)
        },

        getUrlMan(picture) {
            return require('../assets/man/' + picture)
        },

        getUrlPictures(picture) {
            return require('../assets/picture/' + picture)
        },

        focusTrue() {
            this.focusParam = true;
        },
        focusFalse() {
            this.focusParam = false;
        }
    }
}