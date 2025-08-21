import { ArrowLeft, Sparkle, TextIcon, Upload } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const StoryModel = ({ setShowModel, fetchStories }) => {
  /* state start */
  const bgColor = ["#4f46ef", "#7c3aed", "#db2777", "#e11d48", "#ca8a04"];
  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgColor[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setpreviewUrl] = useState(null);
  /* state ends */

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setpreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleCreateStory = async () => {};

  return (
    <div className="fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4 flex items-center justify-between">
          <button
            onClick={() => setShowModel(false)}
            className="text-white p-2 cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-medium">Create Story</h2>
          <span className="w-10"></span>
        </div>

        <div
          className="rounded-lg h-96 flex items-center justify-center relative"
          style={{ backgroundColor: background }}
        >
          {mode === "text" && (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="what's on your mind ?"
              className="bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-0"
            ></textarea>
          )}
          {mode === "media" &&
            previewUrl &&
            (media?.type.startsWith("image") ? (
              <img
                className="object-contain max-h-full"
                src={previewUrl}
                alt=""
              />
            ) : (
              <video
                className="object-contain max-h-full"
                src={previewUrl}
              ></video>
            ))}
        </div>
        <div className="flex mt-4 gap-2">
          {bgColor.map((color) => (
            <button
              onClick={() => setBackground(color)}
              key={color}
              style={{ backgroundColor: color }}
              className="w-6 h-6 rounded-full ring cursor-pointer"
            />
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => {
              setMode("text");
              setMedia(null);
              setpreviewUrl(null);
            }}
            className={`flex-1 cursor-pointer flex items-center justify-center gap-2 rounded ${
              mode === "text" ? "bg-white text-black" : "bg-zinc-800"
            }`}
          >
            <TextIcon size={18} />
            Text
          </button>
          <label
            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${
              mode === "media" ? "bg-white text-black" : "bg-zinc-800"
            }`}
          >
            <input
              onChange={(e) => {
                handleMediaUpload(e);
                setMode("media");
              }}
              type="file"
              accept="image/*,video/*"
              className="hidden"
            />
            <Upload size={18} />
            Photo/Video
          </label>
        </div>
        <button onClick={()=>toast.promise(handleCreateStory(),{loading:'Saving...',success:<p>Story added</p>,error:e=><p>{e.message}</p>})} className="w-full bg-gradient-to-b from-indigo-600 to-black flex justify-center items-center py-2 mt-3 rounded gap-2">
          <Sparkle size={18} /> Create Story
        </button>
      </div>
    </div>
  );
};

export default StoryModel;
