import { http, HttpResponse } from 'msw'

const allEntries = [
    {
        id: '1',
        userId: 'xyz12',
        title: 'Entry 1',
        body: 'Body 1',
        createdAt: '2023-11-02 19:25:09.364',
    },
    {
        id: '2',
        userId: 'xyz12',
        title: 'Entry 2',
        body: 'Body 2',
        createdAt: '2023-10-02 19:25:09.364',
    },
    {
        id: '3',
        userId: 'xyz12',
        title: 'Entry 3',
        body: 'Body 3',
        createdAt: '2023-09-02 19:25:09.364',
    },
    {
        id: '4',
        userId: 'xyz12',
        title: 'Entry 4',
        body: 'Body 4',
        createdAt: '2022-11-02 19:25:09.364',
    },
]

export const handlers = [
    http.get(`/api/get-entries`, () => {
        return HttpResponse.json(allEntries)
    }),
]
