import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3000/`
});

/**
  * Get User Infos
  * @param {string} id
  * @returns {object}
  */

export const getUserInfos = async (id) => {
    // try {
    //     const res = await api.get(`/user/${id}`);
    //     return res.data;
    // } catch(e) {
    //     console.log(e);
    // }
    await api.get(`/user/${id}`).then((res) => {
        //console.log(res.data)
        return res.data;
    }).catch(e => {
        console.log(e);
    });
};

/**
 * Retrieve user activity
 * @param {string} id 
 * @returns {Array}
 */
export const getUserActivity = async (id) => {
    // try {
    //     const res = await api.get(`/user/${id}/activity`);
    //     return res.data;
    // } catch(e) {
    //     console.log(e);
    // }
    await api.get(`/user/${id}/activity`).then((res) => {
        return res.data;
    }).catch(e => {
        console.log(e);
    });

}

/**
   * Get User Performance
   * @param {string} id
   * @returns {object}
   */

export const getUserPerformance = async (id) => {
    await api.get(`/user/${id}/performance`).then((res) => {
        return res.data;
    }).catch(e => {
        console.log(e);
    });
};

/**
   * Get User Average Session
   * @param {string} id
   * @returns {object}
   */

export const getUserAverageSessions = async (id) => {
    await api.get(`/user/${id}/average-sessions`).then((res) => {
        return res.data;
    }).catch(e => {
        console.log(e);
    });
}; 