import axios from 'axios';

class AntelopesService {
    async getAntelopes() {
        try {
            const antelopes = await axios.get('https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json');
            return antelopes.data;
        } catch (err) {
            console.log(err);
            return err;
        }   
    }
}

export default new AntelopesService();