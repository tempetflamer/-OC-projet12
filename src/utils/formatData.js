/**
 * Formats the user's activity data, replacing the date by by the number of the day
 * e.g. 2020-07-01 by 1
 * @param {object} data 
 * @returns {Array}
 */
export const formatActivity = (data) => {
    return data.sessions.map(function (data) {
        let splitDays = data.day.split('-').pop()
        if(splitDays.charAt(0) === '0') {
            splitDays = splitDays.substring(1)
        }
        return { ...data, day: splitDays }
    })
}

/**
 * Formats the user's session data, replacing the day number with the first letter of the day
 * e.g. 1 by L for 'Lundi' (Monday in English)
 * @param {object} data 
 * @returns {Array}
 */
export const formatSession = (data) => {
    return data.sessions.map(function (session) {
        switch(session.day) {
            case 1:
                return { ...session, day: 'L' }
            case 2:
                return { ...session, day: 'M' }
            case 3:
                return { ...session, day: 'M' }
            case 4:
                return { ...session, day: 'J' }
            case 5:
                return { ...session, day: 'V' }
            case 6:
                return { ...session, day: 'S' }
            case 7:
                return { ...session, day: 'D' }
            default:
                return { ...session }
        }
    })
}

/**
 * Format the user's performance data, replace the category number with the category
 * e.g. 1 by Cardio 
 * @param {object} data 
 * @returns {Array}
 */
export const formatPerf = (data) => {
    return data.data.map((data) => {
        switch(data.kind) {
            case 1:
                return { ...data, kind: 'Cardio' }
            case 2:
                return { ...data, kind: 'Energie' }
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
}
