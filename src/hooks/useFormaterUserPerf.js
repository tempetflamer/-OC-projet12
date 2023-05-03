import { getUserPerformance } from '../utils/getDataApi.js'

export function useFormaterUserPerf(id) {

    try {
        const res = getUserPerformance(id);
        const res2 = res.data.data.map(function (data) {
            switch(data.kind) {
                case 1:
                    console.log('entrée 1', data.kind)
                    return { ...data, kind: 'Cardio' }
                case 2:
                    return { ...data, kind: 'Énergie' }
                case 3:
                    return { ...data, kind: 'Endurance' }
                case 4:
                    return { ...data, kind: 'Force' }
                case 5:
                    return { ...data, kind: 'Vitesse' }
                case 6:
                    return { ...data, kind: 'Intensité' }
                default:
                    return { ...data }
            }
        })
        return res2.data;
    } catch(e) {
        console.log(e);
    }

}
