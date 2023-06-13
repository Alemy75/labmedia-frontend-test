import axios from 'axios';

axios.defaults.baseURL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io';

export const userService = {
    async getAll(page, limit, sortby, order) {
        const { data } = await axios.get(`/users`, {
            params: {
                page,
                limit,
                sortby,
                order,
            },
        });
        return data;
    },
    async getPagesCount(limit) {
        const { data } = await axios.get(`/users`);
        const pagesCount =
            data.length % limit == 0
                ? data.length / limit
                : data.length / limit + 1;
        const pagesArray = Array.from(
            { length: pagesCount },
            (_, index) => index + 1
        );
        return pagesArray;
    },
};
