const mockData = {
  authResponse: {
    success: true,
    status: 200,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZha3VubGVzYW11ZWxAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWQiOiI2YmY1NDg3My02MDMzLTRhYjAtODU1ZC0zMzZhMzRlMWRmYmMiLCJpYXQiOjE1NDEwNDUxODg3NzF9.LzZLq7uO4BO9yxe39lJVsesIPGYBug2DpYAWB8JYvO0',
    data: {
      fullName: 'Fakunle Mayowa Samuel',
      email: 'fakunlesamuel@gmail.com',
      role: 'Admin'
    }
  },
  success: true,
  status: 200,
  total: '16',
  data: [
    {
      id: 16,
      title: 'Who am I',
      description: 'Who am I Who am I Who am I Who am I Who am I',
      comment: null,
      date: '2018-10-31T13:07:52.125Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 15,
      title: 'Imela Frank E',
      description: 'Imela Frank E Imela Frank E Imela Frank E Imela Frank E Imela Frank E Imela Frank E Imela Frank E',
      comment: null,
      date: '2018-10-31T13:06:23.714Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 14,
      title: 'New Request New',
      description: 'New Request New New Request New New Request New New Request New New Request New New Request New New Request New',
      comment: null,
      date: '2018-10-31T13:03:37.098Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 13,
      title: 'New York Times pa',
      description: 'New York Times New York Times New York Times New York Times',
      comment: null,
      date: '2018-10-31T12:53:59.199Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 12,
      title: 'New York Times friday',
      description: 'New York Times New York Times New York Times New York Times New York Times New York Times',
      comment: null,
      date: '2018-10-31T12:52:07.083Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 11,
      title: 'New Request esm',
      description: 'New Request esm New Request esm New Request esm New Request esm New Request esm New Request esm',
      comment: null,
      date: '2018-10-31T12:44:17.617Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 10,
      title: 'New York Times 7',
      description: 'New York Times New York Times New York Times New York Times New York Times New York Times New York Times New York Times New York Times',
      comment: null,
      date: '2018-10-31T12:41:25.920Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 9,
      title: 'Oluwa mi',
      description: 'Oluwa miOluwa miOluwa miOluwa miOluwa miOluwa miOluwa miOluwa miOluwa mi',
      comment: null,
      date: '2018-10-31T12:40:28.382Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 8,
      title: 'New York Times44',
      description: 'showRequestForm New York Times44 showRequestForm New York Times44 showRequestForm New York Times44 showRequestForm New York Times44',
      comment: null,
      date: '2018-10-31T12:27:36.724Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 7,
      title: 'New York Times 2',
      description: 'New York Times New York Times New York Times',
      comment: null,
      date: '2018-10-31T12:25:34.133Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 6,
      title: 'New York Times',
      description: 'New York Times New York Times New York Times New York Times New York Times',
      comment: null,
      date: '2018-10-31T12:24:26.675Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 5,
      title: 'Office Chairs Are All squeaky',
      description: 'All the Office Chairs Are squeaky in my office and one is broken. When will it be fixed and repaired. It is very important.',
      comment: null,
      date: '2018-05-24T23:00:00.000Z',
      status: 'New',
      userid: '1e8a9783-40a7-453b-b3c3-9f5c8bab7988'
    },
    {
      id: 4,
      title: 'Office Printer Not Working',
      description: 'One of the Office Printers in my office is broken. When will it be fixed and repaired. It is very important.',
      comment: null,
      date: '2018-04-23T23:00:00.000Z',
      status: 'New',
      userid: '1e8a9783-40a7-453b-b3c3-9f5c8bab7988'
    },
    {
      id: 3,
      title: 'Laptop Over-Heating',
      description: 'Please My laptop is emitting smoke and over heating. When will it be fixed and repaired. It is very important.',
      comment: null,
      date: '2018-04-22T23:00:00.000Z',
      status: 'New',
      userid: '041b755d-3651-4571-92b2-f28bcbf8adcc'
    },
    {
      id: 2,
      title: 'Broken Monitor',
      description: 'One of the Monitors in my office is broken. When will it be fixed and repaired. It is very important.',
      comment: null,
      date: '2018-04-20T23:00:00.000Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    },
    {
      id: 1,
      title: 'Broken Desk',
      description: 'One of the desks in my office is broken. When will it be fixed and repaired. It is very important.',
      comment: null,
      date: '2018-04-19T23:00:00.000Z',
      status: 'New',
      userid: '6bf54873-6033-4ab0-855d-336a34e1dfbc'
    }
  ]
}

export default mockData;
