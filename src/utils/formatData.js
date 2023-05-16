/**
 * Formats the user's activity data, replacing the date by by the number of the day
 * @function
 * @name formatActivity
 * @param {object} data user's activity data
 * @returns {Array}
 * @example
 * replace 2020-07-01 by 1
 * 
 * Input :
 * sessions: [
 *            {
 *               day: '2020-07-01',
 *               kilogram: 80,
 *               calories: 240
 *           }
 *           ...
 *          ]
 * Output :
 * sessions: [
 *            {
 *               day: '1',
 *               kilogram: 80,
 *               calories: 240
 *           }
 *           ...
 *          ]
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
 * @function
 * @name formatSession
 * @param {object} data user's sessions data
 * @returns {Array}
 * @example
 * replace 1 by L for 'Lundi' (Monday in English)
 * 
 * Input :
 * sessions: [
 *             {
 *                 day: 1,
 *                 sessionLength: 30
 *             },
 *             ...
 *           ]
 * Output :
 * sessions: [
 *            {
 *                day: 'L',
 *                sessionLength: 30
 *            },
 *            ...
 *           ]
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
 * @function
 * @name formatPerf
 * @param {object} data user's performance data
 * @returns {Array}
 * @example
 * replace 1 by Cardio 
 * 
 * Input :
 * data: [
 *             {
 *                 value: 80,
 *                 kind: 1
 *             },
 *             ...
 *           ]
 * Output :
 * data: [
 *            {
 *                value: 80,
 *                kind: 'Cardio'
 *            },
 *            ...
 *           ]
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
