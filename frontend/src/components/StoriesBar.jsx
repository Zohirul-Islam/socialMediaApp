import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import StoryModel from "./StoryModel";
import Storyviewer from "./Storyviewer";

const StoriesBar = () => {
  const [stories, setStoried] = useState([]);
  const [showModel,setShowModel] = useState(false);
  const [viewStory,setViewStory] = useState(null);

  const fetchStories = async () => {
    setStoried(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div className="w-screen sm:w-[calc[100vw-240px]] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        {/* add story card */}
        <div onClick={()=>setShowModel(true)} className="rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed  border-indigo-300 bg-gradient-to-b from-indigo-50 to-white">
          <div className="flex flex-col items-center justify-center  p-4 h-full">
            <div className="bg-indigo-500 size-10 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-slate-700 text-center">
              Create Story
            </p>
          </div>
        </div>
        {/* list of story */}
        {stories.map((item, index) => (
          <div
            onClick={()=>setViewStory(item)}
            key={index}
            className={`relative rounded-lg shadow min-w-30 max-w-30 max-h-40 cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95`}
          >
            <img
              className="absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow"
              src={item.user.profile_picture}
              alt=""
            />
            <p className="absolute top-18 left-3 text-white/60 text-sm truncate max-w-24">
              {item.content}
            </p>
            <p className="text-white absolute bottom-1 right-2 z-10 text-xs">
              {moment(item.createdAt).fromNow()}
            </p>
            {item.media_type !== "text" && (
              <div className="absolute inset-0 z-1 rounded-lg bg-black overflow-hidden">
                {item.media_type === "image" ? (
                  <img
                    src={item.media_url}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                    alt=""
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                    src={item.media_url}
                  ></video>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* add story model */}
      {
        showModel && <StoryModel setShowModel={setShowModel} fetchStories={fetchStories}/>
      }
      {/* story view model */}
      {
        viewStory && <Storyviewer viewStory ={viewStory} setViewStory ={setViewStory}/>
      }
    </div>
  );
};

export default StoriesBar;
