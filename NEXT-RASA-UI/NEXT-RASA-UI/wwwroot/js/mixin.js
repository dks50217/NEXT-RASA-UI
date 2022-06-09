const mixin = {
    data: function () {
        return {
            
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        getJSON(file) {

            let fullpath = '../assets/json/' + file + '?' + version;

            const request = axios.get(fullpath)
                .then(res => res.data)
                .catch(err => console.log(err));

            return {
                load: request
            };
        },
        getVueComponents(file) {
            return httpVueLoader('../../assets/components/' + file + '.vue?' + version);
        }
    },
    mounted() {
        let _self = this;
        console.log("=========mixin mounted=========");
    },
}