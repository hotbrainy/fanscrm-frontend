import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const navigate = useNavigate();
  const { userCtx, setUserCtx } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!userCtx || !userCtx.access_token) {
      navigate('/login');
    }
    return () => {};
  }, [userCtx]);
  useEffect(() => {
    fetch('/api/v1/get-users', {
      headers: {
        Authorization: 'Bearer ' + userCtx.access_token,
      },
    }).then(async (res) => {
      console.log({ res });
      const users = await res.json();
      setUsers(users);
    });
    console.log(setUserCtx);
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Registerd At
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0
            ? users.map((u, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{u.name}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">{u.createdAt}</td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </div>
  );
};

export default User;
