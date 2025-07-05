import { useEffect, useRef, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { IoNotificationsCircle,IoTrashBin } from 'react-icons/io5';
import API_URL from '../../Config';

const NotificationBell = () => {
  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const fetchUnreadCount = async () => {
    const res = await fetch(`${API_URL}/notification/unread-count`,{
      method: "GET",
      credentials:'include'
    });
    const data = await res.json();
    setCount(data.unreadCount);
  };


  const fetchNotifications = async () => {
    // const res = await fetch('http://localhost:3600/notification');
    const res = await fetch(`${API_URL}/notification`,{
      method: "GET",
      credentials:'include'
    });
    const data = await res.json();
    setNotifications(data);
  };
  
  const toggleDropdown = async () => {
    if (!showDropdown) await fetchNotifications();
    setShowDropdown(!showDropdown);
  };

  const markAllRead = async () => {
    // await fetch(`http://localhost:3600/notification/mark-all-read`, { method: 'POST' });
    await fetch(`${API_URL}/notification/mark-all-read`, { method: 'POST' });
    setCount(0);
    await fetchNotifications();
  };

  const deleteAll = async () => {
    await fetch(`${API_URL}/delete-all`, { method: 'DELETE', credentials:"include" });
    setNotifications([]);
    setCount(0);
  };

  
  const markAsRead = async (id) => {
    await fetch(`${API_URL}/notification/mark-as-read/${id}`, { method: 'POST', credentials:"include" });
    await fetchNotifications();
    await fetchUnreadCount();
  };

  const deleteOne = async (id) => {
    await fetch(`${API_URL}/notification/${id}`, { method: 'DELETE' , credentials:"include"});
    await fetchNotifications();
    await fetchUnreadCount();
  };

  useEffect(() => {
    fetchUnreadCount();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <div className="relative" ref={dropdownRef}>
        {/* <Bell className="text-black w-6 h-6" /> */}
        <button onClick={toggleDropdown} className="relative ">
            <IoNotificationsCircle className=" text-[1.3rem] cursor-pointer"/>
            {count > 0 && (
                <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-[10px] h-[15px] w-[15px] inline-grid place-items-center rounded-full">
                {count}
                </span>
            )}
        </button>
      
        {showDropdown && (
        <div className="absolute right-0 mt-2 w-[280px] bg-white border rounded shadow-md z-50 max-h-[200px] overflow-y-auto">
          <div className="flex items-center justify-between px-3 py-2 border-b">
            <span className="font-bold">Notifications</span>
            <div className="flex gap-2">
              <button className="text-xs text-blue-500" onClick={markAllRead}>Mark all as read</button>
              <button className="text-xs text-red-500" onClick={deleteAll}>Delete all</button>
            </div>
          </div>
          {notifications.length === 0 ? (
            <div className="p-2 text-gray-500 text-sm">No notifications yet</div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif._id}
                className={`px-3 py-2 text-sm flex justify-between border-b ${notif.read ? 'text-gray-500' : 'text-black font-semibold'}`}
              >
                <div>
                    {notif.type === 'order' && (
                        <span className="text-blue-500 text-[12px]">New Order: </span>
                    )}
                    {notif.message}
                </div>
              
                <div className="flex gap-1 mt-0.5">
                  {!notif.isRead && (
                    <button onClick={() => markAsRead(notif._id)} title="Mark as read">
                      <BiCheck size={16} className="text-green-600" />
                    </button>
                  )}
                  <button onClick={() => deleteOne(notif._id)} title="Delete">
                    <IoTrashBin size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
