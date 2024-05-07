import React, { useState } from 'react';
import withAuth from '../auth/withAuth';
const Admin = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    image: '',
    origin: '',
    alcoholContent: '',
    price: ''
  });
  const [imageFile, setImageFile] = useState(null); 
  const [activeTab, setActiveTab] = useState('add');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState(null);
  const [editItemIndex, setEditItemIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (URL.createObjectURL) {
        setImageFile(file);
        setNewItem({ ...newItem, image: URL.createObjectURL(file) });
      } else {
        console.error("createObjectURL is not supported in this browser");
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem({
      name: '',
      image: '',
      origin: '',
      alcoholContent: '',
      price: ''
    });
    setImageFile(null);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const editItem = (index, item) => {
    setEditItemIndex(index);
    setNewItem(item);
    setActiveTab('add');
    setDeleteConfirmationIndex(index)
  };

  const deleteItem = (index) => {
    setDeleteConfirmationIndex(index);
  };

  const confirmDelete = () => {
    const updatedItems = [...items];
    updatedItems.splice(deleteConfirmationIndex, 1);
    setItems(updatedItems);
    setDeleteConfirmationIndex(null);
  };

  const cancelDelete = () => {
    setDeleteConfirmationIndex(null);
  };
  const validateNewItem = () => {
    return (
      newItem.name.trim() !== '' &&
      newItem.image !== '' &&
      newItem.origin.trim() !== '' &&
      newItem.alcoholContent.trim() !== '' &&
      newItem.price.trim() !== ''
    );
  };

  return (
    <div className="bg-orange-50 flex">
      <div className="w-1/4 bg-gray-100 ">
        <div className="p-4 h-screen ">
          <h2 className="text-xl font-bold mb-4">Quản lý</h2>
          <ul className='text-lg'>
            <li className={`h-10 pl-1 flex items-center justify-center border rounded-xl border-orange-300 mb-4 cursor-pointer shadow-xl ${activeTab === 'add' ? 'text-white bg-orange-500 shadow-xl' : ''}`} onClick={() => handleTabChange('add')}>Thêm mục</li>
            <li className={`h-10 pl-1 flex items-center justify-center border rounded-xl border-orange-300 cursor-pointer shadow-xl ${activeTab === 'list' ? 'text-white bg-orange-500 shadow-xl' : ''}`} onClick={() => handleTabChange('list')}>Danh sách các mục</li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 pl-4 ">
        {activeTab === 'add' && (
          <div className='bg-orange-50 mr-4'>
            <h2 className='font-semibold text-xl mb-4 pb-2 pt-6'>{editItemIndex !== null ? 'Chỉnh sửa mục' : 'Thêm mục'}</h2>
            <input className='w-full mb-4 p-2 border border-orange-300 rounded-lg' type="text" name="name" placeholder="Tên rượu" value={newItem.name} onChange={handleInputChange} />
            <input className='w-full mb-4 p-2 border border-gray-300 rounded-lg' type="file" accept="image/*" onChange={handleImageChange} />
            {imageFile && <img src={newItem.image} alt="Preview" className="w-1/2 mb-2 rounded-lg" />}
            <input className='w-full mb-4 p-2 border border-orange-300 rounded-lg' type="text" name="alcoholContent" placeholder="Nồng độ cồn" value={newItem.alcoholContent} onChange={handleInputChange} />
            <input className='w-full mb-4 p-2 border border-orange-300 rounded-lg' type="text" name="origin" placeholder="Suất xứ" value={newItem.origin} onChange={handleInputChange} />
            <input className='w-full mb-4 p-2 border border-orange-300 rounded-lg' type="text" name="price" placeholder="Giá" value={newItem.price} onChange={handleInputChange} />
            <div className='flex justify-center'>
              <button className={`bg-orange-500 text-white px-4 py-2 rounded ${validateNewItem() ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={addItem} disabled={!validateNewItem()}>{editItemIndex !== null ? 'Cập nhật' : 'Thêm'}</button></div>
            {showSuccessMessage && (
              <div className="mt-2 p-2 bg-green-100 text-green-800 rounded text-center">
                {editItemIndex !== null ? 'Cập nhật thành công!' : 'Thêm thành công!'}
              </div>
            )}
          </div>
        )}
        {activeTab === 'list' && (
          <div className='bg-orange-50'>
            <h2 className='font-semibold text-xl mb-4 pb-2 pt-6'>Danh sách </h2>
            <div className="grid md:grid-cols-2 gap-4 pt-2 mr-4">
              {items.map((item, index) => (
                <div key={index} className="border border-orange-300 rounded-lg p-4 relative">
                  <div><span className="font-semibold">Tên rượu:</span> {item.name}</div>
                  <div><span className="font-semibold">Hình ảnh:</span> {item.image && <img src={item.image} alt="Preview" className="w-full" />}</div>
                  <div><span className="font-semibold">Suất xứ:</span> {item.origin}</div>
                  <div><span className="font-semibold">Nồng độ cồn:</span> {item.alcoholContent}</div>
                  <div><span className="font-semibold">Giá:</span> {item.price}</div>
                  <div className="flex justify-start mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2" onClick={() => editItem(index, item)}>Sửa</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => deleteItem(index)}>Xóa</button>
                  </div>
                  {deleteConfirmationIndex === index && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center rounded-md">
                      <div className="bg-white p-4 rounded">
                        <p className="mb-4">Bạn có chắc chắn muốn xóa mục này?</p>
                        <div className="flex justify-end">
                          <button className="bg-red-500 text-white px-4 py-1 rounded mr-2" onClick={confirmDelete}>Xóa</button>
                          <button className="bg-gray-300 px-4 py-1 rounded" onClick={cancelDelete}>Hủy</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuth(Admin);
