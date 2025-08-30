import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil } from "lucide-react";

const EditProfile = ({setShowEdit}) => {
  const user = dummyUserData;
  const [edit, setEdit] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    cover_photo: null,
    full_name: user.full_name,
  });
  const handleSaveProfile =async(e)=>{
    e.preventDefault()
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50">
      <div className="max-w-2xl mx-auto sm:py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>
          <form onSubmit={handleSaveProfile}  className="space-y-4">
            {/* profile picture */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
                <input
                  onChange={(e) =>
                    setEdit({ ...edit, profile_picture: e.target.files[0] })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  type="file"
                  hidden
                  accept="image/*"
                  id="profile_picture"
                />
              </label>
              <div className="group/profile relative">
                <img
                  className="w-24 h-24 rounded-full object-cover mt-2"
                  src={
                    edit.profile_picture
                      ? URL.createObjectURL(edit.profile_picture)
                      : user.profile_picture
                  }
                  alt=""
                />
                <div className="absolute hidden group-hover/profile:flex top-0 left-0 bottom-0 right-0 bg-black/20 rounded-full items-center justify-center">
                  <Pencil className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            {/* cover photo */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Photo
                <input
                  onChange={(e) =>
                    setEdit({ ...edit, cover_photo: e.target.files[0] })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  type="file"
                  hidden
                  accept="image/*"
                  id="cover_photo"
                />
                <div className="group/cover relative">
                  <img className="w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2" src={edit.cover_photo ? URL.createObjectURL(edit.cover_photo):user.cover_photo} alt="" />
                  <div className="absolute hidden group-hover/cover:flex top-0 left-0 bottom-0 right-0 bg-black/20 rounded-full items-center justify-center">
                    <Pencil className="w-5 h-5 text-white"/>
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
              <input value={edit.full_name} onChange={(e)=>setEdit({...edit,full_name:e.target.value})} placeholder="Please enter your full name" type="text" className="p-3 w-full border border-gray-200 rounded-lg" />
            </div>
              <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Username</label>
              <input value={edit.username} onChange={(e)=>setEdit({...edit,username:e.target.value})} placeholder="Please enter your username" type="text" className="p-3 w-full border border-gray-200 rounded-lg" />
            </div>
              <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Bio</label>
              <textarea rows={3} value={edit.bio} onChange={(e)=>setEdit({...edit,bio:e.target.value})} placeholder="Please enter your short bio" type="text" className="p-3 w-full border border-gray-200 rounded-lg" />
            </div>
              <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Location</label>
              <input value={edit.location} onChange={(e)=>setEdit({...edit,location:e.target.value})} placeholder="Please enter your location" type="text" className="p-3 w-full border border-gray-200 rounded-lg" />
            </div>
            <div className="flex justify-end space-x-3 pt-6">
                    <button onClick={()=>setShowEdit(false)} type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
                    <button  type="submit" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
