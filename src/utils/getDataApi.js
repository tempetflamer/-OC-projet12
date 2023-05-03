import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:3000/`
});

/**
  * Get User Infos
  * @param {string} id
  * @returns {object}
  */

export const getUserInfos = async (id) => {
    try {
        const res = await api.get(`/user/${id}`);
        return res.data;
    } catch(e) {
        console.log(e);
    }
    // used when non async fonction 
    //     return await api.get(`/user/${id}`).then((res) => {
    //         console.log('axios', res.data)
    //         return res.data;
    //     }).catch(e => {
    //         console.log(e);
    //     });
};

export const getUserInfos2 = async (id) => {
    fetch(`http:/localhost:3000//user/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log('fetch', res.data)
            return res.data;
        })
        .catch(e => {
            console.log(e);
        });
};

/**
 * Retrieve user activity
 * @param {string} id 
 * @returns {Array}
 */
export const getUserActivity = async (id) => {
    try {
        const res = await api.get(`/user/${id}/activity`);
        return res.data;
    } catch(e) {
        console.log(e);
    }
    // await api.get(`/user/${id}/activity`).then((res) => {
    //     return res.data;
    // }).catch(e => {
    //     console.log(e);
    // });

}

/**
   * Get User Performance
   * @param {string} id
   * @returns {object}
   */

export const getUserPerformance = async (id) => {
    try {
        const res = await api.get(`/user/${id}/performance`);
        return res.data;
    } catch(e) {
        console.log(e);
    }
    // await api.get(`/user/${id}/performance`).then((res) => {
    //     return res.data;
    // }).catch(e => {
    //     console.log(e);
    // });
};

/**
   * Get User Average Session
   * @param {string} id
   * @returns {object}
   */

export const getUserAverageSessions = async (id) => {
    try {
        const res = await api.get(`/user/${id}/average-sessions`);
        return res.data;
    } catch(e) {
        console.log(e);
    }
    // await api.get(`/user/${id}/average-sessions`).then((res) => {
    //     return res.data;
    // }).catch(e => {
    //     console.log(e);
    // });
}; 