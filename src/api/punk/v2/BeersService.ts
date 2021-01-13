import api from '../../api_punk';

class BeersService {
    public static search(
        {abv_gt, abv_lt, ibu_gt, ibu_lt, ebc_gt, ebc_lt, beer_name, yeast, brewed_before, brewed_after, hops, malt, food, ids} :
            {
                abv_gt : number, abv_lt : number, ibu_gt : number,
                ibu_lt : number, ebc_gt : number, ebc_lt : number, beer_name : string, yeast : string,
                brewed_before : string, brewed_after : string, hops : string, malt : string, food : string, ids : string}) {
        return api.get('/v2/beers', {
            params: {
                abv_gt: abv_gt,
                abv_lt: abv_lt,
                ibu_gt: ibu_gt,
                ibu_lt: ibu_lt,
                ebc_gt: ebc_gt,
                ebc_lt: ebc_lt,
                beer_name: beer_name,
                yeast: yeast,
                brewed_before: brewed_before,
                brewed_after: brewed_after,
                hops: hops,
                malt: malt,
                food: food,
                ids: ids
            }
        })
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            });
    }

    public static show({id} : {id: number}) {
        return api.get('/v2/beers/'+id)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            });
    }

    public static random() {
        return api.get('/v2/beers/random')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                return response;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            });
    }
}

export default BeersService;