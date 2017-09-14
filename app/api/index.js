import axios from 'axios';
import AppConfig from 'AppConfig';

export let getArticlesPerPage = (page = 1) => {
    return new Promise(function (resolve, reject) {
            axios.get(AppConfig.app.url, {
                params: {
                    'api-key': AppConfig.app.key,
                    'fl' : 'snippet,headline,web_url,_id,pub_date',
                    'page': page
                }
            }).then(function (response) {
                if (response.status === 200) {
                    resolve(response.data.response.docs);
                }
                resolve(response);
            }).catch(function (error) {
                console.error(error);
            });
        }
    )

};
