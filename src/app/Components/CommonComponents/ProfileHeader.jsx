function ProfileHeader({ coverImage, profileImage, fullName, tittle }) {
  return (
    <div className="text-center">
      <div className="coverImage h-32 overflow-hidden flex items-center justify-center">
        <img
          className="block w-full bg-slate-700"
          src={coverImage ? coverImage : "cover.jpeg"}
          alt="no image"
        />
      </div>
      <div className="profileImage mt-[-50px] flex items-center justify-center">
        <img
          className="h-20 w-20 block bg-slate-500 rounded-full"
          src={profileImage}
          alt="no image"
        />
      </div>
      <div className="coverImage">
        <h1 className="text-2xl text-white">{fullName}</h1>
        <h1 className="text-slate-400 text-sm">{tittle}</h1>
      </div>
    </div>
  );
}

export default ProfileHeader;
